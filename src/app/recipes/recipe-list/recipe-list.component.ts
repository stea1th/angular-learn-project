import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Bolognese',
      'Very tasty food',
      'https://images-gmi-pmc.edge-generalmills.com/a8588f22-ab00-4f9d-99f2-e224ffcd7235.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
