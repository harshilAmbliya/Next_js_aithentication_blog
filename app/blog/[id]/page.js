"use client"
import { Button } from '@/components/ui/button';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Home = async ({ params }) => {
    const [blog, setBlog] = useState(null)
    const handleDelete = async () => {
        try {
            const handleFetch = async () => {
                const blogs = await axios.get("http://localhost:3000/api/blog");
                const blog = await blogs.data;
            }
            handleFetch();
        } catch (error) {
            console.log(error)
        }
    }
    const { id } = params;

    useEffect(() => {
        try {
            const handleFetch = async () => {
                const blogs = await axios.get("http://localhost:3000/api/blog");
                const blogdata = await blogs.data;
                const blogPost = blogdata.find(post => post.id === id);

                setBlog(blogPost);
            }
            handleFetch();
        } catch (error) {
            console.log(error)
        }

    }, [])

    if (!blog) {
        return (
            <div>

                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div>

            <div className="card container" >
                <div className="border border-gray-30000 rounded-3xl p-10 my-10">
                    <div className="flex justify-between items-center py-5">
                        <h3 className='text-2xl pl-16'><span className='text-green-400 text-3xl'>Hey ,</span> Edit Or Delete Your Blog Here ..</h3>
                        <div className="flex justify-center items-center space-x-3">
                            <Link href={`/blog/edit/${id}`}>
                                <Button className="w-[10rem]" >Edit</Button>
                            </Link >
                            <Link href={`/blog/delete/{id}`}><Button variant="destructive" className="w-[10rem]" onClick={handleDelete}>Delete</Button></Link>
                        </div>
                    </div>
                    {console.log(blog)}
                    <img src={blog.image} className='w-full' />
                    <div className="flex items-center justify-around py-5">
                        <h1 className='text-2xl py-7'>{blog?.title}</h1>
                        <Button className="my-3" >{blog.slug}</Button>
                    </div>
                    <p className='py-4  text-lg font-light p-3'>{blog.description}</p>

                </div>
            </div>
        </div>
    )
}

export default Home



