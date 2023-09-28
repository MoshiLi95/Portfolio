import { useFormik } from "formik";
import { useState } from "react";
import Axios, { AxiosError } from "axios";
import { LuLoader2 } from "react-icons/lu";
import { contactSchema } from "../validation/contact";

export default function FormContent() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      receipt: false,
    },
    validationSchema: contactSchema,
    onSubmit: async (values) => {
      setMessageFormState("loading");
      try {
        await Axios.post("/api/contact", {
          ...values,
        });
        setMessageFormState("success");
        formik.resetForm();
        setTimeout(() => setMessageFormState("init"), 5000);
      } catch (e) {
        setMessageFormState("fail");
        if (e instanceof AxiosError) console.log(e.response?.data);
      }
    },
  });

  const [messageFormState, setMessageFormState] = useState<
    "loading" | "success" | "fail" | "init"
  >("init");

  return (
    <>
      <h3 className="w-full   border-b-2 border-black  p-4 text-2xl font-semibold dark:border-white">
        Send me a message
      </h3>
      <div className="h-full grow px-5">
        <form
          onSubmit={formik.handleSubmit}
          className="flex h-full flex-col justify-around"
        >
          <div className="">
            {formik.touched.name && formik.errors.name ? (
              <label className="block text-sm font-medium leading-6 text-red-500 first-letter:capitalize">
                {formik.errors.name}
              </label>
            ) : (
              <label className="block text-sm font-medium leading-6 first-letter:capitalize">
                name
              </label>
            )}
            <div className="mt-2">
              <input
                className={`form--input ${
                  formik.touched.name && formik.errors.name ? "form--error" : ""
                }`}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="name"
                placeholder="John"
              />
            </div>
          </div>

          <div className="">
            {formik.touched.email && formik.errors.email ? (
              <label className="block text-sm font-medium leading-6 text-red-500 first-letter:capitalize">
                {formik.errors.email}
              </label>
            ) : (
              <label className="block text-sm font-medium leading-6 first-letter:capitalize">
                email
              </label>
            )}
            <div className="mt-2">
              <input
                className={`form--input ${
                  formik.touched.email && formik.errors.email
                    ? "form--error"
                    : ""
                }`}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="hello@li-moshi.com"
              />
            </div>
          </div>

          <div className="">
            <div className="flex flex-row justify-between">
              {formik.touched.message && formik.errors.message ? (
                <label className="block text-sm font-medium leading-6 text-red-500 first-letter:capitalize">
                  {formik.errors.message}
                </label>
              ) : (
                <label className="block text-sm font-medium leading-6 first-letter:capitalize">
                  message
                </label>
              )}
              <span className="text-sm">{`${formik.values.message.length} / 1000 characters`}</span>
            </div>
            <div className="mt-2">
              <textarea
                className={`form--input  h-36 resize-none dark:text-white ${
                  formik.touched.message && formik.errors.message
                    ? "form--error"
                    : ""
                }`}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="message"
                placeholder="Your message"
              />
            </div>
          </div>

          <div className=" flex flex-row-reverse items-center justify-end gap-3">
            <label
              className="block cursor-pointer text-sm font-medium leading-6"
              onClick={() =>
                formik.setFieldValue("receipt", !formik.values.receipt)
              }
            >
              Email me a copy of this message
            </label>
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-1"
                data-ripple-dark="true"
              >
                <input
                  type="checkbox"
                  className="before:content[''] before:bg-blue-gray-500 peer relative 
                  h-4 w-4 cursor-pointer appearance-none rounded-md border-2 border-blue-600 
                  transition-all before:absolute before:left-2/4 before:top-2/4 
                  before:block before:h-12 before:w-12 before:-translate-x-2/4 
                  before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity 
                  checked:border-blue-600  checked:bg-blue-600  checked:before:bg-blue-600  hover:before:opacity-10 
                  dark:border-green-600 dark:checked:border-green-600  dark:checked:bg-green-600  dark:checked:before:bg-green-600"
                  name="receipt"
                  checked={formik.values.receipt}
                  onChange={formik.handleChange}
                />
                <div className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4  opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </label>
            </div>
          </div>

          <div className="relative">
            {messageFormState === "fail" && (
              <span className="absolute left-0 top-0 -translate-y-full font-semibold text-red-500">
                Message failed to send.
              </span>
            )}
            {messageFormState === "success" && (
              <span className="absolute left-0 top-0 -translate-y-full font-semibold text-green-700">
                Message successfully sent.
              </span>
            )}
            <button
              type="submit"
              className="btn--secondary flex h-12 w-full cursor-pointer items-center justify-center px-4 
              py-2  text-xl font-semibold transition disabled:cursor-not-allowed"
              disabled={
                Object.keys(formik.errors).length > 0 ||
                messageFormState === "loading"
              }
            >
              {messageFormState === "loading" ? (
                <span className="animate-spin text-xl font-semibold  ">
                  <LuLoader2 />
                </span>
              ) : (
                "Send"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
