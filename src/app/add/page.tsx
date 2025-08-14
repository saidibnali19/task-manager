import AddTaskForm from "@/components/AddTaskForm";

export default function AddTaskPage() {
    return (
        <article className="my-section space-y-4">
            <h2 className="text-2xl font-bold">Add a New Task</h2>
            <AddTaskForm />
        </article>
    );
}
