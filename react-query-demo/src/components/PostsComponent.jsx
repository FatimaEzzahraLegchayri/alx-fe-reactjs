import React from 'react'
import { useQuery } from 'react-query'

const fetchPosts = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(!res.ok) throw new Error('fetching error')
    console.log('res', res)
    return res.json()
}
function PostsComponent() {
    const {data, isError, isLoading, refetch, isFetching} = useQuery('fetchPosts', fetchPosts,{staleTime:5000})
    if(isLoading) return <div>loading...</div>
    if(isError) return <div>error loading data</div>

  return (
    <div>
        <button onClick={refetch}
        >
        {isFetching ? 'fetching ...' : 'refrech'} 
        </button>
        {data.map(item =>(
           <div key={item.id}>{item.title}</div>
        ))}
        
    </div>
    
  )
}

export default PostsComponent