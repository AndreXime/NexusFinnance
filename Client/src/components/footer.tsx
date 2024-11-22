const Footer:React.FC = () => {
   return (
     <footer className="mt-4">
       <ul className="nav justify-content-center p-3 text-bg-dark">
         <li className="nav-item">
          <span className="text-bg-dark nav-link px-2">&copy; 2022 Company, Inc</span>
         </li>
         <li className="nav-item">
           <a href="/" className="nav-link px-2">
             Home
           </a>
         </li>
         <li className="nav-item">
           <a href="#" className="nav-link px-2 ">
             Features
           </a>
         </li>
         <li className="nav-item">
           <a href="#" className="nav-link px-2 ">
             Pricing
           </a>
         </li>
         <li className="nav-item">
           <a href="#" className="nav-link px-2">
             FAQs
           </a>
         </li>
         <li className="nav-item">
           <a href="#" className="nav-link px-2">
             About
           </a>
         </li>
       </ul>
     </footer>
   );
}

export default Footer;