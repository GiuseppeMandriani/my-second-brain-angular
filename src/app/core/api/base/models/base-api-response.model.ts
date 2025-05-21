export interface IMDSBaseResponseModel<T> {
  payload: T;
  messages: IMDSResponseMessage[];
};

export interface IMDSResponseMessage {
  severity: "ERROR" | "WARNING" | "INFO";
  message: string;
};
