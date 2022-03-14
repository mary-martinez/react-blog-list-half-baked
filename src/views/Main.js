import React, { useEffect } from 'react';
// import Blogs from '../components/Blogs/Blogs';
import { useState } from 'react';
import { fetchBlogs } from '../services/Blogs';
import BlogCard from '../components/BlogCard/BlogCard';

export default function Main() {
  const [blogs, setBlogs] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchBlogs();
      console.log(resp);
      setBlogs(resp);
    };
    fetchData();
  }, []);
  console.log('blogs', blogs);
  return (
    <div>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} title={blog.title} subtitle={blog.subtitle} text={blog.text} image={blog.image} />

      ))}
    </div>
  );
}
