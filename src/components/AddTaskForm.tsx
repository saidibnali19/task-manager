"use client";

import { useRouter } from "next/navigation";

export default function AddTaskForm() {
    const today = new Date().toISOString().split("T")[0];

    const router = useRouter();

    return (
        <>
            <form className="grid gap-4">
                <label className="space-y-2">
                    <span className="font-bold inline-block">Task Title *</span>
                    <input
                        className="block w-full border-2 border-gray-300 rounded-sm bg-white text-gray-600 p-2 focus-visible:outline-2 focus-visible:outline-blue-400"
                        autoFocus
                        name="title"
                        required
                    />
                </label>
                <label className="space-y-2">
                    <span className="font-bold inline-block">Description</span>
                    <textarea
                        className="block w-full border-2 border-gray-300 rounded-sm bg-white text-gray-600 p-2 focus-visible:outline-2 focus-visible:outline-blue-400"
                        placeholder="Optional task description..."
                        rows={4}
                        name="description"
                    />
                </label>
                <label className="space-y-2">
                    <span className="font-bold inline-block">Due Date</span>
                    <input
                        className="block w-full border-2 border-gray-300 rounded-sm bg-white text-gray-600 p-2 focus-visible:outline-2 focus-visible:outline-blue-400"
                        type="date"
                        min={today}
                        name="dueDate"
                    />
                </label>
                <label className="space-y-2">
                    <span className="font-bold inline-block">Priority</span>
                    <select
                        className="block w-full border-2 border-gray-300 rounded-sm bg-white text-gray-600 p-2 focus-visible:outline-2 focus-visible:outline-blue-400 *:w-[4rem]"
                        name="priority"
                        defaultValue={"medium"}
                    >
                        <option value={"low"}>Low</option>
                        <option value={"medium"}>Medium</option>
                        <option value={"high"}>High</option>
                    </select>
                </label>
                <label className="space-y-2">
                    <span className="font-bold inline-block">Status</span>
                    <select
                        className="block w-full border-2 border-gray-300 rounded-sm bg-white text-gray-600 p-2 focus-visible:outline-2 focus-visible:outline-blue-400"
                        name="status"
                        defaultValue={"pending"}
                    >
                        <option value={"pending"}>Pending</option>
                        <option value={"inProgress"}>In Progress</option>
                        <option value={"completed"}>Completed</option>
                    </select>
                </label>
                <div className="flex gap-2 flex-wrap justify-end">
                    <button
                        className="my-button !text-gray-500 bg-white font-bold cursor-pointer hover:opacity-50 transition border-2 border-gray-300"
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
