import { Injectable } from '@nativescript/core';
import { HttpService } from '../http/http.service';
import { API_CONFIG } from '../../constants/api.constants';
import { Appointment } from '../../models/appointment.model';
import { AppointmentCreate } from './types/appointment-create.type';

@Injectable()
export class AppointmentsService {
  private http: HttpService;

  constructor() {
    this.http = new HttpService({
      baseURL: API_CONFIG.BASE_URL
    });
  }

  async getAppointments(): Promise<Appointment[]> {
    return this.http.get<Appointment[]>(API_CONFIG.ENDPOINTS.APPOINTMENTS);
  }

  async createAppointment(data: AppointmentCreate): Promise<Appointment> {
    return this.http.post<Appointment>(API_CONFIG.ENDPOINTS.APPOINTMENTS, data);
  }
}