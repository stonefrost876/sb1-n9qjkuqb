import { Injectable } from '@nativescript/core';
import { Store } from '~/shared/state/store';
import { AppointmentsService } from '~/shared/services/appointments/appointments.service';
import { ActivitiesService } from '~/shared/services/activities/activities.service';
import { AppointmentActions } from '~/shared/state/actions/appointment.actions';
import { ActivityActions } from '~/shared/state/actions/activity.actions';
import { handleError } from '~/shared/utils/error.utils';

@Injectable()
export class HomeService {
  private store = Store.getInstance();
  private appointmentActions = new AppointmentActions();
  private activityActions = new ActivityActions();
  
  constructor(
    private appointmentsService: AppointmentsService,
    private activitiesService: ActivitiesService
  ) {}

  async loadTodayAppointments(): Promise<void> {
    try {
      this.store.setState({ loading: true, error: null });
      const appointments = await this.appointmentsService.getAppointments();
      this.appointmentActions.setAppointments(appointments);
      this.store.setState({ loading: false });
    } catch (error) {
      this.store.setState({
        loading: false,
        error: handleError(error)
      });
    }
  }

  async loadRecentActivity(): Promise<void> {
    try {
      this.store.setState({ loading: true, error: null });
      const activities = await this.activitiesService.getActivities();
      this.activityActions.setActivities(activities);
      this.store.setState({ loading: false });
    } catch (error) {
      this.store.setState({
        loading: false,
        error: handleError(error)
      });
    }
  }
}