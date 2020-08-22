//Core
import React from 'react';
//Styles
import styles from './Layout.module.css';

const Layout = ({ children }) => <div className={styles.layout}>{children}</div>;

export default Layout;
