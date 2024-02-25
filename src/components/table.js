import TableBody from './tableBody';
import {tableHeader}  from '../assets/js/constant'
import { useCallback,useEffect,useState } from 'react';
import { Pagination } from 'antd';
import TableHeader from './tableHeader';
import getStudentList from '../assets/tools/getStudentList';
import { useSelector } from 'react-redux';
import { changeItem,deleteItem,editItem,getList} from '../assets/mockApi';
export default function Table({keyword}){
  const [currentList,setCurrnentList] = useState([])
  const [currentPage,setCurrentPage] = useState(1)
  const [total,setTotal] = useState()
  const currentKey = useSelector(state=>{return state.listSliceReducer.currentKey})
  const [bodyData,setBodyData] = useState(getList(currentKey))
  useEffect(()=>{
    let [tempAry,length] = getStudentList(currentPage,8,bodyData,keyword)
    if(tempAry.length>0){
      setTotal(length)
      setCurrnentList([...tempAry])
    }
  },[keyword,currentPage,bodyData])

  useEffect(()=>{
    setBodyData(getList(currentKey));
  },[currentKey])

  const changeData = useCallback((e)=>{
    editItem(currentKey,e.id)
    setBodyData(getList(currentKey));
  },[currentKey])

  const comfirmItem = useCallback((e)=>{
    changeItem(currentKey,e)
    setBodyData(getList(currentKey));
  },[currentKey])

  const deleteIt = useCallback((e)=>{
    deleteItem(currentKey,e.id)
    setBodyData(getList(currentKey));
  },[currentKey])

    return <div className='tableArea'>
      <TableHeader headerList={tableHeader}></TableHeader>

      <TableBody tableData={currentList} changeData={changeData} comfirmItem={comfirmItem} deleteItem={deleteIt}></TableBody>
      
      <div className='pagination'>
        <Pagination pageSize={8} current={currentPage} onChange={(e)=>{setCurrentPage(e)}} total={total} />
      </div>
  </div>
}