export default function Footer() {
   return (
     <footer className="py-4 mt-4 border-top">
       <ul className="nav justify-content-center pb-3 mb-3 text-bg-dark">
         <li className="nav-item">
           <a href="#" className="nav-link px-2">
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
       <p className="text-center text-bg-dark">&copy; 2022 Company, Inc</p>
     </footer>
   );
}