export interface RedditPost {
  id: string;
  title: string;
  author: string;
  score: number;
  url: string;
  permalink: string;
  num_comments: number;
  created_utc: number;
  thumbnail?: string;
}

export interface Subreddit {
  name: string;
  displayName: string;
  icon?: string;
}

export interface SubredditLane {
  subreddit: Subreddit;
  posts: RedditPost[];
  loading: boolean;
  error: string | null;
}
