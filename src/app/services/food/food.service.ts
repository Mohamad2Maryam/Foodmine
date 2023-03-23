import { Injectable } from '@angular/core';
import {Food} from '../../shared/models/Food';
import {Tag} from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number) : Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodBySearchTerm(searchTerm:string): Food[]{
    return this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags():Tag[]{
return [
  {name: 'All', count: 6},
  {name: 'fruits', count: 1},
  {name: 'nuts', count: 1},
  {name: 'hazelnuts', count: 1},
  {name: 'raisins', count: 1},
  {name: 'dates', count: 1},
];
  }



  getAllFoodsByTag(tag:string):Food[]{

  return tag =="All"?
    this.getAll() :
     this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll():Food[]{
    return[
      {
        id: 1,
        name: 'fruits ',
        cookTime:'10-20',
        price: 6,
        favorite: false,
        origins: ['china'],
        imageUrl: 'assets/images/foods/food1.jpg',
        tags: ['FastFood', 'dried fruits'],
      },
      {
        id: 2,
        name: 'nuts',
        cookTime:'10-20',
        price: 7,
        favorite: false,
        origins: ['china'],
        imageUrl: 'assets/images/foods/food2.jpg',
        tags: ['FastFood', 'dried fruits'],
      },

      {
        id: 4,
        name: 'hazelnut',
        cookTime:'10-20',
        price: 12,
        favorite: false,
        origins: ['china'],
        imageUrl: 'assets/images/foods/food4.jpg',
        tags: ['FastFood', 'dried fruits'],
      },
      {
        id: 5,
        name: 'raisins',
        cookTime:'10-20',
        price: 16,
        favorite: false,
        origins: ['china'],
        imageUrl: 'assets/images/foods/food5.jpg',
        tags: ['FastFood', 'dried fruits'],
      },
      {
        id: 6,
        name: 'dates',
        cookTime:'10-20',
        price: 6,
        favorite: false,
        origins: ['china'],
        imageUrl: 'assets/images/foods/food6.jpg',
        tags: ['FastFood', 'dried fruits'],
      }
    ]
  }
}
