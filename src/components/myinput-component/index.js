
import React from "react";
import styles from './index.module.css'


export const MyInputComponents = (props) =>{

    return (
        <input className={styles.input} {...props}/>
    )
};