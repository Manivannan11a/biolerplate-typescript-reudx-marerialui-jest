import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
export interface HomeState {
  name: string
}

// Define the initial state using that type
const initialState: HomeState = {
  name: "Test",
}

export const counterSlice = createSlice({
  name: 'home',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeName: (state : HomeState, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    
  },
})

export const { changeName } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.home.name

export default counterSlice.reducer