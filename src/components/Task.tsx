"use client";

import { TaskInterface } from "@/types/task";
import { formatDueDate } from "@/utils/formatDueDate";
import {
    CalendarRange,
    Check,
    PencilLine,
    Trash2,
    TriangleAlert,
} from "lucide-react";
import Link from "next/link";
import { ReactNode, useRef } from "react";

interface TaskProps {
    task: TaskInterface;
    onStatusChange: (updatedTask: TaskInterface) => void;
}

export default function Task({ task, onStatusChange }: TaskProps) {
    const checkboxRef = useRef<HTMLInputElement>(null);

    const handleCheckboxChange = () => {
        if (checkboxRef.current) {
            const updatedStatus = checkboxRef.current.checked
                ? "Completed"
                : "Pending";

            onStatusChange({
                ...task,
                status: updatedStatus,
            });
        }
    };

    let statusClasses: string | undefined = "",
        priorityClasses: string | undefined = "",
        priorityBannerClasses: string | undefined = "",
        dueDateClasses: string | undefined = "",
        dueDateIcon: ReactNode,
        completedClasses: string | undefined = "";

    switch (task.status) {
        case "Pending":
            statusClasses = "from-yellow-100 to-yellow-300 !text-amber-900";
            break;
        case "In Progress":
            statusClasses = "from-blue-100 to-blue-300 !text-blue-900";
            break;
        case "Completed":
            statusClasses = "from-green-100 to-green-300 !text-green-900";
            completedClasses = "!bg-gray-300 [&>h3]:line-through";
            break;
        default:
            statusClasses = "from-yellow-100 to-yellow-300 !text-amber-900";
            break;
    }

    switch (task.priority) {
        case "Low":
            priorityClasses = "from-blue-100 to-blue-300 !text-blue-900";
            priorityBannerClasses = "before:bg-blue-500";

            break;
        case "Medium":
            priorityClasses = "from-peach-200 to-amber-400 !text-amber-900";
            priorityBannerClasses = "before:bg-amber-500";
            break;
        case "High":
            priorityClasses = "from-pink-200 to-pink-400 !text-red-800";
            priorityBannerClasses = "before:bg-red-500";
            break;
        default:
            priorityClasses = "from-peach-200 to-amber-400 !text-amber-900";
            break;
    }

    const formatted = formatDueDate(task);

    switch (true) {
        case task.status === "Completed":
            dueDateClasses = "text-green-400";
            dueDateIcon = (
                <Check className="rounded-sm border-2 border-black bg-green-400 text-white" />
            );
            break;

        case formatted === "Due Today":
            dueDateClasses = "font-bold";
            dueDateIcon = <CalendarRange />;
            break;

        case formatted === "Due Tomorrow":
            dueDateClasses = "text-yellow-400";
            dueDateIcon = <CalendarRange />;
            break;

        case formatted.startsWith("Overdue by"):
            dueDateClasses = "text-red-400";
            dueDateIcon = <TriangleAlert className="fill-yellow-400" />;
            break;

        default:
            dueDateClasses = "";
            dueDateIcon = <CalendarRange />;
            break;
    }

    return (
        <>
            <article
                className={`my-section relative space-y-4 overflow-clip before:absolute before:inset-[0_0_auto_0] before:h-1 before:transition-[height] before:content-[''] hover:before:h-2 ${priorityBannerClasses} ${completedClasses}`}
            >
                <input
                    name="check"
                    className="h-6 w-6 cursor-pointer"
                    type="checkbox"
                    checked={task.status === "Completed"}
                    ref={checkboxRef}
                    onChange={handleCheckboxChange}
                />
                <h3 className="text-xl font-bold">{task.title}</h3>
                {task.description && (
                    <p className="line-clamp-2">{task.description}</p>
                )}
                <div className="flex flex-wrap items-center gap-4">
                    <span className={`my-button my-tag ${statusClasses} `}>
                        {checkboxRef.current?.checked
                            ? "Completed"
                            : task.status}
                    </span>
                    <span className={`my-button my-tag ${priorityClasses}`}>
                        {task.priority}
                    </span>
                    {task.dueDate && (
                        <span className="flex flex-wrap gap-2">
                            {dueDateIcon}
                            <span className={`${dueDateClasses}`}>
                                {formatDueDate(task)}
                            </span>
                        </span>
                    )}
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <Link href={`/edit/${task.title}`}>
                        <PencilLine className="my-secondary-button" />
                    </Link>
                    <button>
                        <Trash2 className="my-secondary-button" />
                    </button>
                </div>
            </article>
        </>
    );
}
