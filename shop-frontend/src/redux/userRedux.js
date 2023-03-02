import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        token: '',
    },
    reducers:{
        loginStart:(state) => {
            state.isFetching=true;
        },
        loginSuccess:(state, action) => {
            state.isFetching=false;
            state.currentUser=action.payload;
            state.token = action.payload.accessToken;
            localStorage.setItem('userToken', action.payload.accessToken);
        },
        loginFailure:(state) => {
            state.isFetching=false;
            state.error= true;
        },
        logout:(state) => {
            state.isFetching = false;
            state.error = false;
            state.currentUser = null;            
        }
    },
});

export const {loginStart, loginSuccess, loginFailure, logout} = userSlice.actions;
export default userSlice.reducer;

//Session expire upon logout
export const clearSessionData = () => {
    localStorage.removeItem('userToken');
    return logout();
};