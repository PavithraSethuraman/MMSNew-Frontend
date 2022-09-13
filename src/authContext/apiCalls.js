// import axios from "axios";
// import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

// export const login = async (user, dispatch) => {

//   dispatch(loginStart());
//   try {
//     const res = await axios.post("http://localhost:8800/api/auth/login", user);
//     dispatch(loginSuccess(res.data));
//     const msg = res.data.message
//     return msg
//   } catch (err) {
//     dispatch(loginFailure(err.response.data.message));
//    const error = err.response.data.message
//    console.log(error)
//   //  alert(error)
//   return error
//   }

// };