import fetch from "corelib/fetch";
import logger from "corelib/logger";
import url from 'url';


/** ImageController - Used for fetch images from NASA image API */
class ImageController{
    media_type = 'image'
    searchText = null
    page = null
    
    constructor(searchText, page=1){
        this.searchText = searchText;
        this.page = page;
    }
    
    /**
     * execute - will execute the function one by one 
     * @returns {count:number, images: Array<Image>, buttons:Object}
     */
    execute = async () =>{
       try{
           logger.info({message:"Execution started sucessfully."})
        // Fetching Data from API   
           const data = await this.fetchData();

           logger.info({message:"data has been fetched successfully."})
        

        // destructring the data 
           const {collection={items:[], metadata:{ "total_hits": 0}, links:[]} } = data;
        // destructring collection
           const {items, metadata, links} = collection;
        // get total counts
           const {total_hits} = metadata;
           const result = this.getImageinfo(items);
           logger.info({message:"constructing image list was sucessfull."})

        // get data for previous or Next button
           const buttons = this.getButtonInfo(links);

        // returning data
           return {count:total_hits, images: result, buttons}

       }catch(ex){
            throw ex;
       }
        
    }


    fetchData = () =>{
        
        // destructring given data
        const  {searchText, page} = this

        // construction url params with url
        const endPoint = `/search?media_type=image&q=${encodeURIComponent(searchText)}&page=${page}`

        // fetching data from API
        return fetch.get(endPoint).then((data)=>{
            return data // returning data
        }).catch((ex)=>{
            throw ex; // returning error
        })
    }
    /**
     * 
     * @param {Array<Image>} items 
     * @returns {Array<FilteredValue>}
     */
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
    /**
     * 
     * @param {Array<navigationData>} links 
     * @returns {Object} buttons
     */
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