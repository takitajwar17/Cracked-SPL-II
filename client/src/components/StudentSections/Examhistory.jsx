import React, { useState, useEffect } from "react";
import axios from "axios";
import ExamHistoryTable from "./StudentComponents/ExamHistoryTable"; // Assuming you create a new component

export default function ExamHistory() {
  const [examHistory, setExamHistory] = useState([]);

  useEffect(() => {
    const fetchExamHistory = async () => {
      try {
        const response = await axios.get("http://localhost:5050/score/user-history"); // Adjust the endpoint as needed
        setExamHistory(response.data);
      } catch (error) {
        console.error("Error fetching exam history: ", error);
      }
    };

    fetchExamHistory();
  }, []);

  return (
    <div className="container max-w-full p-4 ml-16">
      <h1 className="text-3xl font-bold mb-4 flex flex-col justify-center items-center">
        Exam History
      </h1>
      
      <div className="w-[60rem]">
        <ExamHistoryTable data={examHistory} />
      </div>
    </div>
  );
}