import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  searchValue: string = '';
  activities: any[] = [
    { activity: 'Activity 1', product: 'Product A' },
    { activity: 'Activity 2', product: 'Product B' },
    { activity: 'Activity 3', product: 'Product A' }
  ];
  products: string[] = ['Product A', 'Product B', 'Product C'];

  filteredActivities: any[] = [];

  filterActivities() {
    this.filteredActivities = this.activities.filter(activity =>
      activity.product.toLowerCase().includes(this.searchValue.toLowerCase()) ||
      activity.activity.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }
}
