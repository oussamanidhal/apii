import { Component } from '@angular/core';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  searchValue: string = '';
  activities: any[] = [
    { activity: 'Activity 1', product: 'Product A', codeNat: '001', eligible: true },
    { activity: 'Activity 2', product: 'Product B', codeNat: '002', eligible: false },
    { activity: 'Activity 3', product: 'Product A', codeNat: '003', eligible: true }
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
