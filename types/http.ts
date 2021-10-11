import { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export type HandlerFunction = (req: NextApiRequest, res: NextApiResponse) => void;

// Custom Handler
export type Handler = {
  get: HandlerFunction;
  post: HandlerFunction;
  patch: HandlerFunction;
  put: HandlerFunction;
  delete: HandlerFunction;
};

export type IResponseSuccess<T> = AxiosResponse<{ data: T }>;

export type IResponseError = AxiosResponse<{ message: string }>;
