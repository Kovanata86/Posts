
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { MyButtonComponents } from '../../components/mybutton-component';
// // import { useSelector } from "react-redux";
// // import {getUserEmail } from "../../redux/selectors";
// // import { useDispatch } from 'react-redux';
// // import actions from "../../redux/actions/creators";
// import styles from './index.module.css';
// // import { auth } from '../../firebase';
// // import { userLogout } from '../../redux/actions/async-actions';


// export const Form = ( title, handleClick ) => {

// const [ email, setEmail] = useState('');
// const [ pass, setPass] = useState('');


//    return ( 
//         <div  className={styles.wrapper}>
//             <div  className={styles.content}>
//                   <h1  className={styles.title}>Введите пароль</h1>

//              <div>
//                      {/* <Validation error={loginError}> */}
//                        <input
//                         type='email'
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder='email'
//                        />
//                     {/* </Validation> */}
//              </div>
//               <div>
//                     {/* <Validation error={passwordError} > */}
//                        <input
//                          type='password'
//                          value={pass}
//                          onChange={(e) => setPass(e.target.value)}
//                         placeholder='password'
//                      />
//                     {/* </Validation> */}
//               </div>
//                 <MyButtonComponents onClick={() => handleClick(email,pass)}> 
//                            {title}
//                 </MyButtonComponents> 
//             </div>
//         </div>


//     )
// }

