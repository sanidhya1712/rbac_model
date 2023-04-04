export class roles {
    role : string
    constructor(role: string) {
        this.role = role
    }
    printRole=()=> {
        console.log("role--", this.role)
        return this.role
    }
}
