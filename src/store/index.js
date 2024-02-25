import { createSlice,configureStore } from "@reduxjs/toolkit";
import { fullList } from '../assets/js/constant'
import { setKey,getKey } from "../assets/mockApi";

let listSlice = createSlice({
    name:"studentList",
    initialState:{
        schoolList:fullList,
        showPopup:false,
        currentKey:getKey()
    },
    reducers:{
        changeList(state,action){
            state.fullList = action.payload
        },
        toggleShowPop(state,action){
            state.showPopup = action.payload
        },
        changeCurrent(state,action){
            state.currentKey = action.payload
            setKey(action.payload)
        }
    }
})

let store = configureStore({
    reducer:{
        listSliceReducer:listSlice.reducer,
    }
})

export default store