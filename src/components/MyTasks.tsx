"use client";

import { TaskInterface } from "@/types/task";
import CreateFirstTask from "./CreateFirstTask";

import Task from "./Task";
import { useEffect, useState } from "react";

export default function MyTasks() {
    const [tasks, setTasks] = useState<TaskInterface[]>([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        setTasks(storedTasks);
    }, []);

    // Handle status change from child
    const handleStatusChange = (updatedTask: TaskInterface) => {
        const updatedTasks = tasks.map((t) => {
            if (t.id === updatedTask.id) {
                return {
                    ...t,
                    status: updatedTask.status,
                    completedDate:
                        updatedTask.status === "Completed"
                            ? new Date().toISOString()
                            : null,
                };
            }
            return t;
        });

        setTasks(updatedTasks); // update state so UI reacts
        localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // persist in storage
    };

    const handleDelete = (id: string) => {
        const updated = tasks.filter((t) => t.id !== id);
        setTasks(updated); // update state immediately
        localStorage.setItem("tasks", JSON.stringify(updated)); // persist change
    };

    return (
        <>
            {tasks.length > 0 ? (
                <ul role="list">
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <Task
                                task={task}
                                onStatusChange={handleStatusChange}
                                onDelete={handleDelete}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <article className="my-section grid min-h-[calc(100vh-9.3125rem)] grid-rows-[auto_1fr] gap-4 space-y-4">
                    <h2 className="text-2xl font-bold">My Tasks</h2>
                    <CreateFirstTask />
                </article>
            )}
        </>
    );
}
