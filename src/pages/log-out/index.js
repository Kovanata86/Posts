
import React from "react";
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import { useAuth } from '../../hook/useAuth';
// import { removeUser } from '../../store/slices/userSlices';
// import { useSelector } from "react-redux";
// import {getUserEmail } from "../../redux/selectors";
// import { useDispatch } from 'react-redux';
// import actions from "../../redux/actions/creators";
import styles from './index.module.css';
// import { auth } from '../../firebase';
// import { userLogout } from '../../redux/actions/async-actions';


export const LogOut = ()=> {
// const dispatch = useDispatch()
// const { isAuth, email} = useAuth();
 const navigate = useNavigate();
 
  const clickHandlerLogout = ()=>{
   
   
    navigate('/login');
  }

   return (

              // isAuth ? (
              //       <div>
              //              <button
              //               onClick={() => dispatch(removeUser())}
              //                className={styles.btn}
              //                >Logout  
              //                </button>
              //       </div>
              //  ) : (
              //   <Redirect to='/login'/>
              //  ) 
    
   <div className={styles.wrapper}>
              
                    {/* <span className={styles.email}>{userEmailDisplay}</span> */}
                    <button onClick={clickHandlerLogout} className={styles.btn}>Logout</button>    
    </div>
    )
    
}


