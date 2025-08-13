import AddTaskForm from "@/components/AddTaskForm";

export default function page() {
    return (
        <>
            <article className="my-section space-y-4">
                <h2 className="font-bold text-2xl">Add a New Task</h2>
                <AddTaskForm />
            </article>
        </>
    );
}
