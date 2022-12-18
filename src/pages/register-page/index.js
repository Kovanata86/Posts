import React from "react";
import { useForm } from "react-hook-form";
// import { useHistory } from "react-dom"

// import { Form } from "../form/form";
// import { useDispatch } from "react-redux";
// import { setUser} from '../../store/slices/userSlices';
// import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
// import { useNavigate, Link } from 'react-router-dom';
// import { useEffect } from "react";

import styles from './index.module.css';



export const RegisterPage = () => {


    // const dispatch = useDispatch();
    // const {push} = useHistory();
    // const handleRegister = (email, password) => {
    //        const auth = getAuth();
    //        createUserWithEmailAndPassword(auth, email, password)
    //        .then(({user}) => {
    //         console.log(user);
    //         dispatch(setUser({
    //             email:user.email,
    //             id: user.uid,
    //             token: user.accessToken
    //         }));
    //         push('/posts')
    //        })
    //        .catch(console.error)
    //  }

    // return (
    //           <div>
    //             <Form
    //             title='register'
    //             handleClick={handleRegister}
    //             />
    //           </div>
    // )
    // const navigate = useNavigate();
    // useEffect (() => {
    //     if(user) {
    //         navigate('/posts');
    //     } 
    // }, [user, navigate])
 const {
     register,
     formState: {errors, isValid},
     handleSubmit,
     reset,
    }  = useForm({
        mode: "onBlur"
    });
const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset();
}
return (
    <div className={styles.wrapper}>
             <div  className={styles.content}>
                <h1  className={styles.title}>Register</h1>
                <form   onSubmit={handleSubmit(onSubmit)}>
             
             
             <input 
             {...register('login',{
                 required: "You should type something"
             })}
             className={styles.input}
             type="login"
             placeholder="login"
             />
             
                 <div style={{height:40}}>
             { errors.login && <span style={{color: "red"}}>{errors.login.message || 'Error!' }</span> }
           </div>
        
       
             <input 
                {...register('password', {
                 required: "You should type something",
                 minLength:{
                     value:7,
                     message:'String length should be more than 7 chars'
                 }
                })}
                className={styles.input}
                type="password"
                placeholder="password"
             /> 
         
           <div style={{height:40}}>
             { errors.password && <span style={{color: "red" , fontSize: 15}}>{errors.password.message || 'Error!' }</span> }
           </div>
           <input 
                {...register('password', {
                 required: "You should type something",
                 minLength:{
                     value:7,
                     message:'String length should be more than 7 chars'
                 }
                })}
                className={styles.input}
                type="password"
                placeholder="password"
             /> 
         
           <div style={{height:40}}>
             { errors.password && <span style={{color: "red" , fontSize: 15}}>{errors.password.message || 'Error!' }</span> }
           </div>
           <button
            disabled={!isValid}
            className={styles.btn}>Register</button>
              
               
             </form>
            </div> 
           
    </div>
)


};