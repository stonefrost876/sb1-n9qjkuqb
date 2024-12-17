import { Observable } from '@nativescript/core';
import { Appointment } from '../models/appointment.model';
import { Activity } from '../models/activity.model';

export interface AppState {
  appointments: Appointment[];
  activities: Activity[];
  loading: boolean;
  error: string | null;
}

export class Store extends Observable {
  private static instance: Store;
  private state: AppState;

  private constructor() {
    super();
    this.state = {
      appointments: [],
      activities: [],
      loading: false,
      error: null
    };
  }

  static getInstance(): Store {
    if (!Store.instance) {
      Store.instance = new Store();
    }
    return Store.instance;
  }

  getState(): AppState {
    return { ...this.state };
  }

  setState(newState: Partial<AppState>): void {
    this.state = { ...this.state, ...newState };
    Object.keys(newState).forEach(key => {
      this.notifyPropertyChange(key, this.state[key]);
    });
  }
}