export default function TableHeader({headerList}){
    return <div className='tableArea-header'>
    {
      headerList.map((item,index)=>{
        return <div key={index} className={item==='Date of Birth'?'birthday':''}>
          {item}
        </div>
      })
    }
  </div>
}