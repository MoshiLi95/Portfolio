"use client";
import { Suspense } from "react";
import { LuMessageSquare, LuX } from "react-icons/lu";
import { motion } from "framer-motion";
import { useAppSelector, useAppDispatch, RootStateI } from "../(Slices)/Store";
import { toggleContactForm } from "../(Slices)/ContactFormSlice";
import FormContent from "./FormContent";
import "./style.css";

const contactForm = {
  open: () => {
    return {
      height: "550px",
      width: window.innerWidth < 768 ? "90vw" : "480px",
      borderRadius: ["50%", "12px"],
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    };
  },
  closed: {
    height: "0",
    width: "0",
    borderRadius: ["12px", "50%"],
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function ContactForm() {
  const { open } = useAppSelector(
    (store: RootStateI) => store.contactFormReducer,
  );
  const dispatch = useAppDispatch();

  return (
    <Suspense fallback={null}>
      <div className="contact--form--container">
        {/* Icon*/}
        <>
          {!open && (
            <span
              className="contact--icon animate-bounce"
              onClick={() => {
                dispatch(toggleContactForm());
              }}
            >
              <LuMessageSquare />
            </span>
          )}
          {open && (
            <span
              className="contact--icon"
              onClick={() => {
                dispatch(toggleContactForm());
              }}
            >
              <LuX />
            </span>
          )}
        </>
        <motion.div
          className="contact--form"
          variants={contactForm}
          initial={false}
          animate={open ? "open" : "closed"}
        >
          <FormContent />
        </motion.div>
      </div>
    </Suspense>
  );
}
