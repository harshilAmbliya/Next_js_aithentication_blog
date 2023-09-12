import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

import { Button } from './ui/button'
import Link from 'next/link'

const BlogPost = ({ id,title, description, slug }) => {
    return (
        <div className='py-3'>
            {/* <div className="p-4 bg-white rounded-2xl ">
                <h2 className="text-xl first-letter:text-2xl font-semibold">{title}</h2>
                <p className='p-2'>{description}</p>
                <h4 className="p-1">{slug}</h4>
            </div> */}
            <Link href={`/blog/${id}`}>
                <Card className="max-w-xl w-full py-3">
                    <CardHeader >
                        <CardTitle className="py-1">{title.slice(0, 25)}</CardTitle>
                        <CardDescription>{`${description.slice(0, 250)}...`}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="">
                                <Button className="rounded-lg w-auto" variant="outline" type="button"  >
                                    {slug}
                                </Button>

                            </div>
                        </form>
                    </CardContent>

                </Card>
            </Link>
        </div>
    )
}

export default BlogPost