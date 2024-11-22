const Navbar:React.FC = () => {
  return (
    <nav className="p-3 mb-4">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 text-start">
            <li>
              <a href="/" className="nav-link px-2 text-white">Home</a>
            </li>
            <li>
              <a href="/#funcionalidades" className="nav-link px-2 text-white">Features</a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">Pricing</a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">FAQs</a>
            </li>
            <li>
              <a href="#sobre-nos" className="nav-link px-2 text-white">About</a>
            </li>
          </ul>
          <div className="text-end">
            <a
              href="/acess"
              className="btn btn-warning btn-outline-light me-2"
            >
              Começar Agora
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
