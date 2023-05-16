import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface ModalPropsI {
  open: boolean;
  closeFunction: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalPropsI> = ({ open, closeFunction, children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const gsapRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!containerRef.current || !modalRef.current) return;
    if (!gsapRef.current) {
      gsapRef.current = gsap.timeline({
        paused: true,
        onStart: () => {
          modalRef.current!.style.display = "block";
          containerRef.current!.style.display = "flex";
        },
        onReverseComplete: () => {
          modalRef.current!.style.display = "none";
          containerRef.current!.style.display = "none";
        },
      });
      gsapRef.current
        .add("fade in")
        .from(
          containerRef.current,
          {
            duration: 0.3,
            ease: "0.3, 0.1, 0.1, 1",
          },
          "fade in"
        )
        .to(
          containerRef.current,
          {
            opacity: 1,
          },
          "fade in"
        )
        .from(
          modalRef.current,
          {
            translateY: "-75%",
            opacity: 0,
            duration: 0.5,
            ease: "0.3, 0.1, 0.1, 1",
          },
          "fade in"
        )
        .to(
          modalRef.current,
          {
            translateY: "0%",
            opacity: 1,
          },
          "fade in"
        );
    } else {
      open ? gsapRef.current.play() : gsapRef.current.reverse();
    }
  }, [open]);

  return (
    <div
      className="modal--container"
      ref={containerRef}
      onWheel={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="modal--backdrop" onClick={() => closeFunction()}></div>
      <dialog ref={modalRef} className="modal--dialog" open={open}>
        <div className="modal--btn" onClick={() => closeFunction()}>
          <div className="modal--btn--left"></div>
          <div className="modal--btn--right"></div>
        </div>
        {children}
      </dialog>
    </div>
  );
};

export default Modal;
