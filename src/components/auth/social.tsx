"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <button>
        <FcGoogle className="h-5 w-5"/>
      </button>
      <button>
        <FaGithub className="h-5 w-5"/>
      </button>
    </div>
  );
};
