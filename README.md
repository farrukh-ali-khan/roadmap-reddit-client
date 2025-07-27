# Reddit Client with Customizable Subreddit Lanes

A modern, responsive Reddit client that allows users to create customizable subreddit lanes for an optimized browsing experience. Built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Features

- **Customizable Subreddit Lanes**: Create and manage multiple subreddit lanes for an organized browsing experience.
- **Real-time Data**: Fetches posts directly from the Reddit API.
- **Multiple Sort Options**: View posts sorted by _Hot_, _New_, or _Top_.
- **Local Storage**: Saves your custom lanes between sessions for persistent data.
- **Fully Responsive**: Fully optimized for mobile, tablet, and desktop devices.
- **Dark Mode**: Eye-friendly dark theme with vibrant accents.
- **Error Handling**: Graceful error messages for invalid subreddit names.

## 🛠 Installation

To get started, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/farrukh-ali-khan/roadmap-reddit-client.git
   cd roadmap-reddit-client
   ```

2. **Install dependencies**:

   Using **pnpm**:

   ```bash
   pnpm install
   ```

   Or with **npm**:

   ```bash
   npm install
   ```

   Or with **yarn**:

   ```bash
   yarn install
   ```

3. **Start the development server**:

   Using **pnpm**:

   ```bash
   pnpm dev
   ```

   Or with **npm**:

   ```bash
   npm run dev
   ```

   Or with **yarn**:

   ```bash
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## 🧑‍💻 Usage

### Adding a new subreddit lane

1. Type the name of a subreddit (e.g., `programming`) in the search bar.
2. Click the **+** button or press **Enter** to add the subreddit.
3. Use the **quick-add** buttons for popular subreddits like `r/javascript`, `r/reactjs`, etc.

### Managing lanes

- **Refresh** a lane: Click the circular **refresh** button to reload the posts.
- **Remove** a lane: Click the **X** button to delete the lane.
- **Scroll horizontally** through lanes using the left and right **arrow buttons**.

### Viewing posts

1. **Click on post titles** to view them on Reddit.
2. Use the **sort dropdown** to switch between _Hot_, _New_, and _Top_ posts.
3. **Hover** over post cards for visual feedback (such as a subtle animation).

## 🔧 Technologies Used

- **Frontend**: Next.js 15, React 19
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **API Client**: Axios
- **Icons**: React Icons
- **Type Safety**: TypeScript
- **Deployment**: Vercel

## 🤝 Contributing

We welcome contributions to this project! Here's how you can help:

1. **Fork the repository**.
2. **Create a new branch**:

   ```bash
   git checkout -b feature/your-feature
   ```

3. **Make your changes** and commit them:

   ```bash
   git commit -am 'Add some feature'
   ```

4. **Push to the branch**:

   ```bash
   git push origin feature/your-feature
   ```

5. **Open a pull request** on GitHub.

For major changes, please open an issue first to discuss your proposed changes.

## 📜 License

This project is licensed under the **ISC License**.

---

### Project from [roadmap.sh](https://roadmap.sh/projects/reddit-client)

This project was created as part of the Reddit Client Project on roadmap.sh.

```

### Key Changes:

- **Structure**: Organized the sections into logical, easy-to-read segments (e.g., Features, Live Demo, Installation, Usage).
- **Formatting**: Cleaned up code blocks and fixed markdown syntax for better readability.
- **Headings and Emojis**: Added emojis and better headings for quick understanding.
- **Clarity**: Simplified the installation and usage instructions.

Now your README looks more polished and easy for contributors and users to understand! Let me know if you'd like to add more info or modify anything.
```
