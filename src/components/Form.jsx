import { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center ">
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className=" m-2 p-4 w-full border border-gray-300 rounded-md "
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="w-full m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add
      </button>
    </form>
  );
}

export default Form;
