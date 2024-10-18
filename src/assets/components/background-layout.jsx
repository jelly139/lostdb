import React from 'react';
import styles from 'background-layout.module.css'

const BackgroundLayout = () => {
    return (
      <div>
        <div className={styles.background}></div>
        <div className={styles.content}></div>
      </div>
    );
  };

export default BackgroundLayout;