import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'


import Link from 'next/link'

const BlogPost = ({ id, title, description, slug }) => {
    return (
        <div className='py-3'>
            {/* <div className="p-4 bg-white rounded-2xl ">
                <h2 className="text-xl first-letter:text-2xl font-semibold">{title}</h2>
                <p className='p-2'>{description}</p>
                <h4 className="p-1">{slug}</h4>
            </div> */}
            <Link href={`/blog/${id}`} className='h-[10rem]'>
                <Card className="max-w-xl w-full py-4 h-full relative">
                    <CardHeader >
                        <CardTitle className="py-1">{title.slice(0, 25)}</CardTitle>
                        <CardDescription>{`${description.slice(0, 250)}...`}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className='absolute top-2 right-3'>
                            <div className="">
                                <span className="indicator-item indicator-top indicator-end badge bg-gray-800 rounded-md text-white p-2">{slug}</span>
                            </div>
                        </form>
                    </CardContent>

                </Card>
            </Link>
        </div>
    )
}

export default BlogPost