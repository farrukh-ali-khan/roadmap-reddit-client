// import axios from "axios";
// import { RedditPost, Subreddit } from "@/types/reddit";

// export const fetchSubredditPosts = async (
//   subreddit: string
// ): Promise<RedditPost[]> => {
//   try {
//     const response = await axios.get(
//       `https://www.reddit.com/r/${subreddit}.json?limit=10`,
//       {
//         // Remove cache control headers as they cause issues in browser
//       }
//     );

//     return response.data.data.children.map((child: any) => ({
//       id: child.data.id,
//       title: child.data.title,
//       author: child.data.author,
//       score: child.data.score,
//       url: child.data.url,
//       permalink: `https://reddit.com${child.data.permalink}`,
//       num_comments: child.data.num_comments,
//       created_utc: child.data.created_utc,
//       thumbnail: child.data.thumbnail?.startsWith("http")
//         ? child.data.thumbnail
//         : null,
//     }));
//   } catch (error) {
//     throw new Error(`Failed to fetch posts from r/${subreddit}`);
//   }
// };

import axios from "axios";
import { RedditPost, Subreddit } from "@/types/reddit";

// Create a new function that supports sorting
export const fetchSortedSubredditPosts = async (
  subreddit: string,
  sort: string = "new" // Default to latest
): Promise<RedditPost[]> => {
  try {
    const response = await axios.get(
      `https://www.reddit.com/r/${subreddit}/${sort}.json?limit=10`
    );

    return response.data.data.children.map((child: any) => ({
      id: child.data.id,
      title: child.data.title,
      author: child.data.author,
      score: child.data.score,
      url: child.data.url,
      permalink: `https://reddit.com${child.data.permalink}`,
      num_comments: child.data.num_comments,
      created_utc: child.data.created_utc,
      thumbnail: child.data.thumbnail?.startsWith("http")
        ? child.data.thumbnail
        : null,
    }));
  } catch (error) {
    throw new Error(`Failed to fetch posts from r/${subreddit}`);
  }
};

export const validateSubreddit = async (name: string): Promise<Subreddit> => {
  try {
    const response = await axios.get(
      `https://www.reddit.com/r/${name}/about.json`
    );

    return {
      name,
      displayName: response.data.data.display_name,
      icon: response.data.data.icon_img || null,
    };
  } catch (error) {
    throw new Error(`Subreddit r/${name} not found`);
  }
};
