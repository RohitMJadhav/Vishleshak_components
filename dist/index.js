// src/components/Label.tsx
import { jsx } from "react/jsx-runtime";
var Label = ({ text, ...props }) => {
  return /* @__PURE__ */ jsx("label", { ...props, children: text });
};

// src/components/InputBox.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var InputBox = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  className
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
    label && /* @__PURE__ */ jsx2("label", { htmlFor: name, className: "text-sm font-medium", children: label }),
    /* @__PURE__ */ jsx2(
      "input",
      {
        id: name,
        name,
        type,
        value,
        onChange,
        placeholder,
        className: `border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`
      }
    )
  ] });
};
export {
  InputBox,
  Label
};
