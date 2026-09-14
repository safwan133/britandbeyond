import { ReactNode } from "react";

export interface FieldProps {
    id: string;
    label: string;
    error?: string;
    children: ReactNode;
}
export interface ContactFormValues {
    name: string;
    email: string;
    message: string;
}
