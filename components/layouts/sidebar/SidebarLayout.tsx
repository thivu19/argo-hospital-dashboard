import Image from 'next/image';
import Link from 'next/link';

import styles from './SidebarLayout.module.css';

export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <nav className={styles.nav}>
      
      <div className={styles.navHeader}>
      <Image  src="/hamburgerMenu.png"
            alt="Hamburger Menu"
            className={styles.icon}
            width="24"
            height="24"/>
        <Image  src="/BHCareChainLogoWhite.png"
            alt="Logo"
            width="167"
            height="32"/>
      </div>


      <Link href="/cat" className={styles.navLink}>
      <Image  
            src="/home.png"
            alt="home icon"
            className={styles.icon}
            width="12"
            height="12"
      />
        Home</Link>
        <Link href="/about" className={styles.navLink}>
      <Image  
            src="/info.png"
            alt="info icon"
            className={styles.icon}
            width="12"
            height="12"
      />
        Overview</Link>
        <Link href="/" className={styles.navLink}>
      <Image  
            src="/barChart.png"
            alt="Reports icon"
            className={styles.icon}
            width="12"
            height="12"
      />
        Reports</Link>
        <Link href="/hospital" className={styles.navLink}>
      <Image  
            src="/calendar.png"
            alt="Schedule icon"
            className={styles.icon}
            width="12"
            height="12"
      />
        Schedule</Link>
        <Link href="/" className={styles.navLink}>
      <Image  
            src="/help.png"
            alt="Help icon"
            className={styles.icon}
            width="12"
            height="12"
      />
        Help</Link>
      
        <div className={styles.navFooter}>
      <Image  src="/userProfile.png"
            alt="User Profile"
            className={styles.icon}
            width="43"
            height="40"/>
            <p>Shady Pines</p>
            <Image  src="/overflowMenuVertical.png"
            className={styles.profileMenu}
            alt="Logo"
            width="24"
            height="24"/>
            
      </div>
      

    </nav>
  );
};

export default SidebarLayout;
