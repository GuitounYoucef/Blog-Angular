export class Post {
    id?: number;
    statement?:string;
    title?:string;
    imageLink!:string;
    user_id?:number;
    cardContent!:string;
    ceationDate!:Date;
    Post(){
        this.imageLink=""; 
    }
}