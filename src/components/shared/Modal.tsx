import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
interface ModalProps {
  open: boolean;
  className?: string;
  children: ReactNode;
}
const Modal: React.FC<ModalProps> = ({ children, open, className }) => {
  return (
    <div className="absolute">
      {open && (
        <div className={twMerge(`flex flex-col p-4 bg-neutral-800 rounded-md`)}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Modal;
