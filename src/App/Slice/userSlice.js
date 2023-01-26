import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice(
    {
      // initial state should be null
        name : "user",
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
export const selectUser = (state) => state.user.user
export default userSlice.reducer
