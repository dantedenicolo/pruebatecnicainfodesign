import React from "react";
import { Link } from "react-router-dom";



const ButtonLanding = () => {

  return (
    <div>
      <Link to="/home">
        <div className="text-grey-900 font-bold bg-yellow-500 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-yellow-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Get Started
        </div>
      </Link>
    </div>
  );
}

export default ButtonLanding