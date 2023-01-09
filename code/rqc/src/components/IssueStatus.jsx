import React from 'react';
import { StatusSelect } from './StatusSelect';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function IssueStatus({ status, issueNumber }) {

  const queryClient = useQueryClient();
  const setStatus = useMutation((updatedStatus) => {
    fetch(`/api/issues/${issueNumber}`, {
      method: 'PUT',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ status: updatedStatus })
    }).then(res => res.json())
  }, {
    onMutate: (status) => {
      const oldStatus = queryClient.getQueryData(["issues", issueNumber]).status;
      queryClient.setQueryData(["issues", issueNumber], (data) => ({ ...data, status }));

      return function rollback() {
        queryClient.setQueryData(["issues", issueNumber], (data) => ({ ...data, status: oldStatus }));
      }
    },
    onError: (error, variables, rollback) => {
      rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries(["issues", issueNumber], { exact: true })
    }
  })

  return (
    <div className='issue-options'>
      <div>
        <span>Status</span>
        <StatusSelect
          noEmptyOption
          value={status}
          onChange={(event) => setStatus.mutate(event.target.value)}
        />
      </div>
      
    </div>
  );
}

export default IssueStatus; 