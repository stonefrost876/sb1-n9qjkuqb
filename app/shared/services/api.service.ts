import { BaseService } from './base.service';
import { Injectable } from '@nativescript/core';

@Injectable()
export class ApiService extends BaseService {
  private readonly API_URL = 'https://api.photomanager.com'; // Example URL

  async fetchAppointments() {
    return this.get(`${this.API_URL}/appointments`);
  }

  async fetchActivities() {
    return this.get(`${this.API_URL}/activities`);
  }

  async createAppointment(appointmentData: any) {
    return this.post(`${this.API_URL}/appointments`, appointmentData);
  }
}