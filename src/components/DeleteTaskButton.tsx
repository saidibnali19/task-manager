"use client";

import { Trash2 } from "lucide-react";

interface DeleteTaskButtonProps {
    id: string;
    onDelete: (id: string) => void;
}

export default function DeleteTaskButton({
    id,
    onDelete,
}: DeleteTaskButtonProps) {
    return (
        <button onClick={() => onDelete(id)}>
            <Trash2 className="my-secondary-button" />
        </button>
    );
}
