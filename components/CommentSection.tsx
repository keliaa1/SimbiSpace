"use client";

import React, { useEffect, useState } from "react";
import { format } from "date-fns";

interface Comment {
  id: string;
  text: string;
  date: number;
}

interface CommentSectionProps {
  blogId: string;
}

const CommentSection = ({ blogId }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedComments = localStorage.getItem(`comments-${blogId}`);
    if (storedComments) {
      try {
        setComments(JSON.parse(storedComments));
      } catch (e) {
        console.error("Failed to parse comments", e);
      }
    }
  }, [blogId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: crypto.randomUUID(),
      text: newComment.trim(),
      date: Date.now(),
    };

    const updatedComments = [comment, ...comments];
    setComments(updatedComments);
    localStorage.setItem(`comments-${blogId}`, JSON.stringify(updatedComments));
    setNewComment("");
  };

  if (!mounted) return null;

  return (
    <div className="mt-16 border-t border-gray-200 pt-10 font-poppins">
      <h3 className="text-2xl font-semibold mb-6 font-cormorant-garamond">
        Comments
      </h3>

      <form onSubmit={handleSubmit} className="mb-10 flex flex-col gap-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Leave an anonymous comment..."
          className="w-full p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none min-h-[100px] transition-all"
        />
        <button
          type="submit"
          className="self-end px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-colors uppercase text-sm tracking-wider"
        >
          Post Comment
        </button>
      </form>

      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-gray-500 italic">No comments yet. Be the first!</p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white/40 backdrop-blur-md p-6 rounded-lg border border-white/50 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800">Anonymous</span>
                <span className="text-xs text-gray-500">
                  {format(comment.date, "MMM d, yyyy • h:mm a")}
                </span>
              </div>
              <p className="text-gray-700 whitespace-pre-wrap">{comment.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
