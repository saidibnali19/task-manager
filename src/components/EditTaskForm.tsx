"use client";

import { TaskInterface } from "@/types/task";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import TaskForm from "./TaskForm";

export default function EditTaskForm() {
    const router = useRouter();
    const { id } = useParams() as { id: string };

    const [task, setTask] = useState<TaskInterface | null>(null);

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (!storedTasks) return;

        const tasks: TaskInterface[] = JSON.parse(storedTasks);
        const found = tasks.find((t) => t.id === id);
        if (found) setTask(found);
    }, [id]);

    // Note: updated is Omit<TaskInterface, "id">
    const handleUpdate = (updated: Omit<TaskInterface, "id">) => {
        const storedTasks = localStorage.getItem("tasks");
        if (!storedTasks) return;

        const tasks: TaskInterface[] = JSON.parse(storedTasks);

        const newTasks = tasks.map((t) =>
            t.id === id ? { ...updated, id } : t,
        );

        localStorage.setItem("tasks", JSON.stringify(newTasks));
        router.push("/");
    };

    if (!task) return <p className="p-4">Task not found.</p>;

    return (
        <TaskForm
            initialTask={task}
            onSubmit={handleUpdate}
            onCancel={() => router.push("/")}
        />
    );
}
