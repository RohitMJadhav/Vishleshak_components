"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  Alert: () => Alert_default,
  Avatar: () => Avatar_default,
  Badge: () => Badge_default,
  Bredcrumb: () => Breadcrumb_default,
  Card: () => InfoCard,
  Carousel: () => ImageCarousel,
  Chart: () => Chart_default,
  Checkbox: () => Checkbox_default,
  DatePicker: () => DatePicker_default,
  DropdownMenu: () => DropdownMenu_default,
  FileUpload: () => FileUpload_default,
  Loaders: () => Loaders_default,
  Modal: () => Modal_default,
  NotificationToaster: () => NotificationToaster_default,
  Pagination: () => Pagination_default,
  PhoneInput: () => PhoneInput_default,
  ProgressBar: () => ProgressBar,
  RadioButton: () => RadioButton_default,
  ReactDatePicker: () => ReactDatePicker_default,
  Select: () => Select_default,
  TextArea: () => TextArea_default,
  TextInput: () => TextInput_default,
  ToggleSwitch: () => ToggleSwitch_default,
  Tooltip: () => Tooltip_default
});
module.exports = __toCommonJS(index_exports);

// src/components/Loaders.tsx
var import_react_spinners = require("react-spinners");
var import_jsx_runtime = (
  // Loader container can be fullscreen or inline 
  require("react/jsx-runtime")
);
var Loader = ({
  isLoading = false,
  size = 40,
  color = "#000000",
  type = "spinner",
  message = "Loading, please wait...",
  fullscreen = false
}) => {
  if (!isLoading) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: `flex flex-col items-center justify-center ${fullscreen ? "fixed inset-0 h-screen w-screen z-50" : ""}`,
      children: [
        type === "spinner" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_spinners.ClipLoader, { color, size }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_spinners.DotLoader, { color, size }),
        message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-black mt-2", children: message })
      ]
    }
  );
};
var Loaders_default = Loader;

// src/components/Badge.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var sizeMap = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5"
};
var Badge = ({
  content,
  color = "bg-gray-200",
  variant = "solid",
  size = "md",
  className = "",
  icon
}) => {
  const baseClasses = `inline-flex items-center font-medium rounded-full ${sizeMap[size] || ""} ${className}`;
  const variantClasses = variant === "solid" ? `${color} text-white` : variant === "outline" ? `border ${color} text-${color.split("-")[1]}-700` : `bg-${color.split("-")[1]}-100 text-${color.split("-")[1]}-700`;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: `${baseClasses} ${variantClasses}`, children: [
    icon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "mr-1", children: icon }),
    content
  ] });
};
var Badge_default = Badge;

// src/components/Accordion.tsx
var import_react = require("react");
var import_lucide_react = require("lucide-react");
var import_jsx_runtime3 = require("react/jsx-runtime");
function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
  onToggle,
  className = "border rounded shadow-sm divide-y bg-white",
  icon = /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.ChevronDownIcon, { className: "w-4 h-4" })
}) {
  const initialOpen = Array.isArray(defaultOpen) ? defaultOpen : [defaultOpen];
  const [openIndexes, setOpenIndexes] = (0, import_react.useState)(initialOpen);
  const toggleItem = (index) => {
    let newOpen;
    const isOpen = openIndexes.includes(index);
    if (allowMultiple) {
      newOpen = isOpen ? openIndexes.filter((i) => i !== index) : [...openIndexes, index];
    } else {
      newOpen = isOpen ? [] : [index];
    }
    setOpenIndexes(newOpen);
    onToggle?.(index);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className, children: items.map((item, index) => {
    const isOpen = openIndexes.includes(index);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "p-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "button",
        {
          className: "flex items-center justify-between w-full font-medium",
          onClick: () => toggleItem(index),
          children: [
            item.title,
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `transition-transform ${isOpen ? "rotate-180" : ""}`, children: icon })
          ]
        }
      ),
      isOpen && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "mt-2 text-sm text-gray-700", children: item.content })
    ] }, index);
  }) });
}

// src/components/Alert.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var alertStyles = {
  success: "bg-green-50 text-green-800 border border-green-200",
  error: "bg-red-50 text-red-800 border border-red-200",
  warning: "bg-yellow-50 text-yellow-800 border border-yellow-200",
  info: "bg-blue-50 text-blue-800 border border-blue-200"
};
var Alert = ({
  type,
  title,
  message,
  dismissible = false,
  onClose,
  icon,
  className = ""
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "div",
    {
      className: `p-4 rounded flex items-start space-x-3 ${alertStyles[type]} ${className}`,
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "mt-1", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "font-semibold", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-sm ml-8", children: message })
        ] }),
        dismissible && onClose && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "button",
          {
            onClick: onClose,
            className: "ml-auto text-lg font-bold px-2 hover:opacity-60",
            children: "\xD7"
          }
        )
      ]
    }
  );
};
var Alert_default = Alert;

// src/components/Avatar.tsx
var import_react2 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var sizeMap2 = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16"
};
var Avatar = ({
  src,
  alt,
  name = "",
  size = "md",
  rounded = true,
  className = "",
  fallbackIcon
}) => {
  const [hasError, setHasError] = (0, import_react2.useState)(false);
  const initials = name ? name.split(" ").map((n) => n[0]).join("").toUpperCase() : "";
  const shape = rounded ? "rounded-full" : "rounded-md";
  const sizeClass = typeof size === "string" && ["sm", "md", "lg"].includes(size) ? sizeMap2[size] : size;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    {
      className: `inline-flex items-center justify-center bg-gray-200 text-gray-700 font-semibold ${shape} ${sizeClass} ${className}`,
      children: !hasError && src ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "img",
        {
          src,
          alt,
          className: `object-cover ${shape} ${sizeClass}`,
          onError: () => setHasError(true)
        }
      ) : initials ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: initials }) : fallbackIcon || /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "?" })
    }
  );
};
var Avatar_default = Avatar;

// src/components/Breadcrumb.tsx
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var Breadcrumb = ({
  items,
  separator = /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react2.ChevronRight, { className: "w-4 h-4 mx-1" }),
  // Default separator
  current,
  onClick,
  onPrevious,
  onNext,
  className = "text-sm text-gray-500"
  // Default breadcrumb styling
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("nav", { className: `flex items-center ${className}`, "aria-label": "Breadcrumb", children: [
    onPrevious && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "button",
      {
        onClick: onPrevious,
        className: "mr-2 p-1 hover:text-black",
        "aria-label": "Previous",
        type: "button",
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react2.ChevronLeft, { className: "w-4 h-4" })
      }
    ),
    items.map((item, index) => {
      const isLast = index === items.length - 1;
      const isCurrent = current ? item.label === current : isLast;
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "flex items-center", children: [
        index !== 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "mx-1", children: separator }),
        isCurrent ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "font-medium text-gray-900", children: item.label }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "button",
          {
            onClick: () => onClick?.(item),
            className: "hover:underline focus:outline-none",
            children: item.label
          }
        )
      ] }, index);
    }),
    onNext && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "button",
      {
        onClick: onNext,
        className: "ml-2 p-1 hover:text-black",
        "aria-label": "Next",
        type: "button",
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react2.ChevronRight, { className: "w-4 h-4" })
      }
    )
  ] });
};
var Breadcrumb_default = Breadcrumb;

// src/components/Card.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function Card({ children, className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: `rounded-md border p-4 shadow-sm bg-white ${className}`, children });
}
function CardHeader({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "mb-2 font-semibold text-lg", children });
}
function CardTitle({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { children });
}
function CardContent({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-sm text-gray-700", children });
}
function CardFooter({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "mt-4 text-xs text-gray-500", children });
}
function InfoCard({
  title = "Product Overview",
  content = "This is a brief summary of the product.",
  image = "https://example.com/image.jpg",
  actions = /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { className: "text-blue-600 font-medium", children: "Learn More" }),
  className = "rounded-lg shadow-md p-4 bg-white",
  footer = /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: "Updated today" })
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Card, { className, children: [
    image && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: image, alt: title, className: "rounded mb-3 w-full object-cover" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CardTitle, { children: title }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CardContent, { children: content }),
    actions && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "mt-4", children: actions }),
    footer && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CardFooter, { children: footer })
  ] });
}

// src/components/Carousel.tsx
var import_react3 = require("react");
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime8 = require("react/jsx-runtime");
function ImageCarousel({
  items = [],
  autoPlay = true,
  interval = 3e3,
  showArrows = true,
  showIndicators = true,
  loop = true,
  onSlideChange,
  className = "w-full max-w-3xl overflow-hidden rounded-lg shadow"
}) {
  const [currentIndex, setCurrentIndex] = (0, import_react3.useState)(0);
  const nextSlide = () => {
    const isLast = currentIndex === items.length - 1;
    const newIndex = isLast ? loop ? 0 : currentIndex : currentIndex + 1;
    setCurrentIndex(newIndex);
    onSlideChange?.(newIndex);
  };
  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? loop ? items.length - 1 : 0 : currentIndex - 1;
    setCurrentIndex(newIndex);
    onSlideChange?.(newIndex);
  };
  (0, import_react3.useEffect)(() => {
    if (autoPlay) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [currentIndex, autoPlay, interval]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "relative w-full h-64 flex items-center justify-center", children: [
      showArrows && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "button",
        {
          onClick: prevSlide,
          className: "absolute left-4 z-10 bg-white p-1 rounded-full shadow",
          children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react3.ChevronLeft, {})
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "img",
        {
          src: items[currentIndex],
          alt: `Slide ${currentIndex}`,
          className: "w-full h-full object-cover rounded-lg"
        }
      ),
      showArrows && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "button",
        {
          onClick: nextSlide,
          className: "absolute right-4 z-10 bg-white p-1 rounded-full shadow",
          children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react3.ChevronRight, {})
        }
      )
    ] }),
    showIndicators && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "flex justify-center mt-2 space-x-2", children: items.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "span",
      {
        className: `h-2 w-2 rounded-full ${idx === currentIndex ? "bg-blue-600" : "bg-gray-300"}`
      },
      idx
    )) })
  ] });
}

// src/components/Chart.tsx
var import_recharts = require("recharts");
var import_jsx_runtime9 = require("react/jsx-runtime");
var COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];
var Chart = ({
  type = "line",
  data,
  options = {
    responsive: true,
    plugins: { legend: { position: "top" } }
  },
  width = 400,
  height = 300,
  className = "w-full h-auto p-4 bg-white rounded shadow"
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("h2", { className: "text-lg font-semibold mb-2 capitalize", children: [
      type,
      " Chart"
    ] }),
    type === "line" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_recharts.ResponsiveContainer, { width: "100%", height, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_recharts.LineChart, { data, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_recharts.CartesianGrid, { stroke: "#eee" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_recharts.XAxis, { dataKey: "name" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_recharts.YAxis, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_recharts.Tooltip, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_recharts.Legend, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_recharts.Line, { type: "monotone", dataKey: "value", stroke: "#3b82f6" })
    ] }) }),
    type === "bar" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_recharts.ResponsiveContainer, { width: "100%", height, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_recharts.BarChart, { data, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_recharts.CartesianGrid, { stroke: "#eee" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_recharts.XAxis, { dataKey: "name" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_recharts.YAxis, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_recharts.Tooltip, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_recharts.Legend, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_recharts.Bar, { dataKey: "value", fill: "#3b82f6" })
    ] }) }),
    type === "pie" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_recharts.ResponsiveContainer, { width: "100%", height, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_recharts.PieChart, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_recharts.Tooltip, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_recharts.Legend, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        import_recharts.Pie,
        {
          data,
          dataKey: "value",
          nameKey: "name",
          cx: "50%",
          cy: "50%",
          outerRadius: 80,
          label: true,
          children: data.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            import_recharts.Cell,
            {
              fill: COLORS[index % COLORS.length]
            },
            `cell-${index}`
          ))
        }
      )
    ] }) })
  ] });
};
var Chart_default = Chart;

// src/components/Checkbox.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var Checkbox = ({
  label,
  required = false,
  disabled = false,
  checked,
  onChange,
  name,
  error
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "mb-4 flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "input",
        {
          type: "checkbox",
          id: name,
          checked,
          onChange: (e) => onChange({ target: { name, value: e.target.checked } }),
          disabled,
          className: `h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("label", { htmlFor: name, className: "ml-2 block text-sm text-gray-900", children: [
        label,
        " ",
        required && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "text-red-500", children: "*" })
      ] })
    ] }),
    error && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-red-500 text-sm mt-1", children: error })
  ] });
};
var Checkbox_default = Checkbox;

// src/components/DatePicker.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var DatePicker = ({
  label,
  name,
  required = false,
  disabled = false,
  type = "date",
  minDate,
  maxDate,
  value,
  onChange,
  error
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "mb-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("label", { className: "block text-sm font-medium mb-1", children: [
      label,
      " ",
      required && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-red-500", children: "*" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "input",
      {
        type,
        name,
        min: minDate?.toString(),
        max: maxDate?.toString(),
        value: value.toString(),
        onChange,
        disabled,
        className: `w-full px-3 py-2 border rounded-md ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`
      }
    ),
    error && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-red-500 text-sm mt-1", children: error })
  ] });
};
var DatePicker_default = DatePicker;

// src/components/DropdownMenu.tsx
var import_react4 = require("react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var positionClassMap = {
  "bottom-left": "top-full left-0",
  "bottom-right": "top-full right-0",
  "top-left": "bottom-full left-0",
  "top-right": "bottom-full right-0"
};
var DropdownMenu = ({
  items,
  trigger,
  position = "bottom-left",
  open,
  onToggle,
  className = "",
  disabled = false
}) => {
  const menuRef = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onToggle(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onToggle]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "relative inline-block", ref: menuRef, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { onClick: () => !disabled && onToggle(!open), children: trigger }),
    open && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "div",
      {
        className: `absolute ${positionClassMap[position]} mt-2 ${className}`,
        children: items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "button",
          {
            className: "block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm",
            onClick: () => {
              item.onClick();
              onToggle(false);
            },
            children: item.label
          },
          idx
        ))
      }
    )
  ] });
};
var DropdownMenu_default = DropdownMenu;

// src/components/FileUpload.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var FileUpload = ({
  required = false,
  label,
  accept,
  multiple = false,
  disabled = false,
  onChange,
  name = "file",
  fileSize
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex flex-col p-10 rounded-lg space-y-2 bg-[rgb(37,54,84)]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { className: "font-semibold text-white", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "input",
      {
        type: "file",
        name,
        accept,
        multiple,
        required,
        disabled,
        onChange: (e) => onChange(e.target.files),
        className: "block w-full text-sm text-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none file:bg-blue-500 file:text-white file:rounded-md file:px-4 file:py-2 file:border-none file:cursor-pointer"
      }
    ),
    fileSize && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("p", { className: "text-xs text-white", children: [
      "Maximum file size: ",
      fileSize
    ] })
  ] });
};
var FileUpload_default = FileUpload;

// src/components/Modal.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var Modal = ({
  isOpen,
  onClose,
  title,
  content,
  showFooter = true,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  confirmButtonClassName = "bg-red-600 text-white hover:bg-red-700",
  cancelButtonClassName = "text-white border border-gray-300 hover:bg-gray-100 hover:text-black"
}) => {
  if (!isOpen) return null;
  const handleCancel = () => {
    if (onCancel) onCancel();
    else onClose();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "div",
    {
      className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center",
      onClick: handleCancel,
      "data-testid": "modal-backdrop",
      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
        "div",
        {
          className: "bg-[rgb(37,54,84)] rounded-md shadow-lg max-w-lg w-full relative z-50",
          onClick: (e) => e.stopPropagation(),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "modal-title",
          children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "px-6 py-4 flex justify-between items-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-white font-semibold", id: "modal-title", children: title }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                "button",
                {
                  onClick: onClose,
                  "aria-label": "Close modal",
                  className: "text-white hover:text-gray-900",
                  children: "\u2715"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "p-6 text-white", children: content }),
            showFooter && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "px-6 py-4 flex justify-end gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                "button",
                {
                  onClick: handleCancel,
                  className: `px-4 py-2 rounded ${cancelButtonClassName} cursor-pointer`,
                  children: cancelText
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                "button",
                {
                  onClick: onConfirm,
                  className: `px-4 py-2 rounded ${confirmButtonClassName} cursor-pointer`,
                  children: confirmText
                }
              )
            ] })
          ]
        }
      )
    }
  );
};
var Modal_default = Modal;

// src/components/NotificationToaster.tsx
var import_react5 = require("react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var typeStyles = {
  success: "bg-green-100 text-green-800",
  error: "bg-red-100 text-red-800",
  warning: "bg-yellow-100 text-yellow-800",
  info: "bg-blue-100 text-blue-800"
};
var NotificationToaster = ({
  message,
  type,
  duration = 3e3,
  position = "top-right",
  isVisible,
  onClose,
  icon,
  className = ""
}) => {
  (0, import_react5.useEffect)(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);
  if (!isVisible) return null;
  const positionClass = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4"
  }[position] || "top-4 right-4";
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "div",
    {
      className: `fixed z-50 ${positionClass} px-4 py-2 rounded shadow transition-opacity duration-300 ${typeStyles[type]} ${className}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex items-center space-x-2", children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: message })
      ] })
    }
  );
};
var NotificationToaster_default = NotificationToaster;

// src/components/Pagination.tsx
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime16 = require("react/jsx-runtime");
var Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  onPageChange,
  showControls = true,
  // default to showing controls
  className = "flex items-center gap-2 justify-end text-sm text-gray-600"
  // default styling
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: `${currentPage}-${currentPage} of ${totalItems}` }),
    showControls && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        "button",
        {
          onClick: () => {
            if (currentPage > 1) onPageChange(currentPage - 1);
          },
          disabled: currentPage === 1,
          className: "p-1 disabled:opacity-50",
          children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react4.ChevronLeft, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        "button",
        {
          onClick: () => {
            if (currentPage < totalPages) onPageChange(currentPage + 1);
          },
          disabled: currentPage === totalPages,
          className: "p-1 disabled:opacity-50",
          children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react4.ChevronRight, { className: "w-4 h-4" })
        }
      )
    ] })
  ] });
};
var Pagination_default = Pagination;

// src/components/PhoneInput.tsx
var import_react_phone_input_2 = __toESM(require("react-phone-input-2"), 1);
var import_style = require("react-phone-input-2/lib/style.css");
var import_jsx_runtime17 = require("react/jsx-runtime");
var PhoneInput = ({
  label,
  name,
  required,
  disabled,
  value,
  onChange,
  error
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "mb-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("label", { className: "block text-sm font-medium mb-1", children: [
      label,
      " ",
      required && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "text-red-500", children: "*" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      import_react_phone_input_2.default,
      {
        country: "us",
        value,
        onChange: (phone) => onChange({ target: { name, value: phone } }),
        disabled,
        inputClass: `!pl-14 !pr-3 !py-2 !h-[40px] !rounded-md !border ${error ? "!border-red-500" : "!border-gray-300"} !w-full !focus:outline-none`,
        containerClass: `!w-full ${disabled ? "opacity-75 cursor-not-allowed" : ""}`
      }
    ),
    error && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-red-500 text-sm mt-1", children: error })
  ] });
};
var PhoneInput_default = PhoneInput;

// src/components/ProgressBar.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function Progress({
  value,
  label = "",
  showLabel = true,
  color = "blue",
  animated = true,
  max = 100
}) {
  const widthPercent = Math.min(value / max * 100, 100);
  const colorClass = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    green: "bg-green-500",
    yellow: "bg-yellow-400",
    gray: "bg-gray-500"
  }[color.toLowerCase()] || "bg-blue-500";
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "relative w-full rounded bg-gray-200 h-6 overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      "div",
      {
        className: `${colorClass} h-full transition-all duration-500 ease-in-out ${animated ? "animate-progress" : ""}`,
        style: { width: `${widthPercent}%` }
      }
    ),
    showLabel && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "absolute inset-0 flex items-center justify-center text-sm font-medium text-white select-none", children: label || `${Math.round(widthPercent)}%` })
  ] });
}
function ProgressBar() {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "w-full max-w-sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { className: "text-lg font-semibold mb-2", children: "Progress" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      Progress,
      {
        value: 70,
        label: "Uploading...",
        showLabel: true,
        color: "red",
        animated: true,
        max: 100
      }
    )
  ] });
}

// src/components/RadioButton.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
var RadioButton = ({
  label,
  required = false,
  disabled = false,
  options,
  value,
  onChange,
  name,
  error
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "mb-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("label", { className: "block text-sm font-medium mb-1", children: [
      label,
      " ",
      required && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "text-red-500", children: "*" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "space-y-2", children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "input",
        {
          type: "radio",
          id: option,
          name,
          value: option,
          checked: value === option,
          onChange: (e) => onChange({ target: { name, value: e.target.value } }),
          disabled,
          className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("label", { htmlFor: option, className: "ml-2 text-sm text-gray-900", children: option })
    ] }, option)) }),
    error && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-red-500 text-sm mt-1", children: error })
  ] });
};
var RadioButton_default = RadioButton;

// src/components/ReactDatePicker.tsx
var import_react_datepicker = __toESM(require("react-datepicker"), 1);
var import_react_datepicker2 = require("react-datepicker/dist/react-datepicker.css");
var import_jsx_runtime20 = require("react/jsx-runtime");
var DatePickerReact = ({
  label,
  required = false,
  disabled = false,
  minDate,
  maxDate,
  value,
  onChange,
  error,
  name
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "mb-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("label", { className: "block text-sm font-medium mb-1", children: [
      label,
      " ",
      required && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "text-red-500", children: "*" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "relative w-full", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      import_react_datepicker.default,
      {
        selected: value,
        onChange: (date) => onChange({ target: { name: name ?? "", value: date } }),
        minDate: minDate ? new Date(minDate) : void 0,
        maxDate: maxDate ? new Date(maxDate) : void 0,
        disabled,
        placeholderText: "Select date",
        dateFormat: "yyyy-MM-dd",
        wrapperClassName: "w-full",
        className: `w-full px-3 py-2 border rounded-md ${error ? "border-red-500" : "border-gray-300"} ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`
      }
    ) }),
    error && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-red-500 text-sm mt-1", children: error })
  ] });
};
var ReactDatePicker_default = DatePickerReact;

// src/components/Select.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
var Select = ({
  required = false,
  label,
  disabled = false,
  options,
  value,
  onChange,
  name,
  placeholder = "Select an option",
  error
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_jsx_runtime21.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "mb-4", children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("label", { className: "block text-sm  mb-1", children: [
      label,
      " ",
      required && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "text-red-500", children: "*" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
      "select",
      {
        name,
        id: name,
        required,
        disabled,
        value,
        onChange: (e) => onChange(e),
        className: `w-full px-3 py-2 border rounded-md ${error ? "border-red-500" : "border-gray-300"}  ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("option", { value: "", disabled: true, children: placeholder }),
          options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("option", { value: opt, className: "text-black", children: opt }, opt))
        ]
      }
    ) })
  ] }) });
};
var Select_default = Select;

// src/components/TextInput.tsx
var import_react6 = require("react");
var import_lucide_react5 = require("lucide-react");
var import_jsx_runtime22 = require("react/jsx-runtime");
var TextInput = ({
  label,
  required = false,
  disabled = false,
  type = "text",
  value,
  onChange,
  name,
  minimum_length,
  maximum_length,
  regex,
  searchIcon,
  error
}) => {
  const [showPassword, setShowPassword] = (0, import_react6.useState)(false);
  const handleToggle = () => setShowPassword(!showPassword);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "mb-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("label", { className: "block text-sm  mb-1", children: [
      label,
      " ",
      required && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "text-red-500", children: "*" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        "input",
        {
          name,
          type: type === "password" ? showPassword ? "text" : "password" : type,
          value,
          onChange,
          disabled,
          minLength: minimum_length,
          maxLength: maximum_length,
          pattern: regex,
          className: `w-full px-3 py-2 border rounded-md ${error ? "border-red-500" : "border-gray-300"}  ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`
        }
      ),
      error && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "text-red-500 text-sm mt-1", children: error }),
      type === "password" && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        "button",
        {
          type: "button",
          onClick: handleToggle,
          className: "absolute right-3 top-3",
          children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react5.EyeOff, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react5.Eye, { size: 18 })
        }
      ),
      type === "search" && searchIcon && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react5.Search, { className: "absolute right-3 top-3 text-gray-400", size: 18 })
    ] })
  ] });
};
var TextInput_default = TextInput;

// src/components/ToggleSwitch.tsx
var import_lucide_react6 = require("lucide-react");
var import_jsx_runtime23 = require("react/jsx-runtime");
var ToggleSwitch = ({
  checked,
  onChange,
  disabled = false,
  required = false,
  name = ""
}) => {
  const handleClick = () => {
    if (!disabled) {
      const newValue = !checked;
      onChange(newValue);
      console.log("Notification toggled:", newValue);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "button",
    {
      type: "button",
      onClick: handleClick,
      disabled,
      "aria-pressed": checked,
      "aria-required": required,
      name,
      className: "focus:outline-none",
      children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        "div",
        {
          className: `p-1 rounded-full transition-colors duration-300
            ${checked ? "bg-green-500 text-white" : "bg-transparent text-gray-500 border border-gray-400"}
            ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`,
          children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_lucide_react6.Bell, { className: "w-6 h-6" })
        }
      )
    }
  ) });
};
var ToggleSwitch_default = ToggleSwitch;

// src/components/Tooltip.tsx
var import_react7 = require("react");
var import_jsx_runtime24 = require("react/jsx-runtime");
var Tooltip2 = ({
  content,
  placement = "top",
  trigger = "hover",
  disabled = false,
  showControls = true,
  delay = 200,
  className = "text-xs bg-gray-700 text-white px-2 py-1 rounded",
  children
}) => {
  const [visible, setVisible] = (0, import_react7.useState)(false);
  const timeoutRef = (0, import_react7.useRef)(null);
  const showTooltip = () => {
    if (disabled || !showControls) return;
    timeoutRef.current = window.setTimeout(() => setVisible(true), delay);
  };
  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(false);
  };
  const toggleTooltip = () => {
    if (disabled || !showControls) return;
    setVisible((prev) => {
      console.log(prev ? "Tooltip hidden" : "Tooltip shown");
      return !prev;
    });
  };
  const triggerProps = trigger === "hover" ? { onMouseEnter: showTooltip, onMouseLeave: hideTooltip } : trigger === "click" ? { onClick: toggleTooltip } : { onFocus: showTooltip, onBlur: hideTooltip };
  const getPosition = () => {
    switch (placement) {
      case "bottom":
        return "top-full mt-2 left-1/2 -translate-x-1/2";
      case "left":
        return "right-full mr-2 top-1/2 -translate-y-1/2";
      case "right":
        return "left-full ml-2 top-1/2 -translate-y-1/2";
      case "top":
      default:
        return "bottom-full mb-2 left-1/2 -translate-x-1/2";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "relative inline-block", ...triggerProps, children: [
    children,
    " ",
    visible && /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
      "div",
      {
        className: `absolute z-10 ${getPosition()} ${className} transition-opacity duration-300`,
        children: [
          content,
          " "
        ]
      }
    )
  ] });
};
var Tooltip_default = Tooltip2;

// src/components/TextArea.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
var TextArea = ({
  required,
  minimum_length,
  maximum_length,
  regex,
  label,
  disabled = false,
  value,
  onChange,
  name,
  rows = 5,
  placeholder = "Enter your text...",
  error
}) => {
  return (
    // <div className="flex flex-col items-start gap-2 bg-[rgb(37,54,84)] p-4 rounded-md text-white">
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("label", { className: "block text-sm  mb-1", children: [
        label,
        " ",
        required && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "text-red-500", children: "*" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        "textarea",
        {
          name,
          id: name,
          required,
          disabled,
          value,
          onChange,
          rows,
          placeholder,
          minLength: minimum_length,
          maxLength: maximum_length,
          className: `w-full px-3 py-2 border rounded-md ${error ? "border-red-500" : "border-gray-300"}  ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`
        }
      ),
      error && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text-red-500 text-sm mt-1", children: error })
    ] })
  );
};
var TextArea_default = TextArea;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Bredcrumb,
  Card,
  Carousel,
  Chart,
  Checkbox,
  DatePicker,
  DropdownMenu,
  FileUpload,
  Loaders,
  Modal,
  NotificationToaster,
  Pagination,
  PhoneInput,
  ProgressBar,
  RadioButton,
  ReactDatePicker,
  Select,
  TextArea,
  TextInput,
  ToggleSwitch,
  Tooltip
});
