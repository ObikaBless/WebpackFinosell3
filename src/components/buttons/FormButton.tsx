import React from "react";
type Button = {
  text: string;
  isLoading: boolean;
  onClick: () => void;
};
function FormButton({ text, isLoading, onClick }: Button) {
  return (
    <button
      onClick={onClick}
      className="button-radius w-full h-16 bg-primary text-white font-medium text-md flex-center gap-x-2"
    >
      {isLoading && (
        <span className="block w-6 h-6 rounded-full border-2 border-t-transparent border-white animate-spin duration-1000"></span>
      )}
      {text}
    </button>
  );
}

export default FormButton;
