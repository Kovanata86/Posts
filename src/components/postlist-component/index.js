
import React from "react";
import { PostComponents } from "../post-component";
import styles from "./index.module.css";



export const PostListComponents  =({posts, title, remove, onClickShowEdit}) =>{

    if(!posts.length){
        return (
        <h1 style={{textAlign:'center'}}>Посты не найдены!</h1>
        );
    } 
    return (

       <div>
   
        <h1 style={{textAlign:'center'}}>{title}</h1> 
        <hr style={{margin:"15px"}}/>
        <div className={styles.post}>
        <ul className={styles.post}>
               {posts.map((post, index) =>
                (     <PostComponents
                    remove={remove}
                    number={index + 1}
                    post={post}
                    key={post.id}
                    onClickShowEdit={onClickShowEdit}
                />))
                }
            </ul>
        </div>
    </div>
    );
};
