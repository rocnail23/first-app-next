"use client"

import Link from "next/link"
import Button from "./button"





export default async function () {

     const  posterFetch =() => {
        return fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res => res.json())
      }

    const poster = await posterFetch()

    return (
   <div>
   
    {poster.slice(0,5).map(poster => (
            <article key={poster.id}>
                 <Link href="/poster/[id]" as={`/poster/${poster.id}`}>
                <h1>{poster.title}</h1>
                </Link>
                <p>{poster.body}</p>
                <Button/>

            </article>
       ))}
      
   </div>
       
    )
    
 }