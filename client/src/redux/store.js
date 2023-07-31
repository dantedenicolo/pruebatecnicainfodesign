import { configureStore,createSlice } from '@reduxjs/toolkit';



const initialState = {
  sidebarOpen: false,
}



//Create a slice for:
const sideBarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setSidebarOpen:(state, action) => {
      state.sidebarOpen = action.payload;
    }
  }
})



//Export actions:
const { reducer, actions } = sideBarSlice;


//Add actions to the store:
const store = configureStore({
  reducer: {
    sidebar: reducer,
    // Add the generated reducer as a specific top-level slice
  }
});


//Export actions:
export const { setSideBarOpen } = actions;

export default store;
