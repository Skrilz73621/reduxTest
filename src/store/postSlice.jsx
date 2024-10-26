import { createSlice } from "@reduxjs/toolkit";


const postSlice = createSlice({
    name: 'PostSlice',
    initialState: {
        users:[]
    },

    reducers: {
        addUser : (state, action) =>{
            state.users.push({
                username : action.payload.username,
                password : action.payload.password 
            })
        }
    }

})


export const {addUser} = postSlice.actions

export default postSlice.reducer