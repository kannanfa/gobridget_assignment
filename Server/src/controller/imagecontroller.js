import fetch from "corelib/fetch";
import logger from "corelib/logger";
import url from 'url';


class ImageController{
    media_type = 'image'
    searchText = null
    page = null
    constructor(searchText, page=1){
        this.searchText = searchText;
        this.page = page;
    }
    
    execute = async () =>{
       try{
           const data = await this.fetchData();
           const {collection={items:[], metadata:{ "total_hits": 0}, links:[]} } = data;
           const {items, metadata, links} = collection;
           const {total_hits} = metadata;
           const result = this.getImageinfo(items);
           const buttons = this.getButtonInfo(links);
        
           return {count:total_hits, images: result, buttons}

       }catch(ex){
            throw ex;
       }
        
    }

    fetchData = () =>{
        const  {searchText, page} = this
        const endPoint = `/search?media_type=image&q=${encodeURIComponent(searchText)}&page=${page}`
        console.log(searchText, page,endPoint, ":URL")
        return fetch.get(endPoint).then((data)=>{
            return data
        }).catch((ex)=>{
            throw ex;
        })
    }

    getImageinfo = (items=[]) =>{
        let result =[]
        for (let i = 0; i < items.length; i++) {
            const itm = {
                ...items[i],
                ...items[i]?.data?.[0],
                ...items[i]?.links?.[0]
            }
            const {description, title, href} = itm
            result.push({ description, title, href})
        }

        return result;
    }

    getButtonInfo = (links=[]) =>{
        const buttons = {};
        for (let itm = 0; itm < links.length; itm++) {
            const {rel, href} = links[itm];
            const queryObject = url.parse(href, true).query;
            buttons[rel] = {
                ...queryObject
            }
        }
        return buttons;
    }

}

export default ImageController;


// await new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         resolve(true)
    //     }, 20000)
    //    })