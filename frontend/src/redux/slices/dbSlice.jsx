import { createSlice } from '@reduxjs/toolkit'
const InitialState={userName:''};

export const dbSlice = createSlice({
  name: 'database',
  initialState: {
    value:InitialState,
  },
  reducers: {
    setUser: (state,action) => {
        state.value=action.payload;
    },
    deleteUser:(state)=>{
        state.value=InitialState
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = dbSlice.actions

export default dbSlice.reducer