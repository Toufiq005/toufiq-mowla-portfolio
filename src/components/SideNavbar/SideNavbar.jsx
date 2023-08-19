import './SideNavbar.css'
import { Link } from 'react-scroll';
import { useRef } from 'react';

export default function ({brand}) {

const navbarLinks = [
  {
    id: 1,
    name:"About",
    href: "about"
  },
  {
    id: 2,
    name:"Projects",
    href: "projects"
  },
  {
    id: 3,
    name:"Exp.",
    href: "exp."
  },
  {
    id: 4,
    name:"Contact",
    href: "contact"
  }
]

 function test(){
   const r = document.querySelector('.active')
   console.log(r);
 }

const ref = useRef(null);

  return (
    <nav className="side-nav h-screen fixed top-0 z-40 left-0 flex flex-col items-center justify-start">
      <div className="logo w-14 h-14 rounded-lg text-center my-5">
        <h1 className='text-5xl font-bold pt-2'>
          T <span className={'mr-3' + ' ' + (brand.color)}>.</span>
        </h1>
      </div>
      <ul className='text-xl mt-3'>
        {navbarLinks.map((props) => (
          <li key={props.id} className='nav-links w-20 flex items-center justify-center cursor-pointer' style={{ borderColor: `${brand.hex}` }}>
            <Link to={props.href} ref={ref} activeClass='active' activeStyle={{ borderColor: `${brand.hex}` }} spy={true} smooth={true} offset={-30} duration={200} onScroll={() => test()}><p className='rotate-90'>{props.name}</p></Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
