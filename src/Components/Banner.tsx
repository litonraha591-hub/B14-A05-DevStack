import banner from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='grid grid-cols-2 ml-[100px] justify-between items-center container mx-auto'>
        <div className=''>
               <h1 className='font-bold text-5xl'>Build Your Ideal
<br/><span className='bg-gradient-to-r from-[#fa2cab] to-[#9812bd] bg-clip-text text-transparent'>Development Stack</span></h1>
<p className='mt-4 mb-4'>Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.</p>

    <div className='flex gap-3 mt-2'>
        <button className='font-semibold text-white bg-gradient-to-r  from-[#fa2cab] to-[#9812bd] border-none rounded-[5px] py-1 px-3'>Explore Technologies</button>
<button className='font-semibold border rounded-[5px] py-1 px-10'>Learn More</button>
    </div>

        </div>
<img src={banner} alt="" className=' ml-15'/>
        </div>
    );
};

export default Banner;