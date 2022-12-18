
import React , { useState, useMemo, useEffect, useCallback } from "react";
import { PostListComponents } from '../components/postlist-component';
import { PostformComponents } from '../components/postform-component';
// import { PostEditFormComponents } from "../components/myEdditForm-component";
import { PostFilterComponents } from "../components/postfilter-component";
import { MyModalComponents } from "../components/mymodal-component";
import {  MyButtonComponents } from "../components/mybutton-component";
import { LogOut } from "../pages/log-out";
import { getPage} from "../components/utils/pages";
import { PaginationComponents } from "../components/pagination";
import PostServise from "../API/postService";
import { useFeching } from "../hook/useFetch";
import '../index.css';



const PRELOADER_URL = 'https://thumbs.gfycat.com/SeparateFeistyGoa-size_restricted.gif';

export const PagesPosts =() => {

const [posts, setPosts] = useState([]);
const [filter, setFilter] = useState({sotr:'', query:''});
const [show, setShow] = useState(false);
const [limit, setlimit]= useState(10);
const [page, setPage]= useState(1);
const [totalPages, setTotalPages]= useState(0);

const [fetchPost, isPreloader] = useFeching( async() => {
  
    const response = await PostServise.getAll(limit, page);
    setPosts( response.data);
    const totalCount = (response.headers['x-total-count'])
    setTotalPages(getPage(totalCount, limit))
})



// () => {
//   const storageData = localStorage.getItem('posts');
//   if(storageData === null){
//     return []
//   } else {
//     return JSON.parse(storageData)
//   }
// }

const sortedPosts = useMemo (() =>{

    if(filter.sort){
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    };
      return posts;
   
}, [filter.sort, posts]);

const sortedAndSearchedPosts = useMemo(() => {

    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))

}, [filter.query, sortedPosts])

const createPost = (newPost)=> {
//     setPosts((posts) => {
//     const modifiedPosts = [...posts, newPost];
//     localStorage.setItem('posts', JSON.stringify(modifiedPosts));
//     return modifiedPosts
// })
     setPosts([...posts, newPost]) 

};

useEffect(() => {

    fetchPost();

}, [page]);

// async function fetchPost(){

//     setIsPreloaderShow(true);
//     let response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_pages=${page}`);
//     setPosts( response.data);
//     setIsPreloaderShow(false);
//     const totalCount = (response.headers['x-total-count'])
//     setTotalPages(getPage(totalCount, limit))
// };


const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
};

// (posts) => {
//   const modifiedPosts = posts.filter(p => p.id !== post.id);
//   localStorage.setItem('posts', JSON.stringify(modifiedPosts));
//   return modifiedPosts
// }

const onClickShow = () => {
  setShow(true);
};

const changePage = (page) => {
  setPage(page); 
};
   
  return (
  
      <div >
             <div> <LogOut/> </div>
                <MyButtonComponents style={{marginTop:"15px"}} onClick={onClickShow} >
                      Новый пост
                </MyButtonComponents>
           
                <MyModalComponents show={show} onClose={()=> setShow(false)} >
                     <PostformComponents create={createPost}/> 
                </MyModalComponents>
                {/* <MyModalComponents showEdit={showEdit} onClose={()=> setShowEdit(false)} >
                     <PostEditFormComponents /> 
                </MyModalComponents> */}
                <PostFilterComponents
                 filter={filter}
                 setFilter={setFilter}
                 />
          {isPreloader && <img alt="" src={PRELOADER_URL}/>}
                <PostListComponents
             
                 remove={removePost}
                 posts={sortedAndSearchedPosts}
                 title={'ПОСТЫ '}/>
    
                <PaginationComponents
                 page={page}
                 changePage={changePage}
                 totalPages={totalPages}
                />     
      </div> 
);
};
