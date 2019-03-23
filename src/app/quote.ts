export class Quote {
    public date:Date;
    public upvote:number;
    public downvote:number;
    constructor(public quote:string,public author:string,public publisher:string){
        this.date=new Date();
        this.upvote=0;
        this.downvote=0;
    }
}
