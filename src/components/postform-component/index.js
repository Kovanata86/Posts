
import React from "react";
import { MyInputComponents} from '../myinput-component';
import { useState } from 'react';
import styles from "./index.module.css";



export const PostformComponents = ({create}) => {

    const [post, setPost] = useState({title:'',body:''});
   
    const onChangePostTitle = (e) => {
        setPost({...post, title: e.target.value});
    };
    const onChangePostBody = (e) => {
        setPost({...post, body: e.target.value});
    } ;
    const addNewPost = (e) =>{
        e.preventDefault();
        const newPost = {
            ...post,
            id: Math.random().toString()
        }
 
         create(newPost);
         setPost({title:'',body:''});
    }      

    return (

            <div>
                 <form >    
                              <MyInputComponents
                          
                                    type='text'
                                    value ={post.title}
                                    placeholder='Название поста'
                                    onChange={onChangePostTitle}
                               />
                      
                              <MyInputComponents
                       
                                    type='text'
                                    value ={post.body}
                                    placeholder='Содержание поста'
                                    onChange={onChangePostBody}
                              /> 
                
                              <button className={styles.btn}  onClick={addNewPost}>
                                    Создать пост
                              </button>
                    
                   </form>
            </div>
    );
};