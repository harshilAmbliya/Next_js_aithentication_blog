import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-white text-gray-700 py-10 border-t">
                <div className="container mx-auto flex justify-between">
                    <div className="footer-section">
                        <header className="footer-title text-xl font-semibold mb-4">Services</header>
                        <ul className="list-none p-0 m-0">
                            <li className="mb-2">
                                <a href="#" className="link link-hover text-gray-700 hover:text-blue-500">
                                    Branding
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="link link-hover text-gray-700 hover:text-blue-500">
                                    Design
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="link link-hover text-gray-700 hover:text-blue-500">
                                    Marketing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="link link-hover text-gray-700 hover:text-blue-500">
                                    Advertisement
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <header className="footer-title text-xl font-semibold mb-4">Company</header>
                        <ul className="list-none p-0 m-0">
                            <li className="mb-2">
                                <a href="#" className="link link-hover text-gray-700 hover:text-blue-500">
                                    About us
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="link link-hover text-gray-700 hover:text-blue-500">
                                    Contact
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="link link-hover text-gray-700 hover:text-blue-500">
                                    Jobs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="link link-hover text-gray-700 hover:text-blue-500">
                                    Press kit
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <header className="footer-title text-xl font-semibold mb-4">Legal</header>
                        <ul className="list-none p-0 m-0">
                            <li className="mb-2">
                                <a href="#" className="link link-hover text-gray-700 hover:text-blue-500">
                                    Terms of use
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="link link-hover text-gray-700 hover:text-blue-500">
                                    Privacy policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="link link-hover text-gray-700 hover:text-blue-500">
                                    Cookie policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
