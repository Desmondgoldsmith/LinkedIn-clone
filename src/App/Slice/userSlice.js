import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice(
    {
        name : "users",
        initialState :  {
            users : null,
        },

        reducers :{
            // login reducer
          login : (state,action) => {
            state.value = action.payload()
          },

        //   logout reducer
        logout : (state) => {
         state.users = null
        }
        }
    }
)

export const {login,logout} = userSlice.actions
export const selectUser = (state) => state.users.users
export default userSlice.reducer
