import React from "react";

function LabelButton() {
  return (
    <div className="button-radius w-full h-16 flex items-center justify-center border border-primary">
      <p className="font-semibold text-md">
        Having issues with SMS?{" "}
        <button className="text-primary">Try Email</button>
      </p>
    </div>
  );
}

export default LabelButton;
