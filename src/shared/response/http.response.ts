import { Response } from "express";

export enum HttpStatus {
  OK = 200,
  ERROR_DATA_INPUT = 400,
  ERROR_RANGE_OUT = 404,
  ERROR_NOT_CONTROLLED = 500,
}

export const Ok = (res: Response, data?: any): Response => {
  return res.status(HttpStatus.OK).json({
    status: HttpStatus.OK,
    statusMsg: "Consulta Exitosa",
    data: data,
  });
};

export const Error_Data_Input = (res: Response, data?: any): Response => {
  return res.status(HttpStatus.ERROR_DATA_INPUT).json({
    status: HttpStatus.ERROR_DATA_INPUT,
    statusMsg: "Error en validación datos de entrada",
    error: data,
  });
};

export const ERROR_RANGE_OUT = (res: Response, data?: any): Response => {
  return res.status(HttpStatus.ERROR_RANGE_OUT).json({
    status: HttpStatus.ERROR_RANGE_OUT,
    statusMsg: "Error no se encuentra para rango especificado",
    error: data,
  });
};
