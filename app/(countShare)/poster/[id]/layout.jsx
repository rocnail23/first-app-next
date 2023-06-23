import Link from "next/link"
import { Fragment } from "react"

 export default async function Asd({params,children}) {

   const {id} = params

   const  posterFetch =() => {
      return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
         next:{
            revalidate: 60
         }
      })
        .then(res => res.json())
    }

   const poster = await posterFetch()


   
    return (
      <Fragment>
   <h1>{poster.title}</h1>
   <p>{poster.body}</p>
   <Link href="/poster/[id]/comments" as={`/poster/${id}/comments`}><p>ver comentarios</p></Link>
   <div>
      {children}
   </div>
   </Fragment>
    )
    
 }