
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo-text.png'


const Nav = () => {
    return (
        <div className='font-jakarta py-3 border-b border-gray-200 sticky top-0 z-50 bg-white shadow-md'>
            <div className='flex justify-between items-center container mx-auto'>
                
            <img src={logo} alt="" className='w-[137px] h-[32px]' />
             <FaBars className='visible sm:flex md:hidden' />
            <ul className=' hidden sm:flex gap-3 text-[#475569]'>
               
               <li>Home</li>
               <li>Technologies</li>
               <li>Projects</li>
               <li>About</li>
               <li>Contact</li>
            </ul>
            <div className='flex gap-3'>
                <button>Sign In</button>
            <button className='btn btn-secondary rounded-[4px] text-white  '>Sign In</button>
            
            </div>
        </div>
        </div>
    );
};

export default Nav;