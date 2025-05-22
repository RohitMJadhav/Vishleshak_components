import React$1, { ReactNode, FC } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface LoaderProps {
    isLoading?: boolean;
    size?: number;
    color?: string;
    type?: "spinner" | "dots";
    message?: string;
    fullscreen?: boolean;
}
declare const Loader: React$1.FC<LoaderProps>;

type BadgeProps = {
    content: string;
    color?: string;
    variant?: "solid" | "outline" | "subtle";
    size?: "sm" | "md" | "lg";
    className?: string;
    icon?: ReactNode;
};
declare const Badge: React$1.FC<BadgeProps>;

type AccordionItemType = {
    title: string;
    content: string;
};
type AccordionProps = {
    items: AccordionItemType[];
    allowMultiple?: boolean;
    defaultOpen?: number | number[];
    onToggle?: (index: number) => void;
    className?: string;
    icon?: ReactNode;
};
declare function Accordion({ items, allowMultiple, defaultOpen, onToggle, className, icon, }: AccordionProps): react_jsx_runtime.JSX.Element;

type AlertProps = {
    type: "success" | "error" | "warning" | "info";
    title: string;
    message: string;
    dismissible?: boolean;
    onClose?: () => void;
    icon?: ReactNode;
    className?: string;
};
declare const Alert: React$1.FC<AlertProps>;

type AvatarProps = {
    src?: string;
    alt?: string;
    name?: string;
    size?: "sm" | "md" | "lg" | string;
    rounded?: boolean;
    className?: string;
    fallbackIcon?: ReactNode;
};
declare const Avatar: React$1.FC<AvatarProps>;

interface BreadcrumbItem {
    label: string;
    href: string;
}
interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: string | ReactNode;
    current?: string;
    onClick?: (item: BreadcrumbItem) => void;
    onPrevious?: () => void;
    onNext?: () => void;
    className?: string;
}
declare const Breadcrumb: React$1.FC<BreadcrumbProps>;

interface InfoCardProps {
    title: string;
    content: string | ReactNode;
    image?: string;
    actions?: ReactNode;
    className?: string;
    footer?: ReactNode;
}
declare function InfoCard({ title, content, image, actions, className, footer, }: InfoCardProps): react_jsx_runtime.JSX.Element;

interface CarouselProps {
    items: string[];
    autoPlay?: boolean;
    interval?: number;
    showArrows?: boolean;
    showIndicators?: boolean;
    loop?: boolean;
    onSlideChange?: (index: number) => void;
    className?: string;
}
declare function ImageCarousel({ items, autoPlay, interval, showArrows, showIndicators, loop, onSlideChange, className, }: CarouselProps): react_jsx_runtime.JSX.Element;

interface ChartProps {
    type: "line" | "bar" | "pie";
    data: any;
    options?: any;
    width?: number;
    height?: number;
    className?: string;
}
declare const Chart: FC<ChartProps>;

interface CheckboxProps {
    label: string;
    required?: boolean;
    disabled?: boolean;
    checked: boolean;
    onChange: (e: {
        target: {
            name: string;
            value: boolean;
        };
    }) => void;
    name: string;
    error?: boolean;
}
declare const Checkbox: ({ label, required, disabled, checked, onChange, name, error }: CheckboxProps) => react_jsx_runtime.JSX.Element;

interface DatePickerProps$1 {
    label: string;
    name?: string;
    required?: boolean;
    disabled?: boolean;
    type?: 'date' | 'datetime-local' | 'month' | 'time';
    minDate?: string | Date;
    maxDate?: string | Date;
    value: string | Date;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}
declare const DatePicker: ({ label, name, required, disabled, type, minDate, maxDate, value, onChange, error }: DatePickerProps$1) => react_jsx_runtime.JSX.Element;

type DropdownItem = {
    label: string;
    onClick: () => void;
};
type DropdownMenuProps = {
    items: DropdownItem[];
    trigger: ReactNode;
    position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
    open: boolean;
    onToggle: (open: boolean) => void;
    className?: string;
    disabled?: boolean;
};
declare const DropdownMenu: React$1.FC<DropdownMenuProps>;

interface FileUploadProps {
    required?: boolean;
    label?: string;
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    onChange: (files: FileList | null) => void;
    name?: string;
    fileSize?: string;
}
declare const FileUpload: React$1.FC<FileUploadProps>;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    type?: "spinner" | "dots";
    content: React$1.ReactNode;
    showFooter?: boolean;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    confirmButtonClassName?: string;
    cancelButtonClassName?: string;
}
declare const Modal: React$1.FC<ModalProps>;

type ToasterProps = {
    message: string;
    type: "success" | "error" | "warning" | "info";
    duration?: number;
    position?: string;
    isVisible: boolean;
    onClose: () => void;
    icon?: ReactNode;
    className?: string;
};
declare const NotificationToaster: React$1.FC<ToasterProps>;

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    onPageChange: (page: number) => void;
    showControls?: boolean;
    className?: string;
}
declare const Pagination: React$1.FC<PaginationProps>;

interface PhoneInputProps {
    label: string;
    name: string;
    required?: boolean;
    disabled?: boolean;
    value: string;
    onChange: (e: {
        target: {
            name: string;
            value: string;
        };
    }) => void;
    error: string;
}
declare const PhoneInput: ({ label, name, required, disabled, value, onChange, error }: PhoneInputProps) => react_jsx_runtime.JSX.Element;

declare function ProgressBar(): react_jsx_runtime.JSX.Element;

interface RadioButtonProps {
    label: string;
    required?: boolean;
    disabled?: boolean;
    options: string[];
    value: string;
    onChange: (e: {
        target: {
            name: string;
            value: string;
        };
    }) => void;
    name: string;
    error?: string;
}
declare const RadioButton: ({ label, required, disabled, options, value, onChange, name, error }: RadioButtonProps) => react_jsx_runtime.JSX.Element;

interface DatePickerProps {
    label: string;
    required?: boolean;
    disabled?: boolean;
    minDate?: string | Date;
    maxDate?: string | Date;
    value: Date | null;
    onChange: (e: {
        target: {
            name: string;
            value: Date | null;
        };
    }) => void;
    error?: string;
    name?: string;
}
declare const DatePickerReact: ({ label, required, disabled, minDate, maxDate, value, onChange, error, name }: DatePickerProps) => react_jsx_runtime.JSX.Element;

interface SelectProps {
    required?: boolean;
    label?: string;
    disabled?: boolean;
    options: string[];
    value: string;
    onChange: (e: React$1.ChangeEvent<HTMLSelectElement>) => void;
    name: string;
    placeholder?: string;
    error?: string;
}
declare const Select: React$1.FC<SelectProps>;

interface TextInputProps {
    label: string;
    required?: boolean;
    disabled?: boolean;
    type?: 'text' | 'email' | 'password' | 'url' | 'search';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    minimum_length?: number;
    maximum_length?: number;
    regex?: string;
    searchIcon?: boolean;
    error?: string;
}
declare const TextInput: ({ label, required, disabled, type, value, onChange, name, minimum_length, maximum_length, regex, searchIcon, error }: TextInputProps) => react_jsx_runtime.JSX.Element;

interface ToggleSwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    required?: boolean;
    name?: string;
}
declare const ToggleSwitch: React$1.FC<ToggleSwitchProps>;

interface TooltipProps {
    content: string;
    placement?: "top" | "bottom" | "left" | "right";
    trigger?: "hover" | "click" | "focus";
    disabled?: boolean;
    showControls?: boolean;
    delay?: number;
    className?: string;
    children: ReactNode;
}
declare const Tooltip: React$1.FC<TooltipProps>;

interface TextAreaProps {
    required?: boolean;
    minimum_length?: number;
    maximum_length?: number;
    regex?: string;
    label?: string;
    disabled?: boolean;
    type?: "text" | "email" | "password";
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    name: string;
    rows?: number;
    placeholder?: string;
    error?: string;
}
declare const TextArea: React.FC<TextAreaProps>;

export { Accordion, Alert, Avatar, Badge, Breadcrumb as Bredcrumb, InfoCard as Card, ImageCarousel as Carousel, Chart, Checkbox, DatePicker, DropdownMenu, FileUpload, Loader as Loaders, Modal, NotificationToaster, Pagination, PhoneInput, ProgressBar, RadioButton, DatePickerReact as ReactDatePicker, Select, TextArea, TextInput, ToggleSwitch, Tooltip };
