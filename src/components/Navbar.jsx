// import React, { useState } from "react";
// import MenuSidebar from "./MenuSidebar";
// import { Search, Menu, Sun, Moon } from "lucide-react";


// const Navbar = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log("Searching for:", searchQuery);
//   };

//   return (
//     <>
//       <div
//         className={`w-full ${
//           isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
//         } relative z-50`}
//       >
//         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
          

//             <div className="flex-1 max-w-xl mx-4">
//               <form onSubmit={handleSearch} className="relative">
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className={`w-full p-2 pl-10 pr-4 rounded-lg border ${
//                     isDarkMode
//                       ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
//                       : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
//                   }`}
//                   placeholder="Search..."
//                 />
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Search className="h-5 w-5 text-gray-400" />
//                 </div>
//               </form>
//             </div>

//             <div className="flex items-center space-x-4">
//               <button
//                 onClick={toggleTheme}
//                 className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
//               >
//                 {isDarkMode ? (
//                   <Sun className="h-5 w-5" />
//                 ) : (
//                   <Moon className="h-5 w-5" />
//                 )}
//               </button>

//               <button
//                 onClick={toggleMenu}
//                 className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
//               >
//                 <Menu className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </nav>
//       </div>

//       <MenuSidebar isOpen={isMenuOpen} totalTasks={10} completedTasks={6} />
//     </>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import MenuSidebar from "./MenuSidebar";
import { Search, Menu, Sun, Moon } from "lucide-react";

const Navbar = ({ toggleTheme, toggleMenu,isMenuOpen, isDarkMode, searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <>
      <div
        className={`w-full ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        } relative z-50`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1 max-w-xl mx-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full p-2 pl-10 pr-4 rounded-lg border ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </form>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>

              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      <MenuSidebar isOpen={isMenuOpen} totalTasks={10} completedTasks={6} />
    </>
  );
};

export default Navbar;
