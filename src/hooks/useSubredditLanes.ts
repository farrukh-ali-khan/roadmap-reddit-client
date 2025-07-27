// import { useState, useEffect, useCallback } from "react";
// import {
//   fetchSubredditPosts,
//   validateSubreddit,
// } from "@/services/redditService";
// import { SubredditLane, Subreddit } from "@/types/reddit";

// export const useSubredditLanes = (initialLanes: string[] = []) => {
//   const [lanes, setLanes] = useState<SubredditLane[]>([]);
//   const [isAdding, setIsAdding] = useState(false);
//   const [addError, setAddError] = useState<string | null>(null);

//   // Initialize lanes
//   useEffect(() => {
//     const initializeLanes = async () => {
//       if (initialLanes.length > 0 && lanes.length === 0) {
//         for (const name of initialLanes) {
//           await addLane(name);
//         }
//       }
//     };

//     initializeLanes();
//   }, [initialLanes]);

//   // Add a new subreddit lane
//   const addLane = useCallback(
//     async (subredditName: string) => {
//       setIsAdding(true);
//       setAddError(null);

//       try {
//         // Check if lane already exists
//         if (lanes.some((lane) => lane.subreddit.name === subredditName)) {
//           throw new Error(`r/${subredditName} is already added`);
//         }

//         const subreddit = await validateSubreddit(subredditName);

//         setLanes((prev) => [
//           ...prev,
//           {
//             subreddit,
//             posts: [],
//             loading: true,
//             error: null,
//           },
//         ]);

//         try {
//           const posts = await fetchSubredditPosts(subredditName);
//           setLanes((prev) =>
//             prev.map((lane) =>
//               lane.subreddit.name === subredditName
//                 ? { ...lane, posts, loading: false }
//                 : lane
//             )
//           );
//         } catch (fetchError) {
//           setLanes((prev) =>
//             prev.map((lane) =>
//               lane.subreddit.name === subredditName
//                 ? {
//                     ...lane,
//                     error: (fetchError as Error).message,
//                     loading: false,
//                   }
//                 : lane
//             )
//           );
//         }
//       } catch (error) {
//         setAddError((error as Error).message);
//       } finally {
//         setIsAdding(false);
//       }
//     },
//     [lanes]
//   );

//   // Remove a subreddit lane
//   const removeLane = useCallback((subredditName: string) => {
//     setLanes((prev) =>
//       prev.filter((lane) => lane.subreddit.name !== subredditName)
//     );
//   }, []);

//   // Refresh a specific lane
//   const refreshLane = useCallback(async (subredditName: string) => {
//     setLanes((prev) =>
//       prev.map((lane) =>
//         lane.subreddit.name === subredditName
//           ? { ...lane, loading: true, error: null }
//           : lane
//       )
//     );

//     try {
//       const posts = await fetchSubredditPosts(subredditName);
//       setLanes((prev) =>
//         prev.map((lane) =>
//           lane.subreddit.name === subredditName
//             ? { ...lane, posts, loading: false }
//             : lane
//         )
//       );
//     } catch (error) {
//       setLanes((prev) =>
//         prev.map((lane) =>
//           lane.subreddit.name === subredditName
//             ? { ...lane, error: (error as Error).message, loading: false }
//             : lane
//         )
//       );
//     }
//   }, []);

//   return {
//     lanes,
//     addLane,
//     removeLane,
//     refreshLane,
//     isAdding,
//     addError,
//   };
// };

import { useState, useEffect, useCallback } from "react";
import {
  fetchSubredditPosts,
  validateSubreddit,
} from "@/services/redditService";
import { SubredditLane, Subreddit } from "@/types/reddit";

export const useSubredditLanes = (initialLanes: string[] = []) => {
  const [lanes, setLanes] = useState<SubredditLane[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [addError, setAddError] = useState<string | null>(null);

  // Generate unique ID for each lane
  const generateId = () => Math.random().toString(36).substr(2, 9);

  // Initialize lanes
  useEffect(() => {
    const initializeLanes = async () => {
      if (initialLanes.length > 0 && lanes.length === 0) {
        // Remove duplicates
        const uniqueNames = Array.from(new Set(initialLanes));
        const newLanes: SubredditLane[] = [];

        for (const name of uniqueNames) {
          try {
            const subreddit = await validateSubreddit(name);
            newLanes.push({
              id: generateId(),
              subreddit,
              posts: [],
              loading: true,
              error: null,
            });
          } catch (error) {
            console.error(`Failed to initialize subreddit ${name}:`, error);
          }
        }

        setLanes(newLanes);

        // Fetch posts after initializing
        newLanes.forEach(async (lane) => {
          try {
            const posts = await fetchSubredditPosts(lane.subreddit.name);
            setLanes((prev) =>
              prev.map((l) =>
                l.id === lane.id ? { ...l, posts, loading: false } : l
              )
            );
          } catch (error) {
            setLanes((prev) =>
              prev.map((l) =>
                l.id === lane.id
                  ? { ...l, error: (error as Error).message, loading: false }
                  : l
              )
            );
          }
        });
      }
    };

    initializeLanes();
  }, [initialLanes]);

  // Add a new subreddit lane
  const addLane = useCallback(
    async (subredditName: string) => {
      setIsAdding(true);
      setAddError(null);

      try {
        // Check if lane already exists
        if (lanes.some((lane) => lane.subreddit.name === subredditName)) {
          throw new Error(`r/${subredditName} is already added`);
        }

        const id = generateId();
        const subreddit = await validateSubreddit(subredditName);

        setLanes((prev) => [
          ...prev,
          {
            id,
            subreddit,
            posts: [],
            loading: true,
            error: null,
          },
        ]);

        try {
          const posts = await fetchSubredditPosts(subredditName);
          setLanes((prev) =>
            prev.map((lane) =>
              lane.id === id ? { ...lane, posts, loading: false } : lane
            )
          );
        } catch (fetchError) {
          setLanes((prev) =>
            prev.map((lane) =>
              lane.id === id
                ? {
                    ...lane,
                    error: (fetchError as Error).message,
                    loading: false,
                  }
                : lane
            )
          );
        }
      } catch (error) {
        setAddError((error as Error).message);
      } finally {
        setIsAdding(false);
      }
    },
    [lanes]
  );

  // Remove a subreddit lane
  const removeLane = useCallback((laneId: string) => {
    setLanes((prev) => prev.filter((lane) => lane.id !== laneId));
  }, []);

  // Refresh a specific lane
  const refreshLane = useCallback(
    async (laneId: string) => {
      setLanes((prev) =>
        prev.map((lane) =>
          lane.id === laneId ? { ...lane, loading: true, error: null } : lane
        )
      );

      const lane = lanes.find((l) => l.id === laneId);
      if (!lane) return;

      try {
        const posts = await fetchSubredditPosts(lane.subreddit.name);
        setLanes((prev) =>
          prev.map((lane) =>
            lane.id === laneId ? { ...lane, posts, loading: false } : lane
          )
        );
      } catch (error) {
        setLanes((prev) =>
          prev.map((lane) =>
            lane.id === laneId
              ? { ...lane, error: (error as Error).message, loading: false }
              : lane
          )
        );
      }
    },
    [lanes]
  );

  return {
    lanes,
    addLane,
    removeLane,
    refreshLane,
    isAdding,
    addError,
  };
};
