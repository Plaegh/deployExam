import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class InMemoryItemService implements InMemoryDbService{
  createDb() {
    const items = [
      { id: 1, name: 'Emp1' },
      { id: 2, name: 'Emp2' }
    ];
    return {items};
  }

  //ID Generator
  generateId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
  }
}
