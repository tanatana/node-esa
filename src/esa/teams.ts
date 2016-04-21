import Client from './client'
export default class Teams {
    constructor(private client: Client){
    }

    teams() : void {
        this.client.get("");
    }
    stats() : void {
        this.client.get("/stats");
    }
    members() : void {
        this.client.get("/members");
    }
}
