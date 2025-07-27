"use client";

import React from "react";

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = "" }) => {
  return (
    <div
      className={`bg-gradient-to-r from-gray-800 to-gray-700 animate-pulse rounded-lg ${className}`}
    />
  );
};

export const SkeletonCard: React.FC = () => {
  return (
    <div className="card p-4 mb-3">
      <div className="flex justify-between">
        <div className="flex-1 min-w-0">
          <Skeleton className="w-3/4 h-5 mb-3" />
          <div className="flex gap-3 mb-3">
            <Skeleton className="w-10 h-4" />
            <Skeleton className="w-10 h-4" />
            <Skeleton className="w-16 h-4" />
          </div>
          <Skeleton className="w-20 h-3" />
        </div>
        <Skeleton className="w-16 h-16 rounded-lg" />
      </div>
      <Skeleton className="w-32 h-4 mt-3" />
    </div>
  );
};

export default Skeleton;
