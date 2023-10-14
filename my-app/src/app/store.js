import{configurestore} from "@reduxjs/toolkit"
import todoslice from "../Redux/todoslice";
export const store =configurestore({
  reducer: todoslice
});