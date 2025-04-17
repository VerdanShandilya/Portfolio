import React from "react";

const CodingProfile: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center space-y-8">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-black dark:text-gray-200">
        Coding Profile
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-400">
        Here is my coding profile:
      </p>
      <div className="flex flex-col items-center space-y-4">
        <div className="text-lg text-gray-700 dark:text-gray-300">
          <strong>LeetCode:</strong> 150+ questions solved
        </div>
        <div className="text-lg text-gray-700 dark:text-gray-300">
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/your-profile"
            className="text-blue-500 hover:underline"
          >
            github.com/your-profile
          </a>
        </div>
        <div className="text-lg text-gray-700 dark:text-gray-300">
          <strong>HackerRank:</strong>{" "}
          <a
            href="https://www.hackerrank.com/your-profile"
            className="text-blue-500 hover:underline"
          >
            hackerrank.com/your-profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default CodingProfile;