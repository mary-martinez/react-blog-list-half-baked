import React, { useEffect } from 'react';
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
  return (
    <div>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
  );
}
