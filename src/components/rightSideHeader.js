import { useState } from 'react';
import avatar from '../assets/img/logo512.png'
import NameDrop from './nameDrop';

export default function RightSideHeader(){
    const [name,setName] = useState(false)
    function toggleShow(){
      let flag = name
      setName(!flag)
    }

    return <div className='header'>
    <img src={avatar} alt='' onClick={()=>{toggleShow()}}></img>
    {
      name?<NameDrop></NameDrop>:''
    }
  </div>
}