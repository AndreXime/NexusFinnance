import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className='fixed-top p-3 container bg-dark border-bottom '>
      <div className='d-flex flex-wrap align-items-center justify-content-center'>
        <ul className='nav mb-2 justify-content-center mb-md-0'>
          <li>
            <Link href='/' className='nav-link px-2 text-white'>
              Home
            </Link>
          </li>
          <li>
            <Link href='#funcionalidades' className='nav-link px-2 text-white'>
              Funcionalidades
            </Link>
          </li>
          <li>
            <Link href='#' className='nav-link px-2 text-white'>
              Planos
            </Link>
          </li>
          <li>
            <Link href='#faq' className='nav-link px-2 text-white'>
              FAQs
            </Link>
          </li>
          <li>
            <Link href='#sobre-nos' className='nav-link px-2 text-white'>
              Sobre nós
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
