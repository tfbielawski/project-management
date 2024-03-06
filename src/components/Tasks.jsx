import React from "react";
import NewTask from "./NewTask";

function Tasks({onAdd, tasks, onDelete}) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>

            <NewTask onAdd={onAdd}/>
            {tasks.length === 0 &&(
                <p className="text-stone-800 my-4">NO TASKS TO SEE HERE</p>
            )}
            {tasks.length > 0 && 
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {tasks.map((t) => (
                    <li key={t.id} className="flex justify-between my-4">
                        <span>{t.text}</span>
                        <button 
                            className="text-stone-700 hover:text-red-500"
                            onClick={() => onDelete(t.id)}
                        >CLEAR TASK
                        </button>
                    </li>
                ))}
                </ul>}
            <ul>

            </ul>
        </section>
    )
}

export default Tasks;