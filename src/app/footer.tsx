import { FaGithub, FaEnvelope, FaGlobe } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-300 py-6'>
      <div className='max-w-6xl mx-auto px-4 flex flex-col items-center space-y-4'>
        <p className='text-center text-base font-medium'>
          함께 성장하는 개발 블로그, CHS Blog
        </p>
        <div className='flex space-x-6'>
          <a href='https://github.com/deadrabbit07' target='_blank' rel='noopener noreferrer' className='hover:text-white transition-colors duration-200'>
            <FaGithub size={24} />
          </a>
          <a href='mailto:chsblog@example.com' className='hover:text-white transition-colors duration-200'>
            <FaEnvelope size={24} />
          </a>
          <a href='https://deadrabbit07.github.io/web-portfolio-serve/' target='_blank' rel='noopener noreferrer' className='hover:text-white transition-colors duration-200'>
            <FaGlobe size={24} />
          </a>
        </div>
        <p className='text-center text-sm text-gray-500'>
          &copy; {new Date().getFullYear()} CHS Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
