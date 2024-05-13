export class CompanyEmail {
    email: string;
    company: number;
    area: string;
    last_email_sent: Date;

    constructor(email: string, company: number, area: string, last_email_sent: Date) {
        this.email = email;
        this.company = company;
        this.area = area;
        this.last_email_sent = last_email_sent;
    }
}