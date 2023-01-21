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
        logout : (action) => {
         state.users = null
        }
        }
    }
)