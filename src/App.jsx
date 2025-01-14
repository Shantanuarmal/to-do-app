// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import AllTasks from './Pages/tasks/AllTasks';
// import TodayTasks from './Pages/tasks/TodayTasks';
// import ImportantTasks from './Pages/tasks/ImportantTasks';
// import PlannedTasks from './Pages/tasks/PlannedTasks';
// import AssignedTasks from './Pages/tasks/AssignedTasks';

// const App = () => (
//   <BrowserRouter>
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/tasks/all" element={<AllTasks />} />
//         <Route path="/tasks/today" element={<TodayTasks />} />
//         <Route path="/tasks/important" element={<ImportantTasks />} />
//         <Route path="/tasks/planned" element={<PlannedTasks />} />
//         <Route path="/tasks/assigned" element={<AssignedTasks />} />
//       </Routes>
//     </div>
//   </BrowserRouter>
// );

// export default App;



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllTasks from './Pages/tasks/AllTasks';
import TodayTasks from './Pages/tasks/TodayTasks';
import ImportantTasks from './Pages/tasks/ImportantTasks';
import PlannedTasks from './Pages/tasks/PlannedTasks';
import AssignedTasks from './Pages/tasks/AssignedTasks';
import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle dark mode on the entire document (not just navbar)
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <BrowserRouter>
    <div>
      
      <Navbar
        toggleTheme={toggleTheme}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        isDarkMode={isDarkMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
       <Routes>
         <Route path="/tasks/all" element={<AllTasks />} />
        <Route path="/tasks/today" element={<TodayTasks />} />
         <Route path="/tasks/important" element={<ImportantTasks />} />
        <Route path="/tasks/planned" element={<PlannedTasks />} />
         <Route path="/tasks/assigned" element={<AssignedTasks />} />
       </Routes>
      {/* Your main content goes here */}
    </div>
    </BrowserRouter>
  );
};

export default App;
