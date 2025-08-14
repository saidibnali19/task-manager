// utils/taskFactory.ts
import { TaskInterface } from "@/types/task";
import { v4 as uuidv4 } from "uuid";

export function createTask(data: Omit<TaskInterface, "id">): TaskInterface {
    return {
        id: uuidv4(),
        ...data,
    };
}
