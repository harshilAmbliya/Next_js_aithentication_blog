"use client"


import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Button } from './ui/button';


function CreateBlog() {
    const router = useRouter()
    const [blog, setBlog] = useState({
        title: '',
        description: '',
        slug: '',
        image: ''
    })

    const handleChange = (e) => {
        if (e.target.name === 'slug') {
            // Handle the slug value separately
            setBlog({
                ...blog,
                slug: e.target.value,
            });
        } else {
            // Handle other input fields
            setBlog({
                ...blog,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(blog)
        const post = await axios.post("http://localhost:3000/api/blog/create", blog)
        if (post.status === 201) {
            router.push("/blog")
        }
        setBlog({
            title: '',
            description: '',
            slug: '',
            image: ''
        })
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-6">
            <div className="bg-white w-full md:w-1/2 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-center">Create a New Blog </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                            Image
                        </label>
                        <input
                            type="text"
                            id="image"
                            name='image'
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter the blog title"
                            value={blog.image}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="mb-4 w-ful">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slug">
                            Slug
                        </label>
                        <select className="select select-bordered w-full " onChange={handleChange} name="slug"   >
                            <option disabled selected>Select Slug</option>
                            <option>AI</option>
                            <option>Webframeworks</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name='title'
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter the blog title"
                            value={blog.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                            Content
                        </label>
                        <textarea
                            id="content"
                            name='description'
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 h-40"
                            placeholder="Write your blog content here"
                            value={blog.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <Button type="submit">
                        Create Blog
                    </Button>

                </form>
            </div>
        </div>
    );
}

export default CreateBlog;
