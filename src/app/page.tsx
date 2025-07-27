// "use client";

// import React from "react";
// import SubredditLane from "@/components/SubredditLane";
// import AddSubredditForm from "@/components/AddSubredditForm";
// import { useSubredditLanes } from "@/hooks/useSubredditLanes";
// import useLocalStorage from "@/hooks/useLocalStorage";
// import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
// import Head from "next/head";

// export default function Home() {
//   const [initialLanes] = useLocalStorage<string[]>("subredditLanes", [
//     "reactjs",
//     "nextjs",
//     "programming",
//   ]);

//   const { lanes, addLane, removeLane, refreshLane, isAdding, addError } =
//     useSubredditLanes(initialLanes);

//   // Initialize with default lanes
//   React.useEffect(() => {
//     if (lanes.length === 0 && initialLanes.length > 0) {
//       initialLanes.forEach(addLane);
//     }
//   }, [addLane, initialLanes, lanes.length]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
//       <Head>
//         <title>Reddit Client | Custom Subreddit Lanes</title>
//         <meta
//           name="description"
//           content="A customizable Reddit client with subreddit lanes"
//         />
//       </Head>

//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
//         <div className="max-w-7xl mx-auto">
//           <header className="text-center mb-12">
//             <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
//               Reddit<span className="text-reddit-orange">Lanes</span>
//             </h1>
//             <p className="text-gray-600 max-w-xl mx-auto">
//               Create your own customizable Reddit dashboard with multiple
//               subreddit lanes
//             </p>
//           </header>

//           <AddSubredditForm
//             onAdd={addLane}
//             isLoading={isAdding}
//             error={addError}
//           />

//           {lanes.length === 0 ? (
//             <div className="text-center py-16">
//               <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
//               <h3 className="text-lg font-medium text-gray-900 mb-1">
//                 No subreddits added yet
//               </h3>
//               <p className="text-gray-500">
//                 Add your first subreddit to get started
//               </p>
//             </div>
//           ) : (
//             <>
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-xl font-bold text-gray-800">
//                   Your Subreddit Lanes
//                 </h2>
//                 <div className="text-sm text-gray-500">
//                   {lanes.length} {lanes.length === 1 ? "lane" : "lanes"}
//                 </div>
//               </div>

//               <div className="relative">
//                 <div className="flex space-x-6 pb-4 overflow-x-auto scrollbar-hide">
//                   {lanes.map((lane) => (
//                     <SubredditLane
//                       key={lane.subreddit.name}
//                       lane={lane}
//                       onRemove={() => removeLane(lane.subreddit.name)}
//                       onRefresh={() => refreshLane(lane.subreddit.name)}
//                     />
//                   ))}
//                 </div>

//                 <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
//                 <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
//               </div>

//               <div className="mt-8 flex justify-center space-x-4">
//                 <button
//                   onClick={() => {
//                     const container =
//                       document.querySelector(".overflow-x-auto");
//                     if (container) {
//                       container.scrollBy({ left: -300, behavior: "smooth" });
//                     }
//                   }}
//                   className="p-2 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-50"
//                   aria-label="Scroll left"
//                 >
//                   <HiArrowLeft className="w-5 h-5 text-gray-600" />
//                 </button>
//                 <button
//                   onClick={() => {
//                     const container =
//                       document.querySelector(".overflow-x-auto");
//                     if (container) {
//                       container.scrollBy({ left: 300, behavior: "smooth" });
//                     }
//                   }}
//                   className="p-2 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-50"
//                   aria-label="Scroll right"
//                 >
//                   <HiArrowRight className="w-5 h-5 text-gray-600" />
//                 </button>
//               </div>
//             </>
//           )}

//           <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
//             <p>
//               RedditLanes is not affiliated with Reddit. Data provided by the
//               Reddit API.
//             </p>
//             <p className="mt-1">
//               Created with Next.js, TypeScript, and Tailwind CSS
//             </p>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useRef } from "react";
import SubredditLane from "@/components/SubredditLane";
import AddSubredditForm from "@/components/AddSubredditForm";
import { useSubredditLanes } from "@/hooks/useSubredditLanes";
import useLocalStorage from "@/hooks/useLocalStorage";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function Home() {
  const [initialLanes] = useLocalStorage<string[]>("subredditLanes", [
    "reactjs",
    "nextjs",
    "programming",
  ]);

  const { lanes, addLane, removeLane, refreshLane, isAdding, addError } =
    useSubredditLanes(initialLanes);

  const lanesContainerRef = useRef<HTMLDivElement>(null);

  const scrollLanes = (direction: "left" | "right") => {
    if (lanesContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      lanesContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-dark-bg">
      <Header />

      <main className="flex-1 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">
              Custom Reddit Dashboard
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Create your personalized Reddit experience with customizable
              subreddit lanes
            </p>
          </div>

          <AddSubredditForm
            onAdd={addLane}
            isLoading={isAdding}
            error={addError}
          />

          {lanes.length === 0 ? (
            <div className="bg-card-dark border border-gray-800 rounded-xl shadow-xl text-center py-16 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 border-2 border-dashed border-gray-700 rounded-xl w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-200 mb-2">
                Your dashboard is empty
              </h3>
              <p className="text-gray-500 mb-6">
                Add your first subreddit to get started
              </p>
              <button
                onClick={() => addLane("popular")}
                className="bg-gradient-to-r from-accent-blue to-accent-purple text-white px-4 py-2 rounded-lg font-medium transition-all hover:opacity-90 active:scale-[0.98] shadow-md"
              >
                Add Example Lane
              </button>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-200">
                  Your Subreddit Lanes
                </h3>
                <div className="text-sm text-gray-400">
                  {lanes.length} {lanes.length === 1 ? "lane" : "lanes"}
                </div>
              </div>

              <div className="relative">
                <div
                  ref={lanesContainerRef}
                  className="flex space-x-6 pb-6 overflow-x-auto scrollbar-hide"
                >
                  {lanes.map((lane) => (
                    <SubredditLane
                      key={lane.id}
                      lane={lane}
                      onRemove={() => removeLane(lane.id)}
                      onRefresh={() => refreshLane(lane.id)}
                    />
                  ))}
                </div>

                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-dark-bg to-transparent pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-dark-bg to-transparent pointer-events-none"></div>

                {lanes.length > 1 && (
                  <div className="mt-4 flex justify-center space-x-4">
                    <button
                      onClick={() => scrollLanes("left")}
                      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-gray-300"
                      aria-label="Scroll left"
                    >
                      <HiArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => scrollLanes("right")}
                      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-gray-300"
                      aria-label="Scroll right"
                    >
                      <HiArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
