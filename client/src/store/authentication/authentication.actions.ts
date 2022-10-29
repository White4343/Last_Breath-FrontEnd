import {createAsyncThunk} from "@reduxjs/toolkit";
import {userAPI} from "../../utils/api";
import {IReqUser, IResUser} from "../../utils/api/types";


export const login = createAsyncThunk<IResUser, IReqUser>(
    'user/login',
    async (userData, thunkAPI) => {
        return await userAPI.login(userData);
    }
)