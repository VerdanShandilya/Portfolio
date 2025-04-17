import React from "react";
import { FaCircle } from "react-icons/fa"; // Import icons for colorful indicators

type Props = {};

const CodingProfile: React.FC<Props> = () => {
  return (
    <div className="pt-16 md:pt-28 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-black dark:text-gray-200">
        Coding Profile
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-400">
        Here is my coding profile:
      </p>
      <div className="flex flex-col items-center space-y-4">
        <div className="text-lg text-gray-700 dark:text-gray-300">
          <strong>LeetCode:</strong> 500+ Questions Solved
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-2">
            <FaCircle className="text-green-500" />
            <span className="text-gray-700 dark:text-gray-300">
              Easy: <strong>200</strong>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCircle className="text-yellow-500" />
            <span className="text-gray-700 dark:text-gray-300">
              Medium: <strong>250</strong>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCircle className="text-red-500" />
            <span className="text-gray-700 dark:text-gray-300">
              Hard: <strong>50</strong>
            </span>
          </div>
        </div>
      </div>
      <div className="pt-1"> {/* Reduced padding */}
        <a
          href="https://leetcode.com/u/Verdan_Shandilya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="heroButton">Visit LeetCode</button>
        </a>
      </div>
      <div className="pt-1"> {/* Reduced padding */}
        <a
          href="https://codeforces.com/profile/Verdan_101"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="heroButton">Visit Codeforces</button>
        </a>
      </div>
    </div>
  );
};

export default CodingProfile;