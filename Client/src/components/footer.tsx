import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className='mt-4'>
      <ul className='nav justify-content-center p-3 text-bg-dark'>
        <li className='nav-item'>
          <span className='text-bg-dark nav-link px-2'>
            &copy; 2022 Company, Inc
          </span>
        </li>
        <li className='nav-item'>
          <Link href='/' className='nav-link px-2'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='#' className='nav-link px-2 '>
            Features
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='#' className='nav-link px-2 '>
            Pricing
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='#' className='nav-link px-2'>
            FAQs
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='#' className='nav-link px-2'>
            About
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
