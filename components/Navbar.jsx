"use client"

import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { AvatarGenerator } from 'random-avatar-generator';




const Navbar = () => {

  const path = usePathname();
  const router = useRouter()
  const generator = new AvatarGenerator();
  const image = generator.generateRandomAvatar();

  const handleSignOut = async () => {
    const res = await signOut({
      callbackUrl: 'http://localhost:3000/login',
      redirect: false,

    });
    console.log(res);
    if (res) {
      router.push('/login');
    }

  }


  return (
    <div className="navbar bg-base-100 flex justify-between items-center px-4 border-b">
      <div className="flex">
        <Link href={'/'} className="normal-case text-xl">BlogMANIA</Link>
      </div>
      <div className="flex items-center justify-center space-x-5 text-lg pl-20">
        <Link href={'/'} className={` ${path === "/" ? ' ' : ''}`}>Home</Link>
        <Link href={'/about'} className={` ${path === "/" ? ' ' : ''}`}>About</Link>
        <Link href={'/blog'} className={` ${path === "/" ? ' ' : ''}`}> Blogs</Link>
        <Link href={'/contact'} className={` ${path === "/" ? ' ' : ''}`}> Contact</Link>
      </div>
      <div className="flex-none gap-2 px-3">
        {/* <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div> */}

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={image} />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] py-2 px-1 shadow menu menu-sm dropdown-content bg-base-100 rounded-md w-52">
            <li>
              <Link className="justify-between" href={'/profile'}>
                Profile
                <span className="badge">New</span>
              </Link>
            </li>

            <li onClick={handleSignOut}>
              <div className="justify-between">
                Logout
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar