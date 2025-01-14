// import React from "react";
// import { Link } from "react-router-dom";
// import { Calendar, Star, ListChecks, User, Plus, Layout } from "lucide-react";
// import { PieChart, Pie, Cell } from "recharts";
// import photo from "../assets/photo.jpg";

// const MenuSidebar = ({ isOpen, totalTasks = 10, completedTasks = 6 }) => {
//   const completionPercentage = (completedTasks / totalTasks) * 100;

//   const data = [
//     { value: completedTasks },
//     { value: totalTasks - completedTasks },
//   ];

//   const COLORS = ["#4CAF50", "#E0E0E0"];

//   return (
//     <div
//       className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 ${
//         isOpen ? "translate-x-0" : "-translate-x-full"
//       } transform transition-transform duration-300 ease-in-out bg-white shadow-lg z-50 flex flex-col`}
//     >
//       {/* Profile Section */}
//       <div className="flex-shrink-0 flex flex-col items-center p-6 border-b">
//         <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mb-4">
//           <img
//             src={photo}
//             alt="User Profile"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <h3 className="text-lg font-semibold">John Doe</h3>
//         <p className="text-sm text-gray-500">john.doe@example.com</p>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 overflow-y-auto p-4">
//         <ul className="space-y-3">
//           <li>
//             <Link
//               to="/tasks/all"
//               className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
//             >
//               <Layout className="w-5 h-5 text-blue-500" />
//               <span>All Tasks</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/tasks/today"
//               className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
//             >
//               <Calendar className="w-5 h-5 text-green-500" />
//               <span>Today</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/tasks/important"
//               className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
//             >
//               <Star className="w-5 h-5 text-yellow-500" />
//               <span>Important</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/tasks/planned"
//               className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
//             >
//               <ListChecks className="w-5 h-5 text-purple-500" />
//               <span>Planned</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/tasks/assigned"
//               className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
//             >
//               <User className="w-5 h-5 text-red-500" />
//               <span>Assigned to me</span>
//             </Link>
//           </li>
//         </ul>

//         <button className="flex items-center space-x-2 mt-6 p-2 w-full text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
//           <Plus className="w-5 h-5" />
//           <span>Add New List</span>
//         </button>
//       </nav>

//       {/* Progress Section */}
//       <div className="flex-shrink-0 w-full p-6 border-t bg-gray-50">
//         <h4 className="text-sm font-semibold mb-4">Today's Progress</h4>
//         <div className="flex items-center justify-between mb-4">
//           <div>
//             <p className="text-2xl font-bold">
//               {completedTasks}/{totalTasks}
//             </p>
//             <p className="text-sm text-gray-500">Tasks Completed</p>
//           </div>
//           <div className="w-16 h-16 flex items-center justify-center">
//             <PieChart width={64} height={64}>
//               <Pie
//                 data={data}
//                 innerRadius={20}
//                 outerRadius={32}
//                 paddingAngle={2}
//                 dataKey="value"
//                 startAngle={90}
//                 endAngle={-270}
//               >
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index]} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </div>
//         </div>
//         <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
//           <div
//             className="bg-green-500 h-2 rounded-full transition-all duration-300"
//             style={{ width: `${completionPercentage}%` }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuSidebar;


import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Star, ListChecks, User, Plus, Layout } from "lucide-react";
import { PieChart, Pie, Cell } from "recharts";
import photo from "../assets/photo.jpg";

const MenuSidebar = ({ isOpen, totalTasks = 10, completedTasks = 6, isDarkMode }) => {
  const completionPercentage = (completedTasks / totalTasks) * 100;

  const data = [
    { value: completedTasks },
    { value: totalTasks - completedTasks },
  ];

  const COLORS = ["#4CAF50", "#E0E0E0"];

  return (
    <div
      className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 transform transition-transform duration-300 ease-in-out bg-white dark:bg-gray-800 shadow-lg z-50 flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Profile Section */}
      <div className="flex-shrink-0 flex flex-col items-center p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-600 overflow-hidden mb-4">
          <img
            src={photo}
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">John Doe</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">john.doe@example.com</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-3">
          <li>
            <Link
              to="/tasks/all"
              className="flex items-center space-x-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              <Layout className="w-5 h-5 text-blue-500 dark:text-blue-400" />
              <span className="text-gray-800 dark:text-white">All Tasks</span>
            </Link>
          </li>
          <li>
            <Link
              to="/tasks/today"
              className="flex items-center space-x-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              <Calendar className="w-5 h-5 text-green-500 dark:text-green-400" />
              <span className="text-gray-800 dark:text-white">Today</span>
            </Link>
          </li>
          <li>
            <Link
              to="/tasks/important"
              className="flex items-center space-x-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              <Star className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
              <span className="text-gray-800 dark:text-white">Important</span>
            </Link>
          </li>
          <li>
            <Link
              to="/tasks/planned"
              className="flex items-center space-x-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              <ListChecks className="w-5 h-5 text-purple-500 dark:text-purple-400" />
              <span className="text-gray-800 dark:text-white">Planned</span>
            </Link>
          </li>
          <li>
            <Link
              to="/tasks/assigned"
              className="flex items-center space-x-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              <User className="w-5 h-5 text-red-500 dark:text-red-400" />
              <span className="text-gray-800 dark:text-white">Assigned to me</span>
            </Link>
          </li>
        </ul>

        <button className="flex items-center space-x-2 mt-6 p-2 w-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
          <Plus className="w-5 h-5" />
          <span>Add New List</span>
        </button>
      </nav>

      {/* Progress Section */}
      <div className="flex-shrink-0 w-full p-6 border-t bg-gray-50 dark:bg-gray-700">
        <h4 className="text-sm font-semibold mb-4 text-gray-800 dark:text-white">Today's Progress</h4>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              {completedTasks}/{totalTasks}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Tasks Completed</p>
          </div>
          <div className="w-16 h-16 flex items-center justify-center">
            <PieChart width={64} height={64}>
              <Pie
                data={data}
                innerRadius={20}
                outerRadius={32}
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuSidebar;
