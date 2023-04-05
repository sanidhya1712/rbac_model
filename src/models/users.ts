export class users {
    id : number
    constructor(id: number) {
        this.id = id
    }
    getUserData=()=> {
        console.log("role--", this.id)
        return this.id
    }
}
