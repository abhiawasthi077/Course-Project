import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';
export const Card = (props) => {
  let course=props.course;
  let likedCourses=props.likedCourses;
  let setLikedCourses=props.setLikedCourses;
  function clickHandler(){
    //logic part
    if(likedCourses.includes(course.id)){
      //course is liked before
      setLikedCourses( (prev) => prev.filter((cid)=> (cid !== course.id) )  );
      toast.warning("Liked removed");
    }
    else{
      //we have to insert like
      if(likedCourses.length===0){
        setLikedCourses([course.id]);
      }
      else{
        setLikedCourses((prev) => [...prev,course.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className='w-[300px] bg-bgDark rounded-md bg-opacity-80 overflow-hidden'>
      <div className='relative'>
        <img  alt="error" src={course.image.url}/>
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
       grid place-items-center'>
        <button onClick={clickHandler}>
          {
            !likedCourses.includes(course.id)?
            (<FcLikePlaceholder fontSize="1.75rem"/>) :
            (<FcLike fontSize="1.75rem"/>)
            }
        </button>
        </div>
      </div>
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>
          {
            course.description.length>100 ?
            (course.description.substr(0,100)) + "...":
            (course.description)
          }
        </p>
      </div>
    </div>
  )
}
export default Card