import  ImageController  from "controller/imagecontroller"

export default {
    Query:{
        getImages : (__, {q,  from}, {uuid}) =>{
            console.log(uuid,"contextcontextcontextcontextcontext");
            return new ImageController(q,from).execute();
        }
    }
}