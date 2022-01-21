export interface HttpServiceInterface {
  get<T>(path: string): Promise<T>;
  post<T>(path: string, body: object): Promise<T>;
  patch<T>(path: string, body: object): Promise<T>;
}
