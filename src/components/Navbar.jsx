import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 w-full bg-white shadow-sm z-50'>
      <div className='flex justify-between items-center py-4 px-6 md:px-24'>
      
        <div>
          <span className='font-bold text-3xl text-gray-500'>eNnO</span>
        </div>

        <ul className='hidden md:flex items-center gap-6 md:gap-10'>
          <li className='hover:text-green-500 transition'><a href="#home">Home</a></li>
          <li className='hover:text-green-500 transition'><a href="#about">About</a></li>
          <li className='hover:text-green-500 transition'><a href="#services">Services</a></li>
          <li className='hover:text-green-500 transition'><a href="#portfolio">Portfolio</a></li>
          <li className='hover:text-green-500 transition'><a href="#team">Team</a></li>


          <li className='relative'>
            <div
              className='flex items-center gap-1 hover:text-green-500 transition cursor-pointer'
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Dropdown <ChevronDown size={16} />
            </div>
            {dropdownOpen && (
              <ul className='absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40 text-gray-700'>
                <li className='px-4 py-2 hover:bg-green-100 cursor-pointer'>Item 1</li>
                <li className='px-4 py-2 hover:bg-green-100 cursor-pointer'>Item 2</li>
                <li className='px-4 py-2 hover:bg-green-100 cursor-pointer'>Item 3</li>
                <li className='px-4 py-2 hover:bg-green-100 cursor-pointer'>Item 4</li>
              </ul>
            )}
          </li>

          <li>
            <button className='bg-green-500 text-white py-2 px-5 rounded-3xl text-sm hover:bg-green-400 transition duration-200 font-medium'>
              Get Started
            </button>
          </li>
        </ul>

        <div className='md:hidden'>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>


      {mobileMenuOpen && (
        <ul className='md:hidden flex flex-col gap-4 px-6 pb-6 bg-white shadow-md'>
          <li className='hover:text-green-500 transition'><a href="#home">Home</a></li>
          <li className='hover:text-green-500 transition'><a href="#about">About</a></li>
          <li className='hover:text-green-500 transition'><a href="#services">Services</a></li>
          <li className='hover:text-green-500 transition'><a href="#portfolio">Portfolio</a></li>
          <li className='hover:text-green-500 transition'><a href="#team">Team</a></li>

       
          <li className='relative'>
            <div
              className='flex items-center gap-1 hover:text-green-500 transition cursor-pointer'
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Dropdown <ChevronDown size={16} />
            </div>
            {dropdownOpen && (
              <ul className='flex flex-col bg-gray-50 mt-2 rounded-md'>
                <li className='px-4 py-2 hover:bg-green-100 cursor-pointer'>Item 1</li>
                <li className='px-4 py-2 hover:bg-green-100 cursor-pointer'>Item 2</li>
                <li className='px-4 py-2 hover:bg-green-100 cursor-pointer'>Item 3</li>
                <li className='px-4 py-2 hover:bg-green-100 cursor-pointer'>Item 4</li>
              </ul>
            )}
          </li>

        
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
