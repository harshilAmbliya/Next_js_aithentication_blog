import React from 'react'
import Link from 'next/link';
import Crousel from '@/components/crousel';
const page = () => {
  return (
    <div className="min-h-screen">

      <main className="container mx-auto py-8 px-4 ">
        <h2 className="text-2xl font-semibold mb-4 text-center ">About Us</h2>



        <section className="relative h-[40rem]">

          {/* Illustration behind hero content */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
            <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#EAEAEA" offset="77.402%" />
                  <stop stopColor="#DFDFDF" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="url(#illustration-01)" fillRule="evenodd">
                <circle cx="1232" cy="128" r="128" />
                <circle cx="155" cy="443" r="64" />
              </g>
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">

            {/* Hero content */}
            <div className="pt-40 pb-12 md:pt-40 md:pb-20">

              {/* Section header */}
              <div className="text-center pb-12 md:pb-16">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-wider mb-4" data-aos="zoom-y-out">Make your blogs <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">wonderful</span></h1>
                <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                  <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                    <div>
                      <Link className="btn text-gray-500  w-full mb-4 sm:w-auto sm:mb-0" href="/blog">View Some Blogs</Link>
                    </div>
                    {/* <div>
                      <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                    </div> */}
                  </div>
                </div>
              </div>



            </div>

          </div>
        </section>

        <section className='py-10 space-y-16'>
          <div className="bg-white p-10 rounded-lg shadow-lg border border-gray-100 flex items-center">
            <div className='h-[20rem] w-full '>
              <img src="https://media.istockphoto.com/id/1198931639/photo/writing-a-blog-blogger-influencer-reading-text-on-screen.webp?b=1&s=170667a&w=0&k=20&c=kKruwyP33_KtX5FX4wPBkqXbViH8_DHiEPBq6OXTEyM=" alt="images" className='h-full w-full rounded-md' />
            </div>
            <div className='py-3 px-5'>
              <div className="p-4">

                <p className="text-gray-700 first-letter:text-2xl">
                  We are blogmania, a passionate team of writers, experts, and enthusiasts dedicated to providing valuable information, insights, and entertainment to our readers. Our mission is to state your mission or purpose, e.g., educate, inspire, and entertain through our blog.
                </p>
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-4"> Our Story:</h2>
                <p className="text-gray-700 mt-4">

                  Blogmania was founded in 2023 by Harshil Ambliya. It all started with a vision to create a platform where people can mention the purpose of your blog, e.g.,learn about technology trends, discover travel destinations, explore culinary delights, etc. Since then, weve grown into a vibrant community of readers and contributors.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-lg border border-gray-100 flex items-center">

            <div className='py-3 px-5'>
              <div className="p-4">

                <p className="text-gray-700 first-letter:text-2xl">
                  We are blogmania, a passionate team of writers, experts, and enthusiasts dedicated to providing valuable information, insights, and entertainment to our readers. Our mission is to state your mission or purpose, e.g., educate, inspire, and entertain through our blog.
                </p>
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-4"> Our Story:</h2>
                <p className="text-gray-700 mt-4">

                  Blogmania was founded in 2023 by Harshil Ambliya. It all started with a vision to create a platform where people can mention the purpose of your blog, e.g.,learn about technology trends, discover travel destinations, explore culinary delights, etc. Since then, weve grown into a vibrant community of readers and contributors.
                </p>
              </div>
            </div>
            <div className='h-[20rem] w-full '>
              <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="images" className='h-full w-full rounded-md' />
            </div>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-lg border border-gray-100 flex items-center">
            <div className='h-[20rem] w-full '>
              <img src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsb2dzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="images" className='h-full w-full rounded-md' />
            </div>
            <div className='py-3 px-5'>
              <div className="p-4">

                <p className="text-gray-700 first-letter:text-2xl">
                  We are blogmania, a passionate team of writers, experts, and enthusiasts dedicated to providing valuable information, insights, and entertainment to our readers. Our mission is to state your mission or purpose, e.g., educate, inspire, and entertain through our blog.
                </p>
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-4"> Our Story:</h2>
                <p className="text-gray-700 mt-4">

                  Blogmania was founded in 2023 by Harshil Ambliya. It all started with a vision to create a platform where people can mention the purpose of your blog, e.g.,learn about technology trends, discover travel destinations, explore culinary delights, etc. Since then, weve grown into a vibrant community of readers and contributors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <Crousel /> */}
      </main >


    </div >
  )
}

export default page
