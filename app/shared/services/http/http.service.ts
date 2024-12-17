import { Http, HttpResponse } from '@nativescript/core';
import { HttpConfig, defaultHttpConfig } from './http.config';

export class HttpService {
  private config: HttpConfig;

  constructor(config: Partial<HttpConfig> = {}) {
    this.config = { ...defaultHttpConfig, ...config };
  }

  private getFullUrl(endpoint: string): string {
    return `${this.config.baseURL}${endpoint}`;
  }

  private async handleResponse<T>(response: HttpResponse): Promise<T> {
    if (response.statusCode >= 400) {
      throw new Error(`HTTP Error: ${response.statusCode}`);
    }
    return response.content.toJSON();
  }

  async get<T>(endpoint: string): Promise<T> {
    try {
      const response = await Http.request({
        url: this.getFullUrl(endpoint),
        method: 'GET',
        headers: this.config.headers,
        timeout: this.config.timeout
      });
      return this.handleResponse<T>(response);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    try {
      const response = await Http.request({
        url: this.getFullUrl(endpoint),
        method: 'POST',
        headers: this.config.headers,
        content: JSON.stringify(data),
        timeout: this.config.timeout
      });
      return this.handleResponse<T>(response);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any): Error {
    if (error.response) {
      return new Error(`HTTP Error: ${error.response.statusCode}`);
    }
    if (error.message) {
      return new Error(error.message);
    }
    return new Error('Network error occurred');
  }
}