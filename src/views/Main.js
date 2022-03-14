import React, { useEffect } from 'react';
import Blogs from '../components/Blogs/Blogs';
// import { useState } from 'react';
import { fetchBlogs } from '../services/Blogs';

export default function Main() {
  // const [blogs, setBlogs] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchBlogs();
      console.log(resp);
      // setBlogs(resp);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Blogs />
    </div>
  );
}
