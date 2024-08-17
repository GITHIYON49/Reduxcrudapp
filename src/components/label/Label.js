import React from "react";

const Label = ({ labelName }) => {
  return (
    <>
      <label className="text-lg font-semibold capitalize mb-2 inline-block">
        {labelName}
      </label>
    </>
  );
};

export default Label;
