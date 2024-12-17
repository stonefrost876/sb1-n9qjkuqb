import { Injectable } from '@nativescript/core';
import { HttpService } from '../http/http.service';
import { API_CONFIG } from '../../constants/api.constants';
import { Activity } from '../../models/activity.model';

@Injectable()
export class ActivitiesService {
  private http: HttpService;

  constructor() {
    this.http = new HttpService({
      baseURL: API_CONFIG.BASE_URL
    });
  }

  async getActivities(): Promise<Activity[]> {
    return this.http.get<Activity[]>(API_CONFIG.ENDPOINTS.ACTIVITIES);
  }
}