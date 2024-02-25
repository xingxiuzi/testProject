export default function getStudentList(current,size,rawList,keyword){
    let temp
    if(keyword){
        temp =  [...rawList].filter(item=>{
            return item.name.indexOf(keyword)>-1
        })
        console.log(temp);
    }else{
        temp = [...rawList]
    }
    let length = temp.length
    let newAry = temp.slice((current-1)*size,current*size)
    return [newAry,length]
}