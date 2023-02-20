import { createAsyncThunk } from "@reduxjs/toolkit";



// export const TestUser = createAsyncThunk(
//   "test/testUser",
//   async ({ email }: { email: string }) => {
//     try {
//       const response = await axios.post("/test", { email });
//       if (response.status === 200) {
//         return response.data;
//       } else {
//         throw new Error("failed");
//       }
//     } catch (error) {
//       throw new Error(" failed");
//     }
//   }
// );

// export const test = (email: string) => {
//   return async (dispatch: any) => {
//     try {
//       const response = await testUser({ email });
//       dispatch(testSuccess());
//       return response;
//     } catch (error) {
//       dispatch(testFailure());
//       throw new Error(error.message);
//     }
//   };
// };

// ** to implement it like this way below
// const handleLogin = async (email: string, password: string) => {
//     try {
//       const response = await login(email, password);
//       console.log(response); // handle the login response
//     } catch (error) {
//       console.log(error.message); // handle the login error
//     }
//   };
