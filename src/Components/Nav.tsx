
import logo from '../assets/logo-text.png'


const Nav = () => {
    return (
        <div className='font-jakarta py-3 border-b border-gray-200'>
            <div className='flex justify-between items-center container mx-auto'>
            <img src={logo} alt="" className='w-[137px] h-[32px]' />
            <ul className='flex gap-3 text-[#475569]'>
               <li>Home</li>
               <li>Technologies</li>
               <li>Projects</li>
               <li>About</li>
               <li>Contact</li>
            </ul>m
            <div className='flex gap-3'>
                <button>Sign In</button>
            <button className='bg-[#fb2987] px-3 py-1 rounded-[5px] text-white'>Sign In</button>
            </div>
        </div>
        </div>
    );
};

export default Nav;