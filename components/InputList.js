import React from "react";

const InputList = React.forwardRef(({ inputNum }, ref) => {
  return (
    <div ref={ref}>
      {new Array(inputNum).fill("input").map((item, index) => {
        return <input type="number" key={`item-${index}`} />;
      })}
    </div>
  );
});

export default InputList;
