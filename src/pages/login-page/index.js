import React from "react";
import { useForm } from "react-hook-form";
// import { Form } from "../form/form";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-dom"
// import { setUser } from '../../store/slices/userSlices';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// // import { useForm } from "react-hook-form";
import {  Link } from 'react-router-dom';
// import { useEffect } from "react";

// import { useState} from "react";
// import { useNavigate } from 'react-router-dom';
// import { Validation } from "../../compound/validation";  
// import { VALIDATION_TYPE } from "../../components/utils/validate";
// import { validate } from "../../components/utils/validate";
import styles from './index.module.css';
export const LoginPage = () => {

    // const dispatch = useDispatch();
    // const {push} = useHistory();
    // const handleLogin = (email, password) => {
    //        const auth = getAuth();
    //        signInWithEmailAndPassword(auth, email, password)
    //        .then(({user}) => {
    //         console.log(user);
    //         dispatch(setUser({
    //             email:user.email,
    //             id: user.uid,
    //             token: user.accessToken
    //         }));
    //         push('/posts');
    //     })
    //     .catch(() => { alert('Invalid user!')})
    //  }

    // return (
    //           <div>
    //                 <Form
    //                      title='sign in'
    //                      handleClick={handleLogin}
    //                  />
    //                 <div style={{color: "darkBlue"}}>
    //                       Dont have an account ? <br/>      
    //                 <div style={{ marginTop: 7}}>
    //                    <Link style={{color: "black"}} to="/register"> Go to register</Link>
    //                 </div>
             
    //            </div>
    //           </div>
    // )
    // const navigate = useNavigate();
    // useEffect (() => {
    //     if(user) {
    //         navigate('/');
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
                <h1  className={styles.title}>Pleese log in</h1>
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
           <button
            disabled={!isValid}
            className={styles.btn}>Log in</button>
                <div style={{color: "darkBlue"}}>
                Dont have an account ? <br/>
                <div style={{ marginTop: 7}}>
                <Link style={{color: "black"}} to="/register"> Go to register</Link>
                </div>
             
              </div>
               
             </form>
            </div> 
           
    </div>
)


    //  const navigate = useNavigate();


// после нажатия на button идем в todos
//валидация логина(без пробелов, не только цифры)
// валид пароля (д.б. одна большая буква и спец символ,
// не д.б. пробелов)
    // const[loginError, setLoginError]=useState('');
    // const[passwordError, setPasswordError]= useState('');
    // const[loginText, setLoginText]=useState('');
    // const[passwordText, setPasswordText]= useState('');
    
    // const clickHandler = () => {
       
    //     const loginError = validate(loginText,loginConfig );
    //     const passwordError = validate(passwordText, passwordConfig );
    //     setLoginError(loginError);
    //     setPasswordError(passwordError);

    //     if(!loginError && !passwordError){
    //         navigate('/posts')
    //     }
    // };
    // const loginChangeHandler = ({target:{value}}) =>{
    //     setLoginText(value);
    // };
    // const passwordChangeHandler = ({target:{value}}) =>{
    //     setPasswordText(value);
    // };


    // const isLoginButtonDisabled = Boolean(loginError || passwordError)
    // return (
  
    //     <div  className={styles.wrapper}>
    //         <div  className={styles.content}>
    //             <h1  className={styles.title}>Введите пароль</h1>

    //           <div>
    //                 <Validation error={loginError}>
    //                     <input
    //                      value={loginText}
    //                      onChange={loginChangeHandler}
    //                      className={styles.input}
    //                      type='text'/>
    //                 </Validation>
    //           </div>
    //           <div>
    //                 <Validation error={passwordError} >
    //                     <input
    //                      value={passwordText}
    //                      onChange={passwordChangeHandler}
    //                      className={styles.input}
    //                      type='password'/>
    //                 </Validation>
    //           </div>
    //                 <button
                     
    //                  className={styles.btn}
    //                  onClick={clickHandler}>Войти</button>
    //         </div>
    //     </div>
 
    //  );
};