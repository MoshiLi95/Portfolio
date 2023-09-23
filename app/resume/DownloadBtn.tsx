"use client";
import { useState, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Axois from "axios";
import { LuLoader2 } from "react-icons/lu";

export default function DownloadBtn() {
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

    const token = await executeRecaptcha("validate_download");

    const { data } = await Axois.post<{
      success: boolean;
      phone: string;
      address: string;
      mapSrc: string;
    }>("/api/recaptcha", {
      token,
    });

    if (data.success) {
      const downloadUrl = `/pdf/Moshi%20Li%20Resume.pdf`;
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `Moshi Li's Resume.pdf`;
      link.dispatchEvent(new MouseEvent("click"));
      setValidationState("success");
    } else {
      setValidationState("fail");
    }
  }, [executeRecaptcha]);

  return (
    <button className="download--btn" onClick={handleReCaptchaVerify}>
      {validationState === "loading" ? (
        <span className="animate-spin font-semibold">
          <LuLoader2 />
        </span>
      ) : (
        `Download`
      )}
    </button>
  );
}
