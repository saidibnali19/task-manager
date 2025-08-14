"use client";

import { TaskInterface } from "@/types/task";
import { useRouter } from "next/navigation";

import TaskForm from "./TaskForm";
import { createTask } from "@/utils/taskFactory";

export default function AddTaskForm() {
    const router = useRouter();

    const handleAdd = (task: Omit<TaskInterface, "id">) => {
        const storedTasks: TaskInterface[] = JSON.parse(
            localStorage.getItem("tasks") || "[]",
        );

        const newTask = createTask(task); // ✅ id auto-generated here
        storedTasks.push(newTask);

        localStorage.setItem("tasks", JSON.stringify(storedTasks));
        router.push("/");
    };
    return (
        <>
            <TaskForm onSubmit={handleAdd} onCancel={() => router.push("/")} />
        </>
    );
}
