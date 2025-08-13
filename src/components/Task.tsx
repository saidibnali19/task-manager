import { TaskInterface } from "@/types/task";
import { CalendarRange, Eye, Trash2 } from "lucide-react";
import Link from "next/link";

interface TaskProps {
    task: TaskInterface;
}

export default function Task({ task }: TaskProps) {
    return (
        <>
            <article className="my-section relative space-y-4 overflow-clip before:absolute before:inset-[0_0_auto_0] before:h-1 before:bg-yellow-400 before:transition-[height] before:content-[''] hover:before:h-2">
                <input
                    name="check"
                    className="h-6 w-6 cursor-pointer"
                    type="checkbox"
                ></input>
                <h3 className="text-xl font-bold">{task.title}</h3>
                {task.description && (
                    <p className="line-clamp-2">{task.description}</p>
                )}
                <div className="flex flex-wrap items-center gap-4">
                    <span className="my-button my-tag from-yellow-100 to-yellow-300 !text-amber-900">
                        {task.status}
                    </span>
                    <span className="my-button my-tag from-pink-100 to-pink-300 !text-amber-900">
                        {task.priority}
                    </span>
                    {task.dueDate && (
                        <span className="flex flex-wrap gap-2">
                            <CalendarRange />
                            <span className="text-yellow-400">
                                {task.dueDate}
                            </span>
                        </span>
                    )}
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <Link href={`/edit/${task.title}`}>
                        <Eye className="my-secondary-button" />
                    </Link>
                    <button>
                        <Trash2 className="my-secondary-button" />
                    </button>
                </div>
            </article>
        </>
    );
}
