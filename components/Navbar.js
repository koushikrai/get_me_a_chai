import React from 'react'

const Navbar =() => {
    return (
        <nav className='bg-blue text-white flex justify-between items-center px-3 h-16'>
            <div className="logo font-bold">Get me a chai!</div>
            <ul className='flex justify-between gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
        </nav>
    )
}

export default Navbar