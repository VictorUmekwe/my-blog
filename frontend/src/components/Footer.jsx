import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=' bg-dark py-5 mt-5'>
        
    <div className='container text-light text-center'>
        <p className=' display-5 mb-3'><span className='px-2 py-1 bg-dark bg-gradient rounded text-light fw-bold'>Vicky'</span>Blog</p>
        <small className=' text-white-50'>&copy;{new Date().getFullYear()} Copyright by Vicky Codez. All rights reserved</small> 
    </div>
        <hr className=' text-white'/>
        <div className=" d-flex justify-content-center gap-2">
            <Link to='https://www.github.com/VictorUmekwe' target="_blank" rel="noopener noreferrer">

        <FaGithub  size={30} color="white"/>
            </Link>

            <Link to='https://www.x.com/@flexzy9' target="_blank" rel="noopener noreferrer">
        <FaXTwitter  size={30} color="white"/>
            </Link>

        </div>
</footer>
  )
}

export default Footer