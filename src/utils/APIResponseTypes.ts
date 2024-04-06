interface ErrorStatus extends Error {
  status: number;
}

interface SuccessDataProp {
  status: number;
  message: string;
  data?: undefined | any;
}

interface createErrorProp {
  message: string;
  status: number;
}
