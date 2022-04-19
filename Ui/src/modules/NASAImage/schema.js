import { gql } from 'graphql-request'

export const GET_IMAGE_QUERY = gql`
query($q:String!, $from:Int){
 getImages(q:$q, from:$from){
            count
            images{
                href
                description
                title 
            }
            buttons{
                prev{
                    page
                }
                next{
                    page
                }
            }
       }
}

`