import { createSlice } from '@reduxjs/toolkit'

export const navMenuSlice = createSlice({
  name: 'navMenuSlice',
  initialState: {
    menuToggle: false,
    about: false,
    youth: false,
    efik: false,
  },
  reducers: {
    navMenu: (state) => {
      state.menuToggle = !state.menuToggle;
    },
    dropDowns: (state, action) => {
        const linkText = action.payload;
        if (linkText === 'About  '){
            state.about = !state.about;
            state.youth = false;
            state.efik = false;
        } else if(linkText === "Youth ") {
            state.about = false;
            state.youth = !state.youth;
            state.efik = false;
        } else if(linkText === "EFIKS ") {
            state.about = false;
            state.youth = false;
            state.efik = !state.efik;
        }
    }
  },
})

export const { navMenu, dropDowns } = navMenuSlice.actions

export default navMenuSlice.reducer