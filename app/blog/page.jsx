import BlogPost from '@/components/BlogPost';
import { Button } from '@/components/ui/button';
import prisma from '@/prisma/prismadb'
import React from 'react'

const page = async () => {
    const blog = await prisma.blog.findMany();
    // console.log(blog)
    return (
        <div className="container mx-auto mt-4">
            <h1 className="text-3xl font-semibold mb-4 text-center">Welcome to Your Blog</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blog.map((post, index) => (
                    <BlogPost key={index} {...post} />
                ))}
            </div>
        </div>
    )
}

export default page