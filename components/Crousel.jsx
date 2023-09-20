import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Crousel = () => {
    return (

        <div className="carousel w-full " style={{ height: "30rem",objectFit :"cover",backgroundRepeat:"no-repeat" }}>
            <div id="slide1" className="carousel-item relative w-full h-full">
                <Image src="https://media.istockphoto.com/id/1346883800/photo/happy-woman-enjoying-at-home-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=3N-LRFBaM1i_n3Xk1KCWGCqd68W-NT5215VkarDAAqQ=" className=" h-full w-full" height={500} width={500} alt='title' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <Link href="#slide4" className="btn btn-circle">❮</Link>
                    <Link href="#slide2" className="btn btn-circle">❯</Link>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-full">
                <Image src="https://media.istockphoto.com/id/1346883800/photo/happy-woman-enjoying-at-home-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=3N-LRFBaM1i_n3Xk1KCWGCqd68W-NT5215VkarDAAqQ=" className=" h-full w-full" height={500} width={500} alt='title' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <Link href="#slide4" className="btn btn-circle">❮</Link>
                    <Link href="#slide2" className="btn btn-circle">❯</Link>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-full">
                <Image src="https://media.istockphoto.com/id/1346883800/photo/happy-woman-enjoying-at-home-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=3N-LRFBaM1i_n3Xk1KCWGCqd68W-NT5215VkarDAAqQ=" className=" h-full w-full" height={500} width={500} alt='title' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <Link href="#slide4" className="btn btn-circle">❮</Link>
                    <Link href="#slide2" className="btn btn-circle">❯</Link>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-full">
                <Image src="https://media.istockphoto.com/id/1346883800/photo/happy-woman-enjoying-at-home-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=3N-LRFBaM1i_n3Xk1KCWGCqd68W-NT5215VkarDAAqQ=" className=" h-full w-full" height={500} width={500} alt='title' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <Link href="#slide4" className="btn btn-circle">❮</Link>
                    <Link href="#slide2" className="btn btn-circle">❯</Link>
                </div>
            </div>
        </div>

    )
}

export default Crousel
