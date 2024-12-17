import { Http } from '@nativescript/core';

export class BaseService {
  protected async get<T>(url: string): Promise<T> {
    try {
      const response = await Http.getJSON<T>(url);
      return response;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  protected async post<T>(url: string, data: any): Promise<T> {
    try {
      const response = await Http.request({
        url,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        content: JSON.stringify(data)
      });
      return response.content.toJSON();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
}