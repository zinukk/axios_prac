import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [posts, setPosts] = useState([])

  useEffect(()=>{

    // axios({
    //   method:'GET',
    //   url:'https://jsonplaceholder.typicode.com/photos'
    // }).then(response => setPosts(response.data))
    
   axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => setPosts(response.data))
  })

  return (
    <ul>
      {posts.map((cur)=>(
          <li key={cur.id}> {cur.title} </li>
      ))}
    </ul>

  );
}

export default App;
