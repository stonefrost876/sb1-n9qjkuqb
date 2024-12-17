export interface HttpConfig {
  baseURL: string;
  timeout: number;
  headers: Record<string, string>;
}

export const defaultHttpConfig: HttpConfig = {
  baseURL: '',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
};