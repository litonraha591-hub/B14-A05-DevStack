import logo from "../assets/logo-text.png";

const Bottom = () => {
  return (
    <div className="container mx-auto mt-20 font-jakarta py-3 ">
        <div className="lg:flex   justify-between gap-3 border-y shadow-t-md  shadow-b-md border-gray-200 bg-white py-10 md:grid grid-cols-2 ">
    <div>
          <img src={logo} alt="" />
      <p className="mt-2 text-gray-500">
        Curated tools, technologies, and resources for developers building
        modern software.
      </p>
      <ul className="flex gap-2 mt-4 font-medium">
        <li>GitHub</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
      </ul>
    </div>
    <div>
        <h1 className="font-medium">PRODUCT</h1>
        <ul className="text-gray-500 mt-2">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
        </ul>
        
    </div>
    <div>
        <h1 className="font-medium" >COMPANY</h1>
        <ul className="text-gray-500 mt-2">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
        </ul>
    </div>
    <div>
        <h1 className="font-medium">LEGAL</h1>
        <ul className="text-gray-500 mt-2">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            
        </ul>
    </div>           
    </div>
    <div className="lg:flex justify-between mt-4  text-[15px] text-gray-500 md:grid grid-cols-2">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <ul className="flex gap-3">
            <li>Privacy</li>
            <li>Terms</li>
            
        </ul>
    </div>
    </div>
   
  );
};

export default Bottom;
