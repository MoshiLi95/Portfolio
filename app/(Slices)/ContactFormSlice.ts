import { createSlice } from "@reduxjs/toolkit";

interface ContactFormI {
  open: boolean;
}

const initialContactFormState: ContactFormI = {
  open: false,
};

const contactFormSlice = createSlice({
  name: "contactForm",
  initialState: initialContactFormState,
  reducers: {
    toggleContactForm: (state) => {
      state.open = !state.open;
    },
    openContactForm: (state) => {
      state.open = true;
    },
    closeContactForm: (state) => {
      state.open = false;
    },
  },
});

export const { toggleContactForm, openContactForm, closeContactForm } =
  contactFormSlice.actions;
export default contactFormSlice.reducer;
