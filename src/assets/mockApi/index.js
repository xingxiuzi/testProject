import { fullList } from '../js/constant'

export function setItem(list){
    localStorage.setItem('schoolInfo',JSON.stringify(list))
}

export function getItem(){
    if(localStorage.getItem('schoolInfo')){
        return JSON.parse(localStorage.getItem('schoolInfo'))
    }else{
        setItem(fullList)
        return fullList
    }
}

export function setKey(key){
    localStorage.setItem('classKey',JSON.stringify(key))
}

export function getKey(){
    if(localStorage.getItem('classKey')){
        return JSON.parse(localStorage.getItem('classKey'))
    }else{
        setKey([0,0,0])
        return [0,0,0]
    }
}

export function setId(id){
    localStorage.setItem('nextId',JSON.stringify(id))
}

export function getId(){
    if(localStorage.getItem('nextId')){
        return JSON.parse(localStorage.getItem('nextId'))
    }else{
        setId(17)
        return 17
    }
}

export function editItem(key,id){
    console.log(id);
    let list = getItem()
    list[key[0]][key[1]][key[2]].forEach(item=>{
        if(item.id === id){
            item.edit = true
        }else{
            item.edit = false
        }
    })
    setItem(list)
}

export function changeItem(key,obj){
    let list = getItem()
    list[key[0]][key[1]][key[2]].forEach((item,index)=>{
        if(item.id === obj.id){
            list[key[0]][key[1]][key[2]][index] = {...obj}
        }
    })
    setItem(list)
}

export function deleteItem(key,id){
    let list = getItem()
    let current = list[key[0]][key[1]][key[2]]
    let newAry = current.filter(item=>{
        return item.id !== id
    })
    list[key[0]][key[1]][key[2]] = newAry
    setItem(list)
}

export function addItem(key,obj){
    let list = getItem()
    list[key[0]][key[1]][key[2]].unshift(obj)
    setItem(list)
}

export function getNextId(key,obj){
    
}


export function getList(key){
    return getCurrent(key)
}

function getCurrent(key){
    return getItem()[key[0]][key[1]][key[2]]
}