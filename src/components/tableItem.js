import edit from '../assets/img/edit.svg'
import deleteSVG from '../assets/img/delete.svg'
import {Popconfirm} from 'antd';
export default function TableItem({props,changeData,deleteItem}){
    function editItem(value){
      changeData(value)
    }
    
    return <div className='tableArea-body-item' key={props.id}>
    <div className='name'>{props.name}</div>
    <div className='gender'>{props.gender}</div>
    <div className='age'>{props.age}</div>
    <div>
      <img src={props.Avatar} alt=''></img>
    </div>
    <div className='birthday'>{props.birthday}</div>
    <div className='action'>
      <img className='edit' src={edit} alt='' onClick={()=>{editItem(props)}}></img>
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