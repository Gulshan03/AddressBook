import {createSlice} from '@reduxjs/toolkit';

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    data: [],
  },
  reducers: {
    addUser(state, action) {
      state.data.push(action.payload);
    },
    updateUser(state, action) {
      let temp = state.data;
      temp.map((item, index) => {
        if (index == action.payload.index) {
          item.title = action.payload.title;
          item.name = action.payload.name;
          item.number = action.payload.number;
          item.addressLine1 = action.payload.addressLine1;
          item.addressLine2 = action.payload.addressLine2;
          item.addressLine3 = action.payload.addressLine3;
          item.pincode = action.payload.pincode;
          item.city = action.payload.city;
          item.state = action.payload.state;
          item.country = action.payload.country;
        }
      });
      state.data = temp;
    },
    deleteUser(state, action) {
      let temp = state.data;
      let final = temp.filter((item, index) => {
        return index != action.payload;
      });
      state.data = final;
    },
  },
});

export const {addUser, updateUser, deleteUser} = UserSlice.actions;
export default UserSlice.reducer;
