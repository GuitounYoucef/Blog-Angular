export class UrlImage 
{ 
    resourceType?:string;
    currentFolder?:CurrentFolder;
    fileName?:string;
    uploaded?:number;
}
 class CurrentFolder {
    path?:string;
    url?:string;
    acl?:number;
}