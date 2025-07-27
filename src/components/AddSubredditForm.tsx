"use client";

import React, { useState, useRef, useEffect } from "react";
import { HiPlus, HiSearch } from "react-icons/hi";

const AddSubredditForm: React.FC<{
  onAdd: (subreddit: string) => void;
  isLoading: boolean;
  error: string | null;
}> = ({ onAdd, isLoading, error }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input.trim().replace("r/", ""));
      setInput("");
    }
  };

  return (
    <div className="mb-8 animate-slide-up">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <HiSearch className="w-5 h-5" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a subreddit (e.g. 'programming')"
            className="w-full py-4 pl-10 pr-12 rounded-xl bg-card-dark border border-gray-700 focus:border-accent-purple focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full ${
              isLoading || !input.trim()
                ? "text-gray-600"
                : "text-white bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90"
            } transition-all`}
            aria-label="Add subreddit"
          >
            <HiPlus className="w-5 h-5" />
          </button>
        </div>

        {error && (
          <div className="mt-3 p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-300 text-sm">
            {error}
          </div>
        )}

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {["reactjs", "nextjs", "programming", "webdev", "javascript"].map(
            (sub) => (
              <button
                key={sub}
                type="button"
                onClick={() => onAdd(sub)}
                disabled={isLoading}
                className="px-3 py-1.5 text-sm bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                r/{sub}
              </button>
            )
          )}
        </div>
      </form>
    </div>
  );
};

export default AddSubredditForm;
