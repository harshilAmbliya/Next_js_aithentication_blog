"use client"


import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const Navbar = () => {
  const router = useRouter()
  const handleSignOut = () => {
    signOut({
      redirect: false, callbackUrl: "/login"
    });
    router.push("/login")

  }
  return (
    <div className='py-5 bg-gray-300'>
      <div className="flex justify-between items-center  max-w-7xl mx-auto">
        <div className="h-12 ">
          <img src="https://www.prisma.io/docs/ai_logo.png" alt="" className='h-full w-full rounded-full' />
        </div>

        <ul className='flex justify-center items-center space-x-3'>
          <Link href={'/dashboard'}><li className='bg-zinc-50 text-gray-800 cursor-pointer px-3 py-2 rounded-md'>Dashboard</li></Link>
          <Link href={'/blog'}><li className='bg-zinc-50 text-gray-800 cursor-pointer px-3 py-2 rounded-md'>Blogs</li></Link>
          <Link href={'/user'}><li className='bg-zinc-50 text-gray-800 cursor-pointer px-3 py-2 rounded-md'>Users</li></Link>
        </ul>

        <div className="h-12 ">

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" className="h-full-w-full" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>
                <p onClick={handleSignOut}>Logout</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default Navbar