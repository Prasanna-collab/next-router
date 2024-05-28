import React from 'react';
import Link from 'next/link';

const BlogsPage = () => {
  return (
    <div>
        <h1>List of Blogs</h1>
        <Link href="/blog/post-1">Post-1</Link>
        <Link href="/blog/post-2">Post-2</Link>
    </div>
  )
}

export default BlogsPage;