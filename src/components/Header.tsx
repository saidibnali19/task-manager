import { ClipboardCheck, Plus } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className="my-section flex gap-4 flex-wrap justify-between items-center">
                <Link
                    className="text-3xl font-bold flex gap-2 items-center flex-wrap hover:opacity-50 transition"
                    href={"/"}
                >
                    <ClipboardCheck className="inline-block text-blue-600" />
                    <h1 className=" my-gradient-bg bg-clip-text text-transparent">
                        Task Manager
                    </h1>
                </Link>
                <Link
                    className="my-gradient-bg my-button hover:opacity-50 transition"
                    href={"/add"}
                >
                    <Plus /> <span className="font-bold">Add Task</span>
                </Link>
            </header>
        </>
    );
}
