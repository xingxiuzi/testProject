export default function deepClone(ary){
    let clone = JSON.parse(JSON.stringify(ary))
    return clone
}