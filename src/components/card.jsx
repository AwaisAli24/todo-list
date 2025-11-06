const Card = ({ task, completed, onToggle }) => {
  return (
    <div>
      <div className="border border-gray-300 p-3 rounded-2xl flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={completed}
            onChange={onToggle}
            className="w-4 h-4 cursor-pointer"
          />
          <p
            className={`ml-4 text-neutral-900 text-sm sm:text-base ${
              completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task}
          </p>
        </div>
        {completed && (
          <span className="text-sm text-gray-500 ml-2">completed</span>
        )}
      </div>
    </div>
  );
};

export default Card;
