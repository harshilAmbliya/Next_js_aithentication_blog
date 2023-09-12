import BlogPost from '@/components/BlogPost';
import prisma from '@/prisma/prismadb';
import React from 'react'

const page = async () => {
  const blog = await prisma.blog.findMany();
  return (
    <div>



      <section className=" py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Latest Blogs</h2>
          <div className="container mx-auto mt-4">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {blog.map((post, index) => (
                <BlogPost key={index} {...post} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto">
          {/* Add additional content or sections here */}
        </div>
      </section>
    </div>
  )
}

export default page