import { ClipboardCheck, Plus } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className="my-section flex flex-wrap items-center justify-between gap-4">
                <Link
                    className="flex flex-wrap items-center gap-2 text-3xl font-bold transition hover:opacity-50"
                    href={"/"}
                >
                    <ClipboardCheck className="inline-block text-blue-600" />
                    <h1 className="my-gradient-bg bg-clip-text text-transparent">
                        Task Manager
                    </h1>
                </Link>
                <Link
                    className="my-gradient-bg my-button transition hover:opacity-50"
                    href={"/add"}
                >
                    <Plus /> <span className="font-bold">Add Task</span>
                </Link>
            </header>
        </>
    );
}
