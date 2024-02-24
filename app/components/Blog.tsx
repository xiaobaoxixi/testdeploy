"use client";

import React from 'react'; 
import { useEffect, useState } from 'react'; // Import necessary hooks

interface Blog {
    nr: string;
    name: string;
    tag: string[];
    related_url : string;
    related_material: string;
    img: string;
    notes: string;
   }
   
function shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

function BlogView() {
    const [blogs, setBlogs] = useState<Blog[]>([]); // Initialize state for blogs
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('/musing.json');
          const data = await response.json();
          setBlogs(shuffle(data)); 
        };
    
        fetchData(); 
      }, []); 
    //  const blogs: Blog[] = shuffle(blogJSON.slice()); // shuffle will trigger error because HTML rendered on server and on client won't match. so use state
  return (
    <div>
        {blogs.map((item) => (
            <div className="note-item"  key={item.nr}>
            <p className="item-id-row">#<span id="item-id">{item.nr}</span></p>
            <h3 className="note-title">{item.name}</h3>
            </div>
        ))}
    </div>
  )
}

export default BlogView;
