import { useEffect, useState } from "react";
import Add from "./components/add";
import Card from "./components/card";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const addTask = (newTask) => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;

    // Sort tasks to move completed ones to bottom
    const sortedTasks = updatedTasks.sort((a, b) => {
      if (a.completed === b.completed) return 0;
      return a.completed ? 1 : -1;
    });

    setTasks(sortedTasks);
  };

  return (
    <div className="bg-[#3F72AF] min-h-screen flex justify-center items-start py-10 px-4">
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-white rounded-md shadow-md p-5">
        <h1 className="text-center text-2xl sm:text-3xl font-sans mb-5">
          To-Do List
        </h1>
        <Add onAdd={addTask} />
        <hr className="border-gray-300 my-5" />
        <div className="space-y-3">
          {tasks.map((task, index) => (
            <Card
              key={index}
              task={task.text}
              completed={task.completed}
              onToggle={() => toggleTask(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
