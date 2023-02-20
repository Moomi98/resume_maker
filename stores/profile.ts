import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface profileInfoType {
  image: string;
  name: string;
  shortIntroduce: string;
}

export const initialState: profileInfoType = {
  image: "",
  name: "",
  shortIntroduce: "",
};

export const profileInfoSlice = createSlice({
  name: "profileInfoSlice",
  initialState,
  reducers: {
    setImage(state, action: PayloadAction<string>) {
      state.image = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setShortIntroduce(state, action: PayloadAction<string>) {
      state.shortIntroduce = action.payload;
    },
  },
});

export const { setImage, setName, setShortIntroduce } =
  profileInfoSlice.actions;
export default profileInfoSlice.reducer;
