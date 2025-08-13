"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState<"low" | "medium" | "high">(
        "medium",
    );
    const [status, setStatus] = useState<
        "pending" | "inProgress" | "completed"
    >("pending");

    const router = useRouter();

    const today = new Date().toISOString().split("T")[0];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newTask = { title, description, dueDate, priority, status };

        // Get existing tasks from localStorage
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

        // Add the new task
        storedTasks.push(newTask);

        // Save back to localStorage
        localStorage.setItem("tasks", JSON.stringify(storedTasks));

        router.push("/");
    };

    return (
        <>
            <form className="grid gap-4" onSubmit={handleSubmit}>
                <label className="space-y-2">
                    <span className="inline-block font-bold">Task Title *</span>
                    <input
                        className="my-form-input"
                        autoFocus
                        name="title"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label className="space-y-2">
                    <span className="inline-block font-bold">Description</span>
                    <textarea
                        className="my-form-input"
                        placeholder="Optional task description..."
                        rows={4}
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <label className="space-y-2">
                    <span className="inline-block font-bold">Due Date</span>
                    <input
                        className="my-form-input"
                        type="date"
                        min={today}
                        name="dueDate"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </label>
                <label className="space-y-2">
                    <span className="inline-block font-bold">Priority</span>
                    <select
                        className="my-form-input"
                        name="priority"
                        value={priority}
                        onChange={(e) =>
                            setPriority(
                                e.target.value as "low" | "medium" | "high",
                            )
                        }
                    >
                        <option value={"low"}>Low</option>
                        <option value={"medium"}>Medium</option>
                        <option value={"high"}>High</option>
                    </select>
                </label>
                <label className="space-y-2">
                    <span className="inline-block font-bold">Status</span>
                    <select
                        className="my-form-input"
                        name="status"
                        value={status}
                        onChange={(e) =>
                            setStatus(
                                e.target.value as
                                    | "pending"
                                    | "inProgress"
                                    | "completed",
                            )
                        }
                    >
                        <option value={"pending"}>Pending</option>
                        <option value={"inProgress"}>In Progress</option>
                        <option value={"completed"}>Completed</option>
                    </select>
                </label>
                <div className="flex flex-wrap justify-end gap-2">
                    <button
                        className="my-button cursor-pointer border-2 border-gray-300 bg-white font-bold !text-gray-500 transition hover:opacity-50"
                        type="button"
                        onClick={() => router.push("/")}
                    >
                        Cancel
                    </button>
                    <button
                        className="my-button my-gradient-bg cursor-pointer font-bold hover:opacity-50"
                        type="submit"
                    >
                        Save Task
                    </button>
                </div>
            </form>
        </>
    );
}
