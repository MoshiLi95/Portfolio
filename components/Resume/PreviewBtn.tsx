"use client";
import { useState, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Axois from "axios";
import { LuLoader2 } from "react-icons/lu";

export default function PreviewBtn() {
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

    const token = await executeRecaptcha("validate_preview");

    const { data } = await Axois.post<{
      success: boolean;
    }>("/api/recaptcha", {
      token,
    });

    if (data.success) {
      window.open(`/pdf/Moshi%20Li%20Resume.pdf`, "_blank");
      setValidationState("success");
    } else {
      setValidationState("fail");
    }
  }, [executeRecaptcha]);

  return (
    <button
      className="preview--btn  btn--primary"
      onClick={handleReCaptchaVerify}
    >
      {validationState === "loading" ? (
        <span className="flex animate-spin items-center justify-center font-semibold">
          <LuLoader2 />
        </span>
      ) : (
        `Preview`
      )}
    </button>
  );
}
