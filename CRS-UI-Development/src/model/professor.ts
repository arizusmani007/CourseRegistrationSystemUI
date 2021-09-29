export class Professor {

    public userId: string;
    public password: string;
    public role: string;
    public name: string;
    public department: string;
    public subject: string;

    constructor(userId: string, password: string, role: string, name: string, department: string, subject: string) {
        this.userId = userId;
        this.password = password;
        this.role = role;
        this.department = department;
        this.name = name;
        this.subject = subject;
    }
}
