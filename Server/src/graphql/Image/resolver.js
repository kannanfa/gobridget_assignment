import  ImageController  from "controller/imagecontroller"



export default {
    Query:{
        getImages : (__, {q,  from}, {uuid}) =>{  // This is image resolve,  taking search text & page number as first input and return result promise
            return new ImageController(q,from).execute();
        }
    }
}