"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  InputBox: () => InputBox,
  Label: () => Label
});
module.exports = __toCommonJS(index_exports);

// src/components/Label.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Label = ({ text, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { ...props, children: text });
};

// src/components/InputBox.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var InputBox = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-col gap-1", children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { htmlFor: name, className: "text-sm font-medium", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InputBox,
  Label
});
