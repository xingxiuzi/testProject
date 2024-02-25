import React, { useState } from 'react';
import { Tree } from 'antd';
import '../assets/css/leftSideBar.less'
//图片
import arrowLeft from '../assets/img/arrowL.svg'
import arrowRight from '../assets/img/arrowR.svg'
import { useDispatch,useSelector } from 'react-redux';
import { treeData } from '../assets/js/constant';


export default function LeftSideBar(){
    const dispatch = useDispatch()
    const [showNavi,setShowNavi] = useState(true)
    const [arrow,setArrow] = useState(arrowLeft)
    const [minWidth,setMinWidth] = useState('3rem')
    const currentKey = useSelector(state=>{return state.listSliceReducer.currentKey})

    function toggleNavi(){
        let flag = showNavi
        setShowNavi(!flag)
        if(flag){
            setArrow(arrowRight)
            setMinWidth('0.5rem')
        }else{ 
            setArrow(arrowLeft)
            setMinWidth('3rem')
        }
    }

    function onSelect(keys, info){
      if(keys.length !== 0){
        let key = keys[0].split('-')
        let newKey = key.map(item=>{return Number(item)})
        dispatch({type:'studentList/changeCurrent',payload:newKey})
      }
    }
    return <div className='leftSideBar' style={{minWidth:minWidth}}>
        {
            showNavi?<Tree
            onSelect={onSelect}
            defaultExpandedKeys={[[currentKey[0],currentKey[1]].join('-')]}
            defaultSelectedKeys={[currentKey.join('-')]}
            treeData={treeData}
            />:''
        }

        <div className={showNavi?'navigate active':'navigate'} onClick={()=>{toggleNavi()}}>
            <img src={arrow} alt=''></img>
            {
                showNavi?'Navigation':''
            }
        </div>
    </div>
}