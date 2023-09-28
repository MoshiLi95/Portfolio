"use client";
import { useState, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Axois from "axios";
import { LuLoader2 } from "react-icons/lu";

export default function ProtectedInfo() {
  const [addressInfo, setAddressInfo] = useState("");
  const [phoneInfo, setPhoneInfo] = useState("(437) - xxx - xxxx");
  const [validationState, setValidationState] = useState<
    "loading" | "success" | "fail" | "init"
  >("init");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(async () => {
    setValidationState("loading");

    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      setValidationState("fail");
      return;
    }

    const token = await executeRecaptcha("validate_contact");

    const { data } = await Axois.post<{
      success: boolean;
      phone: string;
      address: string;
      mapSrc: string;
    }>("/api/recaptcha", {
      token,
    });

    if (data.success) {
      setPhoneInfo(data.phone);
      setAddressInfo(data.address);
      setValidationState("success");
    } else {
      setValidationState("fail");
    }

    // Do whatever you want with the token
  }, [executeRecaptcha]);

  return (
    <>
      <div className="mb-4">
        <h6 className="font-bold">Phone Number:</h6>
        <p className="tracking-wider">{phoneInfo}</p>
      </div>
      <div className="mb-4">
        <h6 className="font-bold">Address</h6>
        <p className="tracking-wider">
          {addressInfo}
          {addressInfo !== "" && <br />}
          Toronto, ON
          <br />
          Canada
          <br />
        </p>
      </div>

      {validationState !== "success" && (
        <div className="mb-4">
          {validationState === "fail" ? (
            <p className="text-yellow-400">
              Verification failed. Please try again later.
            </p>
          ) : (
            <p>Verify to see more information</p>
          )}

          {(validationState === "init" || validationState === "fail") && (
            <>
              <button className="btn--secondary mt-2 h-12 w-40">
                <span>Verify</span>
              </button>
            </>
          )}

          {validationState === "loading" && (
            <button
              className="mt-2 inline-flex h-12 w-40 items-center justify-center rounded bg-gray-300 px-4 py-2 font-semibold text-gray-800 "
              disabled
            >
              <span className="animate-spin font-semibold">
                <LuLoader2 />
              </span>
            </button>
          )}
        </div>
      )}
    </>
  );
}
