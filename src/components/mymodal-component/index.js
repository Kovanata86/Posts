
import React from "react";
import styles from "./index.module.css";

export const MyModalComponents = ({children,...props}) => {
 
    if(!props.show){
      return null
    }
  
    return (
    <div className={styles.myModal} onClick={props.onClose}>
         <div className={styles.myModalContent} onClick={e => e.stopPropagation()}>
                    {children}
         </div>
    </div>
)
}