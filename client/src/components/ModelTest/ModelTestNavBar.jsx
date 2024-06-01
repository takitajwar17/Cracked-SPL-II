import React from "react";
import Logo from "../../Assets/CrackEd-white-logo.png";

export default function ExamNavBar({ modelTestId }) {
  console.log(modelTestId);
  return (
    <nav className="bg-gray-800 p-4 px-8 text-white flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <h1 className="text-xl font-bold flex-1">Model Test</h1>
      <div className="flex-1 flex justify-center">
        <a href="/">
          <img src={Logo} alt="Logo" className="h-10" />
        </a>
      </div>
      <span className="flex-1 text-right">Exam Id: {modelTestId}</span>
    </nav>
  );
}
