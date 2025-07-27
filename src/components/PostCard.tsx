// // src/components/PostCard.tsx
// "use client";

// import React from "react";
// import { RedditPost } from "@/types/reddit";
// import { HiArrowUp, HiArrowDown, HiChatAlt } from "react-icons/hi";
// import { formatTimeAgo } from "@/utils/time";

// const PostCard: React.FC<{ post: RedditPost }> = ({ post }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 mb-3 border border-gray-100">
//       <div className="flex items-center mb-2">
//         <div className="flex items-center mr-3">
//           <HiArrowUp className="text-green-500" />
//           <span className="mx-1 font-medium">{post.score}</span>
//           <HiArrowDown className="text-red-500" />
//         </div>

//         <div className="flex items-center text-sm text-gray-500">
//           <HiChatAlt className="mr-1" />
//           {post.num_comments}
//         </div>
//       </div>

//       <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
//         {post.title}
//       </h3>

//       <div className="flex items-center justify-between text-xs text-gray-500">
//         <span>by u/{post.author}</span>
//         <span>{formatTimeAgo(post.created_utc * 1000)}</span>
//       </div>
//     </div>
//   );
// };

// export default PostCard;

"use client";

import React from "react";
import { RedditPost } from "@/types/reddit";
import {
  HiArrowUp,
  HiArrowDown,
  HiChatAlt,
  HiExternalLink,
} from "react-icons/hi";
import { formatTimeAgo } from "@/utils/time";

const PostCard: React.FC<{ post: RedditPost }> = ({ post }) => {
  return (
    <div className="card p-4 mb-3 transition-all hover:border-gray-600 group">
      <div className="flex justify-between items-start">
        <div className="flex-1 min-w-0">
          <a
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <h3 className="font-semibold text-gray-100 mb-2 line-clamp-2 group-hover:text-accent-purple transition-colors">
              {post.title}
            </h3>
          </a>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-3">
            <span className="flex items-center gap-[5px]">
              <HiArrowUp className="text-green-500 mr-1" />
              <span className="font-medium text-gray-300">{post.score}</span>
              <HiArrowDown className="text-red-500 ml-2 mr-1" />
            </span>

            <span className="flex items-center">
              <HiChatAlt className="mr-1" />
              {post.num_comments}
            </span>

            <span>by u/{post.author}</span>
          </div>

          <div className="text-xs text-gray-500">
            {formatTimeAgo(post.created_utc * 1000)}
          </div>
        </div>

        {post.thumbnail && (
          <div className="ml-4 flex-shrink-0">
            <div
              className="bg-gray-700 border border-gray-600 rounded-lg w-16 h-16 bg-cover bg-center"
              style={{ backgroundImage: `url(${post.thumbnail})` }}
            />
          </div>
        )}
      </div>

      <a
        href={post.permalink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center text-sm text-accent-blue hover:text-accent-purple transition-colors"
      >
        View on Reddit <HiExternalLink className="ml-1" />
      </a>
    </div>
  );
};

export default PostCard;
