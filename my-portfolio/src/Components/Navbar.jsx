
import {Link} from 'react-router-dom'
import styles from '../Components/Navbar.module.css'
import { useEffect, useState } from 'react'

const Navbar = () => {

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <nav className={`${styles.navbar} ${isSticky ? `${styles.sticky}` : ''}`}>
      <div className={styles.container}>
        {/* Your navbar content goes here */}

        <div className={styles.navbar}>
        <Link to='/'>HOME</Link>
        <Link to='/about-me'>ABOUT ME</Link>
        <Link to='/skills'>SKILLS</Link>
        <Link to='/project'>PROJECT</Link>
        <Link to='/contact'>CONTACT</Link>
        <Link to='/resume'>RESUME</Link>
        </div>

        

      </div>
    </nav>
  )
}

export default Navbar