import React from "react";
import { Modal, ModalProps } from "@mui/material";

interface IProps extends ModalProps {
  title?: string;
  children: React.ReactElement;
  onDismiss: () => void;
}
const ApModal: React.FC<IProps> = ({
  title,
  children,
  onDismiss,
  ...props
}) => {
  return (
    <Modal {...props}>
      <div className="bg-white rounded-tr-lg min-w-[40vw] rounded-br-lg rounded-bl-lg px-4 py-4">
        <div className="flex justify-end">
          <svg
            className="cursor-pointer"
            onClick={onDismiss}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H15C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15V0Z"
              fill="#FAFAFA"
            />
            <path
              d="M19.0104 19.0099L10.7178 10.7173"
              stroke="#273B4A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.7171 19.0097L19.0098 10.717"
              stroke="#273B4A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p className="font-semibold text-center">{title}</p>
        {children}
      </div>
    </Modal>
  );
};

export default ApModal;
