import BlogPost from '@/components/BlogPost';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'

const page = async ({ params }) => {
    const { id } = params;
    const blog = await prisma.blog.findUnique({
        where: {
            id
        }
    })
    return (
        <div>
            <div className="card container " >
                <div className="bg-white rounded-3xl p-20 my-10">
                    <Image src={blog.image} height={500} width={500} className='w-full' />
                    <div className="flex items-center justify-around py-5">
                        <h1 className='text-2xl py-7'>{blog?.title}</h1>
                        <Button className="my-3">{blog.slug}</Button>
                    </div>
                    <pre className='py-4 overflow-x-hidden'>{blog.description}</pre>

                </div>
            </div>
        </div>
    )
}

export default page