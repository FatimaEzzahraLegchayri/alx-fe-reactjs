import React from 'react'
import { useQuery } from 'react-query'

const fetchData = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(!res.ok) throw new Error('fetching error')
    console.log('res', res)
    return res.json()
}
function PostsComponent() {
    const {data, error, isLoading} = useQuery('fetch', fetchData)
    if(isLoading) return <div>loading...</div>
    if(error) return <div>error loading data</div>

  return (
    <div>
        {data.map(item =>(
           <div key={item.id}>{item.title}</div>
        ))}
    </div>
    
  )
}

export default PostsComponent