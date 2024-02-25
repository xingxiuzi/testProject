
import { useState } from 'react'
import add from '../assets/img/add.svg'
import search from '../assets/img/search.svg'
import Table from './table'
import { useDispatch} from 'react-redux'
import React from 'react'
export default function RightSideContent(){
  const dispatch = useDispatch()
  const [keyword,setKeyword] = useState('')
    return <div className='rightContent'>
    <div className='contentArea'>
      <div className='contentArea-innerBorder'>
        
        <div className='table-header'>
          <span>Student List:</span>
          <div className='add-btn' onClick={()=>{dispatch({type:'studentList/toggleShowPop',payload:true})}}>
            <img src={add} alt=''></img>
            Add Student
          </div>
        </div>

        <div className='searchBox'>
          <div className='search'>
            <img src={search} alt=''></img>
            <input type='text' placeholder='Search student by name' value={keyword} onChange={(e)=>{setKeyword(e.target.value)}}></input>
          </div>
        </div>

        <Table keyword={keyword} />
      </div>
    </div>
  </div>
}