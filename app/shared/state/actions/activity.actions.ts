import { Store } from '../store';
import { Activity } from '../../models/activity.model';

export class ActivityActions {
  private store: Store;

  constructor() {
    this.store = Store.getInstance();
  }

  setActivities(activities: Activity[]): void {
    this.store.setState({ activities });
  }
}