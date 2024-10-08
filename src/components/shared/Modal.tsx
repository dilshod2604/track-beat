import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
interface ModalProps {
  open: boolean;
  className?: string;
  children: ReactNode;
}
const Modal: React.FC<ModalProps> = ({ children, open, className }) => {
  return (
    <>
      {open && (
        <div
          className={twMerge(
            `flex flex-col p-4 bg-neutral-800 rounded-md absolute transition duration-300`,
            className
          )}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
