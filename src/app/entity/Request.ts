import { createContext } from "react";

export interface Request {
    url: string;
    method: string;
    query: RequestQuery[];
    headers: RequestHeader[];
}

export interface RequestQuery {
    key: string;
    value: string;
}

export interface RequestHeader {
    key: string;
    value: string;
}

export interface RequestContextType {
    request: Request
    setRequest: (value: Request | ((request: Request) => Request)) => void
}

export const RequestContext = createContext<RequestContextType>(null)