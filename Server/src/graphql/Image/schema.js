import { gql } from 'apollo-server-express';

export default gql`
    type ImageInfo{
        href:String
        description:String
        title:String
    }
    type button{
        page:Int
    }
    type buttons{
        prev:button
        next:button
    }
    type ResponseBody{
        count:Int,
        buttons:buttons
        images:[ImageInfo]
    }
    extend type Query{
        getImages(q:String!, from: Int):ResponseBody
    }
`