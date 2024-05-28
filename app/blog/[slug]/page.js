import React from "react";

const BlogDetails = ({ params }) => {
  return (
    <div>
      {params.slug} Details
      <p>{params.slug}</p>
    </div>
  );
};

export default BlogDetails;
