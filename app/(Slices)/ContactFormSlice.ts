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
  },
});

export const { toggleContactForm, openContactForm } = contactFormSlice.actions;
export default contactFormSlice.reducer;
