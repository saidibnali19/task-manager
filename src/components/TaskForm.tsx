"use client";

import { useState } from "react";
import { TaskInterface } from "@/types/task";
import { v4 as uuidv4 } from "uuid";

interface TaskFormProps {
    initialTask?: TaskInterface;
    onSubmit: (task: Omit<TaskInterface, "id">) => void;
    onCancel: () => void;
}

export default function TaskForm({
    initialTask,
    onSubmit,
    onCancel,
}: TaskFormProps) {
    const [title, setTitle] = useState(initialTask?.title || "");
    const [description, setDescription] = useState(
        initialTask?.description || "",
    );
    const [dueDate, setDueDate] = useState(initialTask?.dueDate || "");
    const [priority, setPriority] = useState<"Low" | "Medium" | "High">(
        initialTask?.priority || "Medium",
    );
    const [status, setStatus] = useState<
        "Pending" | "In Progress" | "Completed"
    >(initialTask?.status || "Pending");

    const today = new Date().toISOString().split("T")[0];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedTask: TaskInterface = {
            ...initialTask,
            id: initialTask?.id ?? uuidv4(), // use existing id or generate new
            title,
            description,
            dueDate,
            priority,
            status,
        };
        onSubmit(updatedTask);
    };

    return (
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
                        setPriority(e.target.value as "Low" | "Medium" | "High")
                    }
                >
                    <option value={"Low"}>Low</option>
                    <option value={"Medium"}>Medium</option>
                    <option value={"High"}>High</option>
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
                                | "Pending"
                                | "In Progress"
                                | "Completed",
                        )
                    }
                >
                    <option value={"Pending"}>Pending</option>
                    <option value={"In Progress"}>In Progress</option>
                    <option value={"Completed"}>Completed</option>
                </select>
            </label>
            <div className="flex flex-wrap justify-end gap-2">
                {onCancel && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="my-button cursor-pointer border-2 border-gray-300 bg-white font-bold !text-gray-500 transition hover:opacity-50"
                    >
                        Cancel
                    </button>
                )}
                <button
                    className="my-button my-gradient-bg cursor-pointer font-bold hover:opacity-50"
                    type="submit"
                >
                    Save Task
                </button>
            </div>
        </form>
    );
}
