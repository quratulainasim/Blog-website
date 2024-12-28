import { useState } from "react";

interface Comment {
  id: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newCommentObj: Comment = {
      id: `${Date.now()}`, 
      text: newComment,
    };

    setComments([...comments, newCommentObj]); 
    setNewComment(""); // Clear the input field
  };

  return (
    <div className="max-w-full text-slate-500 font-bold text-lg mt-1 ml-2  text-center sm:text-left underline ">
      <h2>Comments Section</h2>
       <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            {comment.text}
          </div>
        ))}
     </div>
      <div className="pt-1 mb-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="px-12 py-3 p-2 rounded-sm border-2 mt-1 mb-1 text-xs text-slate-500"></input>
           
        <button
          onClick={handleAddComment} className="p-1 bg-slate-500 border rounded-md cursor-pointer text-white">Add Comment
        </button>
      </div>
      </div>
  );
}



























































