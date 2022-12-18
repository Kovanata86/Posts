
import React from "react";
import styles from './index.module.css'




export const MyButtonComponents =({children, ...props}) =>{

    return (
        <button className={styles.btn} {...props}>
                    {children}
        </button>
    )
}