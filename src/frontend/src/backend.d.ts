import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactSubmission {
    id: string;
    subject: string;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone?: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllSubmissions(): Promise<Array<ContactSubmission>>;
    getSubmissionById(id: string): Promise<ContactSubmission>;
    submitContactForm(name: string, email: string, phone: string | null, subject: string, message: string): Promise<string>;
}
