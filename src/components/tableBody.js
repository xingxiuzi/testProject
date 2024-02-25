import '../assets/css/tableBody.less'
import TableItem from './tableItem';
import TableItemEditting from './tableItemEditting';
export default function TableBody({tableData,changeData,comfirmItem,deleteItem}){
   
    return <div className='tableArea-body'>
    {
      tableData.map((item,index)=>{
        if(!item.edit){
            return<TableItem props={item} changeData={changeData} deleteItem={deleteItem} key={index}></TableItem>
        }else{
            return<TableItemEditting props={item} comfirmItem={comfirmItem} deleteItem={deleteItem} key={index}></TableItemEditting>
        }
      })
    }
  </div>
}