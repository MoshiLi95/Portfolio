"use client";
import { useAppDispatch } from "../../Store/Store";
import { openContactForm } from "../../Store/ContactFormSlice";

export default function ContactMeBtn() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        className="text-bold btn--primary h-14 w-52"
        onClick={() => dispatch(openContactForm())}
      >
        Contact Me
      </button>
    </div>
  );
}
