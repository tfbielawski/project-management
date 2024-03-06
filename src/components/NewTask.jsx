import React, { useRef, useState } from "react";
import Modal from "./Modal";

function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  const modal = useRef();
  const input =  useRef();

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
        modal.current.open();
        return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
        <Modal ref={modal} buttonCaption="OK">
            <h2 className="text-xl font-bold text-stone-700 mt-4 my-4">You entered an empty task.</h2>
            <p className="text-stone-700 mb-4">Please provide task information.</p>
        </Modal>
        <div className="flex items-center gap-4">
        <input
            ref={input}
            type="text"
            label="input"
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            onChange={handleChange}
            value={enteredTask}
        />
        <button
            className="text-stone-700 hover:text-stone-950"
            onClick={handleClick}
        >
            Add Task
        </button>
        </div>
    </>
  );
}
export default NewTask;