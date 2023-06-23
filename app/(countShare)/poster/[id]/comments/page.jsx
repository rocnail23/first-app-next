import { Fragment } from "react";

export default async function Comments({params}) {
    
    const {id} = params

    const  posterFetch =() => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,{
           next:{
              revalidate: 60
           }
        })
          .then(res => res.json())
      }
  
     const comments = await posterFetch()
      console.log("hola")
    return (

        <Fragment>
            <ul>
            {comments.map(comment => (
                <li key={comment.id}>
                    <h1>{comment.name}</h1>
                    <p>{comment.body}</p>
                </li>
            ))}
            </ul>
        </Fragment>


    )
}