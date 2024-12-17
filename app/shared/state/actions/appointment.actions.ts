import { Store } from '../store';
import { Appointment } from '../../models/appointment.model';

export class AppointmentActions {
  private store: Store;

  constructor() {
    this.store = Store.getInstance();
  }

  setAppointments(appointments: Appointment[]): void {
    this.store.setState({ appointments });
  }

  addAppointment(appointment: Appointment): void {
    const currentAppointments = this.store.getState().appointments;
    this.store.setState({
      appointments: [...currentAppointments, appointment]
    });
  }
}