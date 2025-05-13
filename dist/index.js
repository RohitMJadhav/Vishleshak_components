// src/components/Label.tsx
import { jsx } from "react/jsx-runtime";
var Label = ({ text, ...props }) => {
  return /* @__PURE__ */ jsx("label", { ...props, children: text });
};

// src/components/InputBox.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var InputBox = (props) => {
  return /* @__PURE__ */ jsx2("input", { ...props });
};
export {
  InputBox,
  Label
};
