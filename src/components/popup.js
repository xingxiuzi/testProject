import { useSelector ,useDispatch} from "react-redux"
import React, { useState,useEffect,useCallback } from 'react';
import dayjs from 'dayjs';
import UploadAvatar from './uploadAvatar'
import GenderPicker from './genderPicker'
import { DatePicker ,Button ,message} from 'antd';
import TableHeader from "./tableHeader";
import { addItem , getId,setId } from "../assets/mockApi";
const dateFormat = 'YYYY-MM-DD';
let headerList = ['Name','Gender','Age','Avatar','Date of Birth']
export default function Popup(props){

    const [current,setCurrent] = useState({
        id:0,
        name:'',
        age:'',
        Avatar:'',
        gender:'male',
        birthday:dayjs(dayjs()).format(dateFormat)
    })
    const showPopup = useSelector(state=>{ return state.listSliceReducer.showPopup}) 
    const currentKey = useSelector(state=>{ return state.listSliceReducer.currentKey})
    const dispatch = useDispatch()

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

    const validation = useCallback(()=>{
        return Object.keys(current).every(item=>{
            return current[item] !== ''
        })
    },[current])

    const confirm = useCallback(()=>{
        if(validation()){
            let temp = {...current}
            temp.edit = false
            temp.id = getId()
            setId(getId() + 1)
            console.log(temp);
            addItem(currentKey,temp)
            dispatch({type:'studentList/toggleShowPop',payload:false})
            window.location.reload()
        }else{
            message.error('Please fill in all information',2)
        }
    },[current,dispatch,validation,currentKey])

    if(showPopup){
        return <div className="showPop">
            <div className="showPop-innerbox">
                <TableHeader headerList={headerList}></TableHeader>
                <div className="showPop-innerbox-body">
                    <input type='text' value={current.name} onChange={(e)=>{setName(e.target.value)}}/>
                    <div>
                        <GenderPicker action={setGender}></GenderPicker>
                    </div>
                    <input type='text' value={current.age} onChange={(e)=>{setAge(e.target.value)}}/>
                    <div>
                        <UploadAvatar default={current.Avatar} changeAvatar={setAvatar}></UploadAvatar>
                    </div>
                    <div className='birthday'>
                        <DatePicker defaultValue={dayjs(dayjs(), dateFormat)} onChange={setBirthday}></DatePicker>
                    </div>
                </div>

                <div className="control">
                    <Button onClick={()=>{confirm()}}>Confirm</Button>
                    <Button onClick={()=>{dispatch({type:'studentList/toggleShowPop',payload:false})}}>Cancel</Button>
                </div>
            </div>
        </div>
    }else{
        return ''
    }
}