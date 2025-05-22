// src/components/Loaders.tsx
import { ClipLoader, DotLoader } from "react-spinners";
import { jsx, jsxs } from "react/jsx-runtime";
var Loader = ({
  isLoading = false,
  size = 40,
  color = "#000000",
  type = "spinner",
  message = "Loading, please wait...",
  fullscreen = false
}) => {
  if (!isLoading) return null;
  return (
    // Loader container can be fullscreen or inline 
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex flex-col items-center justify-center ${fullscreen ? "fixed inset-0 h-screen w-screen z-50" : ""}`,
        children: [
          type === "spinner" ? /* @__PURE__ */ jsx(ClipLoader, { color, size }) : /* @__PURE__ */ jsx(DotLoader, { color, size }),
          message && /* @__PURE__ */ jsx("p", { className: "text-black mt-2", children: message })
        ]
      }
    )
  );
};
var Loaders_default = Loader;

// src/components/Badge.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs2("span", { className: `${baseClasses} ${variantClasses}`, children: [
    icon && /* @__PURE__ */ jsx2("span", { className: "mr-1", children: icon }),
    content
  ] });
};
var Badge_default = Badge;

// src/components/Accordion.tsx
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
  onToggle,
  className = "border rounded shadow-sm divide-y bg-white",
  icon = /* @__PURE__ */ jsx3(ChevronDownIcon, { className: "w-4 h-4" })
}) {
  const initialOpen = Array.isArray(defaultOpen) ? defaultOpen : [defaultOpen];
  const [openIndexes, setOpenIndexes] = useState(initialOpen);
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
  return /* @__PURE__ */ jsx3("div", { className, children: items.map((item, index) => {
    const isOpen = openIndexes.includes(index);
    return /* @__PURE__ */ jsxs3("div", { className: "p-2", children: [
      /* @__PURE__ */ jsxs3(
        "button",
        {
          className: "flex items-center justify-between w-full font-medium",
          onClick: () => toggleItem(index),
          children: [
            item.title,
            /* @__PURE__ */ jsx3("span", { className: `transition-transform ${isOpen ? "rotate-180" : ""}`, children: icon })
          ]
        }
      ),
      isOpen && /* @__PURE__ */ jsx3("div", { className: "mt-2 text-sm text-gray-700", children: item.content })
    ] }, index);
  }) });
}

// src/components/Alert.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs4(
    "div",
    {
      className: `p-4 rounded flex items-start space-x-3 ${alertStyles[type]} ${className}`,
      children: [
        icon && /* @__PURE__ */ jsx4("div", { className: "mt-1", children: icon }),
        /* @__PURE__ */ jsxs4("div", { children: [
          /* @__PURE__ */ jsx4("p", { className: "font-semibold", children: title }),
          /* @__PURE__ */ jsx4("p", { className: "text-sm ml-8", children: message })
        ] }),
        dismissible && onClose && /* @__PURE__ */ jsx4(
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
import { useState as useState2 } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
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
  const [hasError, setHasError] = useState2(false);
  const initials = name ? name.split(" ").map((n) => n[0]).join("").toUpperCase() : "";
  const shape = rounded ? "rounded-full" : "rounded-md";
  const sizeClass = typeof size === "string" && ["sm", "md", "lg"].includes(size) ? sizeMap2[size] : size;
  return /* @__PURE__ */ jsx5(
    "div",
    {
      className: `inline-flex items-center justify-center bg-gray-200 text-gray-700 font-semibold ${shape} ${sizeClass} ${className}`,
      children: !hasError && src ? /* @__PURE__ */ jsx5(
        "img",
        {
          src,
          alt,
          className: `object-cover ${shape} ${sizeClass}`,
          onError: () => setHasError(true)
        }
      ) : initials ? /* @__PURE__ */ jsx5("span", { children: initials }) : fallbackIcon || /* @__PURE__ */ jsx5("span", { children: "?" })
    }
  );
};
var Avatar_default = Avatar;

// src/components/Breadcrumb.tsx
import { ChevronRight, ChevronLeft } from "lucide-react";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var Breadcrumb = ({
  items,
  separator = /* @__PURE__ */ jsx6(ChevronRight, { className: "w-4 h-4 mx-1" }),
  // Default separator
  current,
  onClick,
  onPrevious,
  onNext,
  className = "text-sm text-gray-500"
  // Default breadcrumb styling
}) => {
  return /* @__PURE__ */ jsxs5("nav", { className: `flex items-center ${className}`, "aria-label": "Breadcrumb", children: [
    onPrevious && /* @__PURE__ */ jsx6(
      "button",
      {
        onClick: onPrevious,
        className: "mr-2 p-1 hover:text-black",
        "aria-label": "Previous",
        type: "button",
        children: /* @__PURE__ */ jsx6(ChevronLeft, { className: "w-4 h-4" })
      }
    ),
    items.map((item, index) => {
      const isLast = index === items.length - 1;
      const isCurrent = current ? item.label === current : isLast;
      return /* @__PURE__ */ jsxs5("span", { className: "flex items-center", children: [
        index !== 0 && /* @__PURE__ */ jsx6("span", { className: "mx-1", children: separator }),
        isCurrent ? /* @__PURE__ */ jsx6("span", { className: "font-medium text-gray-900", children: item.label }) : /* @__PURE__ */ jsx6(
          "button",
          {
            onClick: () => onClick?.(item),
            className: "hover:underline focus:outline-none",
            children: item.label
          }
        )
      ] }, index);
    }),
    onNext && /* @__PURE__ */ jsx6(
      "button",
      {
        onClick: onNext,
        className: "ml-2 p-1 hover:text-black",
        "aria-label": "Next",
        type: "button",
        children: /* @__PURE__ */ jsx6(ChevronRight, { className: "w-4 h-4" })
      }
    )
  ] });
};
var Breadcrumb_default = Breadcrumb;

// src/components/Card.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
function Card({ children, className = "" }) {
  return /* @__PURE__ */ jsx7("div", { className: `rounded-md border p-4 shadow-sm bg-white ${className}`, children });
}
function CardHeader({ children }) {
  return /* @__PURE__ */ jsx7("div", { className: "mb-2 font-semibold text-lg", children });
}
function CardTitle({ children }) {
  return /* @__PURE__ */ jsx7("h3", { children });
}
function CardContent({ children }) {
  return /* @__PURE__ */ jsx7("div", { className: "text-sm text-gray-700", children });
}
function CardFooter({ children }) {
  return /* @__PURE__ */ jsx7("div", { className: "mt-4 text-xs text-gray-500", children });
}
function InfoCard({
  title = "Product Overview",
  content = "This is a brief summary of the product.",
  image = "https://example.com/image.jpg",
  actions = /* @__PURE__ */ jsx7("button", { className: "text-blue-600 font-medium", children: "Learn More" }),
  className = "rounded-lg shadow-md p-4 bg-white",
  footer = /* @__PURE__ */ jsx7("div", { children: "Updated today" })
}) {
  return /* @__PURE__ */ jsxs6(Card, { className, children: [
    image && /* @__PURE__ */ jsx7("img", { src: image, alt: title, className: "rounded mb-3 w-full object-cover" }),
    /* @__PURE__ */ jsx7(CardHeader, { children: /* @__PURE__ */ jsx7(CardTitle, { children: title }) }),
    /* @__PURE__ */ jsx7(CardContent, { children: content }),
    actions && /* @__PURE__ */ jsx7("div", { className: "mt-4", children: actions }),
    footer && /* @__PURE__ */ jsx7(CardFooter, { children: footer })
  ] });
}

// src/components/Carousel.tsx
import { useState as useState3, useEffect } from "react";
import { ChevronLeft as ChevronLeft2, ChevronRight as ChevronRight2 } from "lucide-react";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
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
  const [currentIndex, setCurrentIndex] = useState3(0);
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
  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [currentIndex, autoPlay, interval]);
  return /* @__PURE__ */ jsxs7("div", { className, children: [
    /* @__PURE__ */ jsxs7("div", { className: "relative w-full h-64 flex items-center justify-center", children: [
      showArrows && /* @__PURE__ */ jsx8(
        "button",
        {
          onClick: prevSlide,
          className: "absolute left-4 z-10 bg-white p-1 rounded-full shadow",
          children: /* @__PURE__ */ jsx8(ChevronLeft2, {})
        }
      ),
      /* @__PURE__ */ jsx8(
        "img",
        {
          src: items[currentIndex],
          alt: `Slide ${currentIndex}`,
          className: "w-full h-full object-cover rounded-lg"
        }
      ),
      showArrows && /* @__PURE__ */ jsx8(
        "button",
        {
          onClick: nextSlide,
          className: "absolute right-4 z-10 bg-white p-1 rounded-full shadow",
          children: /* @__PURE__ */ jsx8(ChevronRight2, {})
        }
      )
    ] }),
    showIndicators && /* @__PURE__ */ jsx8("div", { className: "flex justify-center mt-2 space-x-2", children: items.map((_, idx) => /* @__PURE__ */ jsx8(
      "span",
      {
        className: `h-2 w-2 rounded-full ${idx === currentIndex ? "bg-blue-600" : "bg-gray-300"}`
      },
      idx
    )) })
  ] });
}

// src/components/Chart.tsx
import {
  LineChart,
  BarChart,
  PieChart,
  Pie,
  Cell,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs8("div", { className, children: [
    /* @__PURE__ */ jsxs8("h2", { className: "text-lg font-semibold mb-2 capitalize", children: [
      type,
      " Chart"
    ] }),
    type === "line" && /* @__PURE__ */ jsx9(ResponsiveContainer, { width: "100%", height, children: /* @__PURE__ */ jsxs8(LineChart, { data, children: [
      /* @__PURE__ */ jsx9(CartesianGrid, { stroke: "#eee" }),
      /* @__PURE__ */ jsx9(XAxis, { dataKey: "name" }),
      /* @__PURE__ */ jsx9(YAxis, {}),
      /* @__PURE__ */ jsx9(Tooltip, {}),
      /* @__PURE__ */ jsx9(Legend, {}),
      /* @__PURE__ */ jsx9(Line, { type: "monotone", dataKey: "value", stroke: "#3b82f6" })
    ] }) }),
    type === "bar" && /* @__PURE__ */ jsx9(ResponsiveContainer, { width: "100%", height, children: /* @__PURE__ */ jsxs8(BarChart, { data, children: [
      /* @__PURE__ */ jsx9(CartesianGrid, { stroke: "#eee" }),
      /* @__PURE__ */ jsx9(XAxis, { dataKey: "name" }),
      /* @__PURE__ */ jsx9(YAxis, {}),
      /* @__PURE__ */ jsx9(Tooltip, {}),
      /* @__PURE__ */ jsx9(Legend, {}),
      /* @__PURE__ */ jsx9(Bar, { dataKey: "value", fill: "#3b82f6" })
    ] }) }),
    type === "pie" && /* @__PURE__ */ jsx9(ResponsiveContainer, { width: "100%", height, children: /* @__PURE__ */ jsxs8(PieChart, { children: [
      /* @__PURE__ */ jsx9(Tooltip, {}),
      /* @__PURE__ */ jsx9(Legend, {}),
      /* @__PURE__ */ jsx9(
        Pie,
        {
          data,
          dataKey: "value",
          nameKey: "name",
          cx: "50%",
          cy: "50%",
          outerRadius: 80,
          label: true,
          children: data.map((_, index) => /* @__PURE__ */ jsx9(
            Cell,
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
import { Fragment, jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
var Checkbox = ({
  label,
  required = false,
  disabled = false,
  checked,
  onChange,
  name,
  error
}) => {
  return /* @__PURE__ */ jsxs9(Fragment, { children: [
    /* @__PURE__ */ jsxs9("div", { className: "mb-4 flex items-center", children: [
      /* @__PURE__ */ jsx10(
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
      /* @__PURE__ */ jsxs9("label", { htmlFor: name, className: "ml-2 block text-sm text-gray-900", children: [
        label,
        " ",
        required && /* @__PURE__ */ jsx10("span", { className: "text-red-500", children: "*" })
      ] })
    ] }),
    error && /* @__PURE__ */ jsx10("p", { className: "text-red-500 text-sm mt-1", children: error })
  ] });
};
var Checkbox_default = Checkbox;

// src/components/DatePicker.tsx
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs10("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsxs10("label", { className: "block text-sm font-medium mb-1", children: [
      label,
      " ",
      required && /* @__PURE__ */ jsx11("span", { className: "text-red-500", children: "*" })
    ] }),
    /* @__PURE__ */ jsx11(
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
    error && /* @__PURE__ */ jsx11("p", { className: "text-red-500 text-sm mt-1", children: error })
  ] });
};
var DatePicker_default = DatePicker;

// src/components/DropdownMenu.tsx
import { useRef, useEffect as useEffect2 } from "react";
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
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
  const menuRef = useRef(null);
  useEffect2(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onToggle(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onToggle]);
  return /* @__PURE__ */ jsxs11("div", { className: "relative inline-block", ref: menuRef, children: [
    /* @__PURE__ */ jsx12("div", { onClick: () => !disabled && onToggle(!open), children: trigger }),
    open && /* @__PURE__ */ jsx12(
      "div",
      {
        className: `absolute ${positionClassMap[position]} mt-2 ${className}`,
        children: items.map((item, idx) => /* @__PURE__ */ jsx12(
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
import { jsx as jsx13, jsxs as jsxs12 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs12("div", { className: "flex flex-col p-10 rounded-lg space-y-2 bg-[rgb(37,54,84)]", children: [
    /* @__PURE__ */ jsx13("label", { className: "font-semibold text-white", children: label }),
    /* @__PURE__ */ jsx13(
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
    fileSize && /* @__PURE__ */ jsxs12("p", { className: "text-xs text-white", children: [
      "Maximum file size: ",
      fileSize
    ] })
  ] });
};
var FileUpload_default = FileUpload;

// src/components/Modal.tsx
import { jsx as jsx14, jsxs as jsxs13 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx14(
    "div",
    {
      className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center",
      onClick: handleCancel,
      "data-testid": "modal-backdrop",
      children: /* @__PURE__ */ jsxs13(
        "div",
        {
          className: "bg-[rgb(37,54,84)] rounded-md shadow-lg max-w-lg w-full relative z-50",
          onClick: (e) => e.stopPropagation(),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "modal-title",
          children: [
            title && /* @__PURE__ */ jsxs13("div", { className: "px-6 py-4 flex justify-between items-center", children: [
              /* @__PURE__ */ jsx14("h2", { className: "text-white font-semibold", id: "modal-title", children: title }),
              /* @__PURE__ */ jsx14(
                "button",
                {
                  onClick: onClose,
                  "aria-label": "Close modal",
                  className: "text-white hover:text-gray-900",
                  children: "\u2715"
                }
              )
            ] }),
            /* @__PURE__ */ jsx14("div", { className: "p-6 text-white", children: content }),
            showFooter && /* @__PURE__ */ jsxs13("div", { className: "px-6 py-4 flex justify-end gap-3", children: [
              /* @__PURE__ */ jsx14(
                "button",
                {
                  onClick: handleCancel,
                  className: `px-4 py-2 rounded ${cancelButtonClassName} cursor-pointer`,
                  children: cancelText
                }
              ),
              /* @__PURE__ */ jsx14(
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
import { useEffect as useEffect3 } from "react";
import { jsx as jsx15, jsxs as jsxs14 } from "react/jsx-runtime";
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
  useEffect3(() => {
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
  return /* @__PURE__ */ jsx15(
    "div",
    {
      className: `fixed z-50 ${positionClass} px-4 py-2 rounded shadow transition-opacity duration-300 ${typeStyles[type]} ${className}`,
      children: /* @__PURE__ */ jsxs14("div", { className: "flex items-center space-x-2", children: [
        icon && /* @__PURE__ */ jsx15("span", { children: icon }),
        /* @__PURE__ */ jsx15("span", { children: message })
      ] })
    }
  );
};
var NotificationToaster_default = NotificationToaster;

// src/components/Pagination.tsx
import { ChevronLeft as ChevronLeft3, ChevronRight as ChevronRight3 } from "lucide-react";
import { Fragment as Fragment2, jsx as jsx16, jsxs as jsxs15 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs15("div", { className, children: [
    /* @__PURE__ */ jsx16("span", { children: `${currentPage}-${currentPage} of ${totalItems}` }),
    showControls && /* @__PURE__ */ jsxs15(Fragment2, { children: [
      /* @__PURE__ */ jsx16(
        "button",
        {
          onClick: () => {
            if (currentPage > 1) onPageChange(currentPage - 1);
          },
          disabled: currentPage === 1,
          className: "p-1 disabled:opacity-50",
          children: /* @__PURE__ */ jsx16(ChevronLeft3, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ jsx16(
        "button",
        {
          onClick: () => {
            if (currentPage < totalPages) onPageChange(currentPage + 1);
          },
          disabled: currentPage === totalPages,
          className: "p-1 disabled:opacity-50",
          children: /* @__PURE__ */ jsx16(ChevronRight3, { className: "w-4 h-4" })
        }
      )
    ] })
  ] });
};
var Pagination_default = Pagination;

// src/components/PhoneInput.tsx
import PhoneInputLib from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { jsx as jsx17, jsxs as jsxs16 } from "react/jsx-runtime";
var PhoneInput = ({
  label,
  name,
  required,
  disabled,
  value,
  onChange,
  error
}) => {
  return /* @__PURE__ */ jsxs16("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsxs16("label", { className: "block text-sm font-medium mb-1", children: [
      label,
      " ",
      required && /* @__PURE__ */ jsx17("span", { className: "text-red-500", children: "*" })
    ] }),
    /* @__PURE__ */ jsx17(
      PhoneInputLib,
      {
        country: "us",
        value,
        onChange: (phone) => onChange({ target: { name, value: phone } }),
        disabled,
        inputClass: `!pl-14 !pr-3 !py-2 !h-[40px] !rounded-md !border ${error ? "!border-red-500" : "!border-gray-300"} !w-full !focus:outline-none`,
        containerClass: `!w-full ${disabled ? "opacity-75 cursor-not-allowed" : ""}`
      }
    ),
    error && /* @__PURE__ */ jsx17("p", { className: "text-red-500 text-sm mt-1", children: error })
  ] });
};
var PhoneInput_default = PhoneInput;

// src/components/ProgressBar.tsx
import { jsx as jsx18, jsxs as jsxs17 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs17("div", { className: "relative w-full rounded bg-gray-200 h-6 overflow-hidden", children: [
    /* @__PURE__ */ jsx18(
      "div",
      {
        className: `${colorClass} h-full transition-all duration-500 ease-in-out ${animated ? "animate-progress" : ""}`,
        style: { width: `${widthPercent}%` }
      }
    ),
    showLabel && /* @__PURE__ */ jsx18("div", { className: "absolute inset-0 flex items-center justify-center text-sm font-medium text-white select-none", children: label || `${Math.round(widthPercent)}%` })
  ] });
}
function ProgressBar() {
  return /* @__PURE__ */ jsxs17("div", { className: "w-full max-w-sm", children: [
    /* @__PURE__ */ jsx18("h2", { className: "text-lg font-semibold mb-2", children: "Progress" }),
    /* @__PURE__ */ jsx18(
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
import { jsx as jsx19, jsxs as jsxs18 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs18("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsxs18("label", { className: "block text-sm font-medium mb-1", children: [
      label,
      " ",
      required && /* @__PURE__ */ jsx19("span", { className: "text-red-500", children: "*" })
    ] }),
    /* @__PURE__ */ jsx19("div", { className: "space-y-2", children: options.map((option) => /* @__PURE__ */ jsxs18("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx19(
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
      /* @__PURE__ */ jsx19("label", { htmlFor: option, className: "ml-2 text-sm text-gray-900", children: option })
    ] }, option)) }),
    error && /* @__PURE__ */ jsx19("p", { className: "text-red-500 text-sm mt-1", children: error })
  ] });
};
var RadioButton_default = RadioButton;

// src/components/ReactDatePicker.tsx
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { jsx as jsx20, jsxs as jsxs19 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs19("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsxs19("label", { className: "block text-sm font-medium mb-1", children: [
      label,
      " ",
      required && /* @__PURE__ */ jsx20("span", { className: "text-red-500", children: "*" })
    ] }),
    /* @__PURE__ */ jsx20("div", { className: "relative w-full", children: /* @__PURE__ */ jsx20(
      ReactDatePicker,
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
    error && /* @__PURE__ */ jsx20("p", { className: "text-red-500 text-sm mt-1", children: error })
  ] });
};
var ReactDatePicker_default = DatePickerReact;

// src/components/Select.tsx
import { Fragment as Fragment3, jsx as jsx21, jsxs as jsxs20 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx21(Fragment3, { children: /* @__PURE__ */ jsxs20("div", { className: "mb-4", children: [
    label && /* @__PURE__ */ jsxs20("label", { className: "block text-sm  mb-1", children: [
      label,
      " ",
      required && /* @__PURE__ */ jsx21("span", { className: "text-red-500", children: "*" })
    ] }),
    /* @__PURE__ */ jsx21("div", { className: "flex-1", children: /* @__PURE__ */ jsxs20(
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
          /* @__PURE__ */ jsx21("option", { value: "", disabled: true, children: placeholder }),
          options.map((opt) => /* @__PURE__ */ jsx21("option", { value: opt, className: "text-black", children: opt }, opt))
        ]
      }
    ) })
  ] }) });
};
var Select_default = Select;

// src/components/TextInput.tsx
import { useState as useState4 } from "react";
import { Eye, EyeOff, Search } from "lucide-react";
import { jsx as jsx22, jsxs as jsxs21 } from "react/jsx-runtime";
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
  const [showPassword, setShowPassword] = useState4(false);
  const handleToggle = () => setShowPassword(!showPassword);
  return /* @__PURE__ */ jsxs21("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsxs21("label", { className: "block text-sm  mb-1", children: [
      label,
      " ",
      required && /* @__PURE__ */ jsx22("span", { className: "text-red-500", children: "*" })
    ] }),
    /* @__PURE__ */ jsxs21("div", { className: "relative", children: [
      /* @__PURE__ */ jsx22(
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
      error && /* @__PURE__ */ jsx22("p", { className: "text-red-500 text-sm mt-1", children: error }),
      type === "password" && /* @__PURE__ */ jsx22(
        "button",
        {
          type: "button",
          onClick: handleToggle,
          className: "absolute right-3 top-3",
          children: showPassword ? /* @__PURE__ */ jsx22(EyeOff, { size: 18 }) : /* @__PURE__ */ jsx22(Eye, { size: 18 })
        }
      ),
      type === "search" && searchIcon && /* @__PURE__ */ jsx22(Search, { className: "absolute right-3 top-3 text-gray-400", size: 18 })
    ] })
  ] });
};
var TextInput_default = TextInput;

// src/components/ToggleSwitch.tsx
import { Bell } from "lucide-react";
import { jsx as jsx23 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx23("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx23(
    "button",
    {
      type: "button",
      onClick: handleClick,
      disabled,
      "aria-pressed": checked,
      "aria-required": required,
      name,
      className: "focus:outline-none",
      children: /* @__PURE__ */ jsx23(
        "div",
        {
          className: `p-1 rounded-full transition-colors duration-300
            ${checked ? "bg-green-500 text-white" : "bg-transparent text-gray-500 border border-gray-400"}
            ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`,
          children: /* @__PURE__ */ jsx23(Bell, { className: "w-6 h-6" })
        }
      )
    }
  ) });
};
var ToggleSwitch_default = ToggleSwitch;

// src/components/Tooltip.tsx
import { useState as useState5, useRef as useRef2 } from "react";
import { jsxs as jsxs22 } from "react/jsx-runtime";
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
  const [visible, setVisible] = useState5(false);
  const timeoutRef = useRef2(null);
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
  return /* @__PURE__ */ jsxs22("div", { className: "relative inline-block", ...triggerProps, children: [
    children,
    " ",
    visible && /* @__PURE__ */ jsxs22(
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
import { jsx as jsx24, jsxs as jsxs23 } from "react/jsx-runtime";
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
    /* @__PURE__ */ jsxs23("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxs23("label", { className: "block text-sm  mb-1", children: [
        label,
        " ",
        required && /* @__PURE__ */ jsx24("span", { className: "text-red-500", children: "*" })
      ] }),
      /* @__PURE__ */ jsx24(
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
      error && /* @__PURE__ */ jsx24("p", { className: "text-red-500 text-sm mt-1", children: error })
    ] })
  );
};
var TextArea_default = TextArea;
export {
  Accordion,
  Alert_default as Alert,
  Avatar_default as Avatar,
  Badge_default as Badge,
  Breadcrumb_default as Bredcrumb,
  InfoCard as Card,
  ImageCarousel as Carousel,
  Chart_default as Chart,
  Checkbox_default as Checkbox,
  DatePicker_default as DatePicker,
  DropdownMenu_default as DropdownMenu,
  FileUpload_default as FileUpload,
  Loaders_default as Loaders,
  Modal_default as Modal,
  NotificationToaster_default as NotificationToaster,
  Pagination_default as Pagination,
  PhoneInput_default as PhoneInput,
  ProgressBar,
  RadioButton_default as RadioButton,
  ReactDatePicker_default as ReactDatePicker,
  Select_default as Select,
  TextArea_default as TextArea,
  TextInput_default as TextInput,
  ToggleSwitch_default as ToggleSwitch,
  Tooltip_default as Tooltip
};
