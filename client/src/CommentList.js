import React from "react";

function CommentList({ comments }) {
  const renderedComments = comments.map((comment) => {
    let content;
    if (comment.status === "approved") content = comment.content;
    if (comment.status === "pending") content = "Comment is pending approval";
    if (comment.status === "rejected") content = "Comment has been rejected";
    return <li key={comment.id}>{content}</li>;
  });

  return <div>{renderedComments}</div>;
}

export default CommentList;
