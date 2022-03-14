import React, { useEffect } from 'react';
// import Blogs from '../components/Blogs/Blogs';
import { useState } from 'react';
import { fetchBlogs } from '../services/Blogs';
import BlogCard from '../components/BlogCard/BlogCard';

export default function Main() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchBlogs();
      setBlogs(resp);
    };
    fetchData();
  }, []);
  console.log(blogs);
  return (
    <div>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} title={blog.title} subtitle={blog.subtitle} text={blog.text} image={blog.image} />
        // <BlogCard key={blog.id} {...blog} />

      ))}
    </div>
  );
}
