export class Student {

    public userId: string;
    public password: string;
    public role: string;
    public name: string;
    public emailId: string;
    public branchName: string;
    public address: string;
    public isApproved: boolean;

    constructor(userId: string, password: string, role: string, name: string, emailId: string, branchName: string, address: string, isApproved: boolean) {
        this.userId = userId;
        this.password = password;
        this.role = role;
        this.emailId = emailId;
        this.name = name;
        this.branchName = branchName;
        this.isApproved = isApproved;
        this.address = address;
    }
}
