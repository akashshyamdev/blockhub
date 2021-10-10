import { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export type HandlerFunction = (req: NextApiRequest, res: NextApiResponse) => void;

// Custom Handler
export type Handler = {
  get: Function;
  post: Function;
  patch: Function;
  put: Function;
  delete: Function;
};

export type IResponseSuccess<T> = AxiosResponse<{ data: T }>;

export type IResponseError = AxiosResponse<{ message: string }>;
