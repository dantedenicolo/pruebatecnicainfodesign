import React, { useState } from 'react';
import { Dashboard, Inbox, Kanban, OpenSidebar, Previous, SingIn, SingUp, User } from '../../Icons';
import Datepicker from '../DatePicker/Datepicker';


const SideBar = () => {  
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <div>
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-48'
        }  max-md:w-16`}
        aria-label="Sidebar"
      >
        <div className="h-full px-0 py-4 overflow-y-auto bg-gray-50 dark:bg-indigo-600 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-500 dark:hover:bg-yellow-500 group"
            onClick={handleOpen}
          >
            {isOpen === false ? (
              <>
                <span className="flex-1 ml-3 max-md:hidden"></span>
                <Previous className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              </>
            ) : (
              <>
                <OpenSidebar className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 max-md:hidden"></span>
              </>
            )}
          </a>

          <Datepicker />
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-500 dark:hover:bg-yellow-500 group"
              >
                <Dashboard className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 max-md:hidden">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-500 dark:hover:bg-yellow-500 group"
              >
                <Kanban className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 max-md:hidden">Kanban</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-500 dark:hover:bg-yellow-500 group"
              >
                <Inbox className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 max-md:hidden">Inbox</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-500 dark:hover:bg-yellow-500 group"
              >
                <User className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 max-md:hidden">Users</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-500 dark:hover:bg-yellow-500 group"
              >
                <SingIn className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 max-md:hidden">Sign In</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-yellow-500 dark:hover:bg-yellow-500 group"
              >
                <SingUp className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 max-md:hidden">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;