import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: 3,
}
export const receiverSlice = createSlice({
  name: "receiver",
  initialState,
  reducers: {
    setReceiver(state, action) {
      const { id } = action.payload
      return {
        id
      }
    },
    clearReceiver(state, action) {
      return {
        id: ''
      }
    },
  },
})

export const { setReceiver, clearReceiver } = receiverSlice.actions
export const receiver = receiverSlice.name
export default receiverSlice.reducer
export const extractReceiverSlice = (global) => {
  return global[receiver]
}
