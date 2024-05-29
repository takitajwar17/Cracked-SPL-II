export default function TeacherDatabase() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-3xl font-bold text-gray-800">Question Database</h1>
        <a
          href="/tutor/add-question"
          className="flex items-center bg-cyan-700 text-gray-200 font-semibold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-cyan-900"
        >
          <svg
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Add New Question
        </a>
      </div>
      <hr className="my-2 h-0.5 border-t-0 bg-gray-200 opacity-100" />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {dummyDatabases.map((question, index) => (
          <a href={question.path}>
            <div
              key={index}
              className="bg-white border text-center rounded-lg shadow-md py-4 px-4 transition-all duration-300 hover:border-gray-800 md:px-12"
            >
              <p className="text-lg font-semibold text-black mb-2">
                {question.title}
              </p>
              <p className="text-gray-600 whitespace-nowrap">
                {question.questionCount} Questions
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

const dummyDatabases = [
  {
    title: "Physics",
    questionCount: 145,
    path: "/teacher/database/physics",
  },
  {
    title: "Chemistry",
    questionCount: 176,
    path: "/teacher/database/chemistry",
  },
  {
    title: "Math",
    questionCount: 105,
    path: "/teacher/database/math",
  },
  {
    title: "English",
    questionCount: 98,
    path: "/teacher/database/english",
  },
];
