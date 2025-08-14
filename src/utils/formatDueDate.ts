import { TaskInterface } from "@/types/task";
import {
    format,
    isTomorrow,
    isToday,
    differenceInDays,
    isPast,
} from "date-fns";

export function formatDueDate(task: TaskInterface): string {
    const dueDate = task.dueDate ? new Date(task.dueDate) : undefined;

    // If completed, show completed date
    if (task.status === "Completed" && task.completedDate) {
        return `Completed on ${format(new Date(task.completedDate), "MMM d")}`;
    }

    // If not completed, check overdue / due
    if (dueDate) {
        if (isToday(dueDate)) {
            return "Due Today";
        }

        if (isTomorrow(dueDate)) {
            return "Due Tomorrow";
        }

        if (isPast(dueDate)) {
            const daysOverdue = differenceInDays(new Date(), dueDate);
            return `Overdue by ${daysOverdue} day${daysOverdue > 1 ? "s" : ""}`;
        }

        return `Due on ${format(dueDate, "MMM d")}`;
    }

    return "No due date";
}
