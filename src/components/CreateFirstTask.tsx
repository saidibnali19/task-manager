import { ClipboardList } from "lucide-react";
import Link from "next/link";

export default function CreateFirstTask() {
    return (
        <>
            <article className="place-items-center grid">
                <div className="grid gap-4 place-items-center">
                    <ClipboardList className="w-3xs h-48" />
                    <h3 className="text-xl font-bold">No tasks yet</h3>
                    <p>
                        Create your first task to get started on your
                        productivity journey!
                    </p>
                    <Link className="my-gradient-bg my-button" href={"/add"}>
                        Create First Task
                    </Link>
                </div>
            </article>
        </>
    );
}
