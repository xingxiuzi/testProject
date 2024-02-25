import confirm from '../assets/img/confirm.svg'
import deleteSVG from '../assets/img/delete.svg'
import React, { useState } from 'react';
import { DatePicker,message} from 'antd';
import dayjs from 'dayjs';
import UploadAvatar from './uploadAvatar'
import GenderPicker from './genderPicker'
import {Popconfirm} from 'antd';
const dateFormat = 'YYYY-MM-DD';
export default function TableItemEditting({props,comfirmItem,deleteItem}){
    const [current,setCurrent] = useState(props)
   
    function setName(value){
        let tempObj = {...current}
        tempObj.name = value
        setCurrent({...tempObj})
    }

    function setAge(value){
        let tempObj = {...current}
        tempObj.age = value
        setCurrent({...tempObj})
    }

    function setBirthday(value,dateString){
        let tempObj = {...current}
        tempObj.birthday = dateString
        setCurrent({...tempObj})
    }

    function setGender(value){
        let tempObj = {...current}
        tempObj.gender = value
        setCurrent({...tempObj})
    }

    function setAvatar(value){
        let tempObj = {...current}
        tempObj.Avatar = value
        setCurrent({...tempObj})
    }

    function confirmItem(){
        if(validation()){
            let temp = {...current}
            temp.edit = false
            comfirmItem(temp)
        }else{
            message.error('Please fill in all information',2)
        }
    }

    function validation(){
        return Object.keys(current).every(item=>{
            return current[item] !== ''
        })
    }
    return <div className='tableArea-body-item' key={props.id}>
    <input type='text' value={current.name} onChange={(e)=>{setName(e.target.value)}}/>
    <div>
        <GenderPicker action={setGender}></GenderPicker>
    </div>
    <input type='text' value={current.age} onChange={(e)=>{setAge(e.target.value)}}/>
    <div>
        <UploadAvatar default={current.Avatar} changeAvatar={setAvatar}></UploadAvatar>
    </div>
    <div className='birthday'>
        <DatePicker defaultValue={dayjs(props.birthday, dateFormat)} onChange={setBirthday}></DatePicker>
    </div>
    <div className='action'>
      <img className='edit' src={confirm} alt='' onClick={()=>{confirmItem()}}></img>
      {/* <img className='delete' src={deleteSVG} alt='' onClick={()=>{deleteItem()}}></img> */}
      <Popconfirm 
      title="Delete"
      description="Are you sure to delete the information of this student?"
      onConfirm={()=>{deleteItem(props)}}
      okText="Yes"
      cancelText="No"
      >
        <img className='delete' src={deleteSVG} alt=''></img>
      </Popconfirm>
    </div>
  </div>
}