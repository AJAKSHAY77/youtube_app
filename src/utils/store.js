import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";
// import appslice from "./appslice"




const store = configureStore({
    reducer :{
   app:appslice
  }
})
export default store;






















