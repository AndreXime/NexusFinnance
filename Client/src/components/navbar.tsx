import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className='p-3 mb-4'>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 text-start'>
            <li>
              <Link href='/' className='nav-link px-2 text-white'>
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/#funcionalidades'
                className='nav-link px-2 text-white'
              >
                Features
              </Link>
            </li>
            <li>
              <Link href='#' className='nav-link px-2 text-white'>
                Pricing
              </Link>
            </li>
            <li>
              <Link href='#' className='nav-link px-2 text-white'>
                FAQs
              </Link>
            </li>
            <li>
              <Link href='#sobre-nos' className='nav-link px-2 text-white'>
                About
              </Link>
            </li>
          </ul>
          <div className='text-end'>
            <Link
              href='/acess'
              className='btn btn-warning btn-outline-light me-2'
            >
              Começar Agora
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
