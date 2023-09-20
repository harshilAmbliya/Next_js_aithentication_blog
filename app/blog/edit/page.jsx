"use client"

import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { FindBlogById } from '@/helpers/db';

function EditBlog({ params }) {
  const router = useRouter();
  const { toast } = useToast();
  const { id } = params

  const [blog, setBlog] = useState({
    title: '',
    description: '',
    slug: '',
    image: '',
  });

  // Fetch the existing blog data when the component mounts
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/blog`);
        const existingBlog = response.data;
        setBlog(existingBlog);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchBlogData();
    }
  }, [id]);

  const handleChange = (e) => {
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(blog);

    // Send a PUT request to update the blog data
    try {
      const response = await axios.put(`http://localhost:3000/api/blog/${id}`, blog);

      if (response.status === 200) {
        toast({
          description: 'Blog updated successfully',
        });
        router.push(`/blog/${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-6">
      <div className="bg-white w-full md:w-1/2 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Edit Blog</h2>
        <form onSubmit={handleSubmit}>
          {/* Form fields similar to the create blog page */}
          {/* ... */}
          <Button type="submit">Update Blog</Button>
        </form>
      </div>
    </div>
  );
}

export default EditBlog;

