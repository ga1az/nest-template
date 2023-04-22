export class TaskDAL {
    id: number;
    name: string;
    description: string;
    status: string;

    constructor(id: number, name: string, description: string, status: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
    }

    static getTask(): TaskDAL {
        return new TaskDAL(1, "Task 1", "Task 1 description", "Task 1 status");
    }
}
