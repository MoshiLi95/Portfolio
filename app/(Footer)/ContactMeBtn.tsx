"use client";
import { useAppDispatch } from "../(Slices)/Store";
import { openContactForm } from "../(Slices)/ContactFormSlice";

export default function ContactMeBtn() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        className="text-bold h-12 rounded-md bg-white px-5 font-semibold text-blue-600 dark:text-green-600"
        onClick={() => dispatch(openContactForm())}
      >
        Contact Me
      </button>
    </div>
  );
}
