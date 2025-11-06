import { useState } from "react";

const Add = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(task);
    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-full sm:max-w-sm mx-auto mt-5"
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Add task
      </label>
      <div className="relative">
        <input
          type="text"
          id="default-search"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Add task"
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default Add;
