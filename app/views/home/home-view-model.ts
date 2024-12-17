import { Observable } from '@nativescript/core';
import { HomeService } from './services/home.service';
import { Store } from '~/shared/state/store';
import { formatDate } from '~/shared/utils/date.utils';

export class HomeViewModel extends Observable {
  private store = Store.getInstance();
  private homeService: HomeService;

  constructor() {
    super();
    this.homeService = new HomeService();
    this.initializeData();
  }

  private async initializeData(): Promise<void> {
    await Promise.all([
      this.homeService.loadTodayAppointments(),
      this.homeService.loadRecentActivity()
    ]);
  }

  get todayDate(): string {
    return formatDate(new Date());
  }

  get todayAppointments() {
    return this.store.getState().appointments;
  }

  get recentActivity() {
    return this.store.getState().activities;
  }

  get isLoading() {
    return this.store.getState().loading;
  }

  get error() {
    return this.store.getState().error;
  }

  async onNewBooking(): Promise<void> {
    // Implementation for new booking
  }

  async onQuickNote(): Promise<void> {
    // Implementation for quick note
  }
}