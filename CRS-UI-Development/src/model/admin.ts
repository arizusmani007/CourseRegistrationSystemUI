export class Admin {
    
    public userId: string;
    public password: string;
    public role: string;
    public name: string;
    public doj: Date;

    constructor(userId: string, password: string, role: string, name: string, doj: Date) {
        this.userId = userId;
        this.password = password;
        this.role = role;
        this.doj = doj;
        this.name = name;
    }
}
