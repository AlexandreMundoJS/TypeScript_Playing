export interface GenericInterface<T = string, D = number, M = string> {
  data: T;
  status: D;
  message: M;
}
