import React from 'react'

const page = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center lg:text-left px-5 tracking-wider">
          <h1 className="text-4xl font-bold first-letter:text-green-500 first-letter:text-5xl">Contact Us !</h1>
          <p className="py-6 text-lg font-serif">We are a passionate team dedicated to providing high-quality solutions and services. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis, urna eget scelerisque congue, justo odio bibendum libero, non rhoncus arcu odio in nisl. Sed vel dapibus orci, eget laoreet eros. Duis facilisis est nec cursus. Aliquam erat volutpat. Fusce fringilla, tellus eu tincidunt volutpat, odio dui dictum dolor, vel efficitur arcu erat at neque. Integer eget lorem non eros scelerisque accumsan.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-gray-200">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <input type="text" placeholder="Message" className="input input-bordered" />
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label> */}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
