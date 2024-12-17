export interface AppointmentCreate {
  clientId: string;
  date: string;
  time: string;
  sessionType: string;
  duration: number;
  notes?: string;
}