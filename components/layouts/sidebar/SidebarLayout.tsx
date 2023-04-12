import Link from 'next/link';
import styles from './SidebarLayout.module.css';

export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">Home</Link>
      <Link href="/hospital">Hospital</Link>
      <Link href="/">Fitness</Link>
      <Link href="/">Ecosystem</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default SidebarLayout;
