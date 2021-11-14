type Data = {
    events: {name:string,date:string,url?:string,status?:string,id?:string,img:any}[];
    url: string;
}

export function getEventData(data: Data) {
    const paths = data.url.split("/");
    if (paths[1] !== "navostoke" || paths[2] !== "events") {
        throw new Error("invalid event page url");
    }
    return data.events.find(e => e.id === paths[3]);
}
