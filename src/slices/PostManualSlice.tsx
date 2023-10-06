import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  resources: [],
  postManualStatus: "idle",
};
const token = sessionStorage.getItem("token");
export const postManual = createAsyncThunk("manualurl/post", async (values) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/resource`, values, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status >= 200 && response.status < 300) {
    } else {
      console.error("Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
export const trainManual = createAsyncThunk("manualurl/train", async (id) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/resource/${id}/train`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status >= 200 && response.status < 300) {
    } else {
      console.error("Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
export const deleteManual = createAsyncThunk("manualurl/delete", async (id) => {
  try {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/resource/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status >= 200 && response.status < 300) {
    } else {
      console.error("Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

export const getManuals = createAsyncThunk("manuals/get", async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/resources`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    sessionStorage.setItem("resources", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const PostManualSlice = createSlice({
  name: "File",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getManuals.fulfilled, (state: any, action) => {
      state.resources = action.payload;
    });
    builder.addCase(postManual.fulfilled, (state: any) => {
      state.postManualStatus = "successful";
    });
    builder.addCase(postManual.pending, (state: any) => {
      state.postManualStatus = "loading";
    });
    builder.addCase(postManual.rejected, (state: any) => {
      state.postManualStatus = "failed";
    });
  },
});

export default PostManualSlice.reducer;
