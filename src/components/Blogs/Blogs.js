import React from 'react';

export default function Blogs({ id, author_id, created_at, title, subtitle, text }) {
  // const [id, author_id, created_at, title, subtitle, text] = { ...props };
  return (
    <div>Blog
      {id}
      {author_id}
      {created_at}
      {title}
      {subtitle}
      {text}
    </div>
  );
}
