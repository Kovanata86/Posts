
import React from "react";
import {  MyButtonComponents } from '../mybutton-component'
import {MdDeleteForever} from "react-icons/md";
import styles from "./index.module.css";



export const PostComponents =( props) =>{
    
    return (
        <div className={styles.post}>
                <div className={styles.post.content}>
                  
                            <strong>{props.post.id}.{props.post.title} </strong>
                        <div>
                            {props.post.body}     
                        </div>   
                </div>
                <div className={styles.post.btn}>
                        <div>
                            <MyButtonComponents onClick = {() => props.remove(props.post)}>
                                     <MdDeleteForever />
                            </MyButtonComponents>
                        </div>
                        
                </div>
        </div>

    )
}
