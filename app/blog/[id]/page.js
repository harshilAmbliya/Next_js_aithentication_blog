"use client"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useToast } from '@/components/ui/use-toast';
const Home = ({ params }) => {
    const [blog, setBlog] = useState(null);
    const router = useRouter();
    const { toast } = useToast()


    const handleDelete = async () => {
        try {

            const res = await axios.delete("http://localhost:3000/api/blog/delete", {
                data: {
                    blog
                }
            });
            console.log(res);
            if (res.statusText === "OK" && res.status == 200) {
                toast({
                    description: " Hey , Your blog has been deleted..",
                })
                router.push("/blog");
                router.refresh()
            }
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

    }, [id])

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
                                <Button className="w-[8rem]" >Edit</Button>
                            </Link >

                            {/*  onClick={handleDelete} */}
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="destructive" className="w-[8rem]">Delete</Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your
                                            Blog and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>
                    {/* {console.log(blog)} */}
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



