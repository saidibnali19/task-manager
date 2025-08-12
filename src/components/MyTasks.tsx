import Link from "next/link";
import CreateFirstTask from "./CreateFirstTask";
import { CalendarRange, PencilLine, Trash2 } from "lucide-react";

const TaskList = [
    {
        title: "Complete Project Proposal",
        description:
            "Finalize the Q4 marketing campaign proposal including budget breakdown, timeline, and resource allocation for the upcoming product launch.",
        status: "Pending",
        priority: "High Priority",
        dueDate: "Due Tommorrow",
    },
];

export default function MyTasks() {
    return (
        <>
            {TaskList.length > 0 ? (
                <ul role="list">
                    {TaskList.map((task) => (
                        <li key={task.title}>
                            <article className="my-section space-y-4">
                                <input
                                    className="w-6 h-6 cursor-pointer"
                                    type="checkbox"
                                ></input>
                                <h3 className="text-xl font-bold">
                                    {task.title}
                                </h3>
                                <p className="line-clamp-2">
                                    {task.description}
                                </p>
                                <div className="flex gap-4 flex-wrap items-center">
                                    <span className="my-button my-tag !text-amber-900  from-yellow-100 to-yellow-300">
                                        {task.status}
                                    </span>
                                    <span className="my-button my-tag !text-amber-900 from-pink-100 to-pink-300">
                                        {task.priority}
                                    </span>
                                    <span className="flex gap-2 flex-wrap">
                                        <CalendarRange />
                                        <span className="text-yellow-400">
                                            {task.dueDate}
                                        </span>
                                    </span>
                                </div>
                                <div className="flex gap-4 flex-wrap items-center">
                                    <Link href={`/edit/${task.title}`}>
                                        <PencilLine className="my-secondary-button" />
                                    </Link>
                                    <button>
                                        <Trash2 className="my-secondary-button" />
                                    </button>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            ) : (
                <article className="my-section space-y-4 min-h-[calc(100vh-9.3125rem)] grid grid-rows-[auto_1fr] gap-4">
                    <h2 className="font-bold text-2xl">My Tasks</h2>
                    <CreateFirstTask />
                </article>
            )}
        </>
    );
}
