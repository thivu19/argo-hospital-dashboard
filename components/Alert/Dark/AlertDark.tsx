import Image from 'next/image';
import styles from './AlertDark.module.css';

export interface IAlert {
  sampleTextProp: string;
  errors: string;
}

const AlertDark: React.FC<IAlert> = ({ sampleTextProp, errors }) => {
  return (
    <div className={styles.container}>
      <div className={styles.bell}>
        <Image
          src="/DarkBell.png"
          alt="alert__image"
          className={styles.alert__image}
          width="16"
          height="19"
        />
      </div>
      <div className={styles.badge}>
        <Image
          src="/AlertBadge.png"
          alt="badge__image"
          className={styles.badge__image}
          width="14"
          height="14"
        />
      </div> 
        
      



    </div>
  );
};

export default AlertDark;
