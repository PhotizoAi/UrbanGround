import type { ReactNode } from 'react';
import styles from '../styles/index.module.css';

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className={styles.container}>
      {/* Background Shapes */}
      <div className={styles.bgShape1} />
      <div className={styles.bgShape2} />

      <div className={styles.contentWrapper}>
{/* uplayground Branding */}
      <div className={styles.brandingSection}>
        <h1 className={styles.brandingTitle}>uplayground</h1>
        </div>

        {children}
      </div>
    </div>
  );
};

export default PageLayout;
