import React from "react";
type Button = {
  text: string;
  className: string;
  Icon?: React.ReactNode;
  onClick?: () => void;
};
function ActionButton({ text, className, onClick, Icon }: Button) {
  return (
    <button onClick={onClick} className={className}>
      <span>{text}</span>
      {Icon}
    </button>
  );
}

export default ActionButton;
