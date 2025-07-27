// // src/components/SubredditLane.tsx
// 'use client';

// import React from 'react';
// import { HiRefresh, HiX } from 'react-icons/hi';
// import { SubredditLane } from '@/types/reddit';
// import PostCard from './PostCard';
// import { SkeletonCard } from './Skeleton';

// const SubredditLane: React.FC<{
//   lane: SubredditLane;
//   onRemove: () => void;
//   onRefresh: () => void;
// }> = ({ lane, onRemove, onRefresh }) => {
//   return (
//     <div className="bg-gray-50 rounded-xl p-4 w-full min-w-[300px] max-w-md flex flex-col shadow-sm border border-gray-200">
//       <div className="flex justify-between items-center mb-4">
//         <div className="flex items-center">
//           {lane.subreddit.icon ? (
//             <img
//               src={lane.subreddit.icon}
//               alt={lane.subreddit.displayName}
//               className="w-8 h-8 rounded-full mr-2"
//               onError={(e) => {
//                 (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmNDUwMCI+PHBhdGggZD0iTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMHptMCAyMkM2LjQ4NiAyMiAyIDE3LjUxNCAyIDEyUzYuNDg2IDIgMTIgMnMxMCA0LjQ4NiAxMCAxMC00LjQ4NiAxMC0xMCAxMHoiLz48cGF0aCBkPSJNMTIgMTBjLTEuMTA1IDAtMiAuODk1LTIgMnMuODk1IDIgMiAyIDItLjg5NSAyLTItLjg5NS0yLTItMnptMC02Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2IDYtMi42ODYgNi02LTIuNjg2LTYtNi02em0wIDExYy0yLjc2MSAwLTUtMi4yMzktNS01czIuMjM5LTUgNS01IDUgMi4yMzkgNSA1LTIuMjM5IDUtNSA1eiIvPjwvc3ZnPg==';
//               }}
//             />
//           ) : (
//             <div className="bg-reddit-orange w-8 h-8 rounded-full mr-2 flex items-center justify-center">
//               <span className="text-white font-bold">r/</span>
//             </div>
//           )}
//           <h2 className="font-bold text-lg">
//             r/{lane.subreddit.displayName}
//           </h2>
//         </div>

//         <div className="flex space-x-2">
//           <button
//             onClick={onRefresh}
//             disabled={lane.loading}
//             className="p-1.5 rounded-full hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700 disabled:opacity-50"
//             aria-label="Refresh"
//           >
//             <HiRefresh className={`w-5 h-5 ${lane.loading ? 'animate-spin' : ''}`} />
//           </button>
//           <button
//             onClick={onRemove}
//             className="p-1.5 rounded-full hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700"
//             aria-label="Remove"
//           >
//             <HiX className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {lane.error ? (
//         <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4 text-sm">
//           {lane.error}
//         </div>
//       ) : null}

//       <div className="overflow-y-auto flex-grow pr-2 -mr-2">
//         {lane.loading ? (
//           Array.from({ length: 5 }).map((_, idx) => (
//             <div key={idx} className="mb-3">
//               <SkeletonCard />
//             </div>
//           ))
//         ) : lane.posts.length > 0 ? (
//           lane.posts.map(post => (
//             <PostCard key={post.id} post={post} />
//           ))
//         ) : (
//           <div className="text-center py-8 text-gray-500">
//             No posts found in this subreddit
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SubredditLane;

"use client";

import React from "react";
import { HiRefresh, HiX } from "react-icons/hi";
import { SubredditLane } from "@/types/reddit";
import PostCard from "./PostCard";
import { SkeletonCard } from "./Skeleton";

const SubredditLane: React.FC<{
  lane: SubredditLane;
  onRemove: () => void;
  onRefresh: () => void;
}> = ({ lane, onRemove, onRefresh }) => {
  const subredditUrl = `https://www.reddit.com/r/${lane.subreddit.name}`;

  return (
    <div className="card p-4 w-full min-w-[300px] max-w-md flex flex-col animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <a
            href={subredditUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            {lane.subreddit.icon ? (
              <img
                src={lane.subreddit.icon}
                alt={lane.subreddit.displayName}
                className="w-10 h-10 rounded-lg mr-3 border border-gray-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmNDUwMCI+PHBhdGggZD0iTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMHptMCAyMkM2LjQ4NiAyMiAyIDE3LjUxNCAyIDEyUzYuNDg2IDIgMTIgMnMxMCA0LjQ4NiAxMCAxMC00LjQ4NiAxMC0xMCAxMHoiLz48cGF0aCBkPSJNMTIgMTBjLTEuMTA1IDAtMiAuODk1LTIgMnMuODk1IDIgMiAyIDItLjg5NSAyLTItLjg5NS0yLTItMnptMC02Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2IDYtMi42ODYgNi02LTIuNjg2LTYtNi02em0wIDExYy0yLjc2MSAwLTUtMi4yMzktNS01czIuMjM5LTUgNS01IDUgMi4yMzkgNSA1LTIuMjM5IDUtNSA1eiIvPjwvc3ZnPg==";
                }}
              />
            ) : (
              <div className="bg-gradient-to-r from-reddit-orange to-orange-500 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">r/</span>
              </div>
            )}
            <div>
              <h2 className="font-bold text-lg">
                r/{lane.subreddit.displayName}
              </h2>
              <div className="text-xs text-gray-400">
                {lane.posts.length} posts
              </div>
            </div>
          </a>
        </div>

        <div className="flex space-x-1">
          <button
            onClick={onRefresh}
            disabled={lane.loading}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-400 hover:text-white disabled:opacity-50"
            aria-label="Refresh"
          >
            <HiRefresh
              className={`w-5 h-5 ${lane.loading ? "animate-spin" : ""}`}
            />
          </button>
          <button
            onClick={onRemove}
            className="p-2 rounded-lg hover:bg-red-900/30 transition-colors text-gray-400 hover:text-red-400"
            aria-label="Remove"
          >
            <HiX className="w-5 h-5" />
          </button>
        </div>
      </div>

      {lane.error ? (
        <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-300 text-sm">
          {lane.error}
        </div>
      ) : null}

      <div className="overflow-y-auto flex-grow pr-2 -mr-2 max-h-[500px] scrollbar-hide">
        {lane.loading ? (
          Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className="mb-3">
              <SkeletonCard />
            </div>
          ))
        ) : lane.posts.length > 0 ? (
          lane.posts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <div className="text-center py-8 text-gray-500">
            No posts found in this subreddit
          </div>
        )}
      </div>
    </div>
  );
};

export default SubredditLane;
