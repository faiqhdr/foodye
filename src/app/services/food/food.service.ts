import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[] {
    return [
      {
        id: 1,
        name: 'Ayam Bakar',
        cookTime: '10-20',
        price: 21,
        favorite: false,
        origins: ['Indonesian Cuisine in General'],
        stars: 4.5,
        imageUrl: 'assets/images/foods/ayam-bakar.jpg',
        tags: ['Dinner', 'Lunch'],
      },
      {
        id: 2,
        name: 'Ayam Geprek',
        price: 25,
        cookTime: '10-15',
        favorite: true,
        origins: ['Indonesian Cuisine in General'],
        stars: 4.7,
        imageUrl: 'assets/images/foods/ayam-geprek.jpg',
        tags: ['Spicy', 'Lunch'],
      },
      {
        id: 3,
        name: 'Ayam Penyet',
        price: 23,
        cookTime: '10-15',
        favorite: false,
        origins: ['Indonesian Cuisine in General'],
        stars: 5.0,
        imageUrl: 'assets/images/foods/ayam-penyet.jpg',
        tags: ['Spicy', 'Lunch'],
      },
      {
        id: 4,
        name: 'Bakso Malang',
        price: 18,
        cookTime: '5-10',
        favorite: true,
        origins: ['Authentic Malang Cuisine'],
        stars: 5.0,
        imageUrl: 'assets/images/foods/bakso-malang.jpg',
        tags: ['Breakfast', 'Dinner', 'Soup', 'Slow Food'],
      },
      {
        id: 5,
        name: 'Cakwe',
        price: 8,
        cookTime: '2-5',
        favorite: false,
        origins: ['Authentic Jabodetabek Snack'],
        stars: 3.0,
        imageUrl: 'assets/images/foods/cakwe.jpg',
        tags: ['Snack'],
      },
      {
        id: 6,
        name: 'Gado-Gado',
        price: 12,
        cookTime: '3-5',
        favorite: false,
        origins: ['Indonesian Cuisine in General'],
        stars: 2.0,
        imageUrl: 'assets/images/foods/gado-gado.jpg',
        tags: ['Breakfast', 'Healthy Food'],
      },
      {
        id: 7,
        name: 'Gudeg',
        price: 17,
        cookTime: '3-5',
        favorite: false,
        origins: ['Authentic Yogyakarta Cuisine'],
        stars: 4.8,
        imageUrl: 'assets/images/foods/gudeg.jpg',
        tags: ['Breakfast', 'Lunch', 'Dinner'],
      },
      {
        id: 8,
        name: 'Indomie Goreng',
        price: 10,
        cookTime: '4-6',
        favorite: false,
        origins: ['Indonesian Cuisine in General'],
        stars: 5.0,
        imageUrl: 'assets/images/foods/indomie-goreng.jpg',
        tags: ['Breakfast', 'Instant', 'Dinner'],
      },
      {
        id: 9,
        name: 'Ketoprak',
        price: 12,
        cookTime: '3-5',
        favorite: false,
        origins: ['Indonesian Cuisine in General'],
        stars: 1.0,
        imageUrl: 'assets/images/foods/ketoprak.png',
        tags: ['Breakfast', 'Healthy Food'],
      },
      {
        id: 10,
        name: 'Lontong Opor',
        price: 24,
        cookTime: '10-15',
        favorite: false,
        origins: ['Indonesian Cuisine in General'],
        stars: 5.0,
        imageUrl: 'assets/images/foods/lontong-opor.jpg',
        tags: ['Breakfast', 'Special Dish'],
      },
      {
        id: 11,
        name: 'Nasi Goreng',
        price: 15,
        cookTime: '5-10',
        favorite: false,
        origins: ['Indonesian Cuisine in General'],
        stars: 4.3,
        imageUrl: 'assets/images/foods/nasi-goreng.jpg',
        tags: ['Dinner', 'Lunch'],
      },
      {
        id: 12,
        name: 'Nasi Kuning',
        price: 14,
        cookTime: '5-10',
        favorite: true,
        origins: ['Indonesian Cuisine in General'],
        stars: 4.8,
        imageUrl: 'assets/images/foods/nasi-kuning.jpg',
        tags: ['Breakfast', 'Special Dish'],
      },
      {
        id: 13,
        name: 'Nasi Liwet',
        price: 20,
        cookTime: '10-15',
        favorite: false,
        origins: ['Authentic Sundanese Cuisine'],
        stars: 4.6,
        imageUrl: 'assets/images/foods/nasi-liwet.jpg',
        tags: ['Lunch', 'Dinner'],
      },
      {
        id: 14,
        name: 'Nasi Padang',
        price: 22,
        cookTime: '15-20',
        favorite: true,
        origins: ['Authentic Padang Cuisine'],
        stars: 4.9,
        imageUrl: 'assets/images/foods/nasi-padang.jpeg',
        tags: ['Lunch', 'Dinner', 'Spicy'],
      },
      {
        id: 15,
        name: 'Nasi Uduk',
        price: 18,
        cookTime: '10-15',
        favorite: false,
        origins: ['Indonesian Cuisine in General'],
        stars: 4.5,
        imageUrl: 'assets/images/foods/nasi-uduk.jpg',
        tags: ['Breakfast', 'Lunch'],
      },
      {
        id: 16,
        name: 'Pancong',
        price: 7,
        cookTime: '2-5',
        favorite: false,
        origins: ['Authentic Bekasi Cuisine'],
        stars: 3.2,
        imageUrl: 'assets/images/foods/pancong.jpeg',
        tags: ['Snack', 'Dessert'],
      },
      {
        id: 17,
        name: 'Pukis',
        price: 9,
        cookTime: '5-10',
        favorite: false,
        origins: ['Indonesian Cuisine in General'],
        stars: 3.7,
        imageUrl: 'assets/images/foods/pukis.png',
        tags: ['Snack', 'Dessert'],
      },
      {
        id: 18,
        name: 'Sate Maranggi',
        price: 30,
        cookTime: '10-15',
        favorite: true,
        origins: ['Authentic Bandung Cuisine'],
        stars: 4.7,
        imageUrl: 'assets/images/foods/sate-maranggi.jpg',
        tags: ['Dinner', 'Grilled'],
      },
      {
        id: 19,
        name: 'Soto',
        price: 12,
        cookTime: '5-10',
        favorite: false,
        origins: ['Indonesian Cuisine in General'],
        stars: 4.0,
        imageUrl: 'assets/images/foods/soto.jpg',
        tags: ['Lunch', 'Soup'],
      },
      {
        id: 20,
        name: 'Tahu Gejrot',
        price: 8,
        cookTime: '5-10',
        favorite: false,
        origins: ['Indonesian Cuisine in General'],
        stars: 3.5,
        imageUrl: 'assets/images/foods/tahu-gejrot.jpg',
        tags: ['Snack'],
      },
      {
        id: 21,
        name: 'Tahu Kalasan',
        price: 10,
        cookTime: '5-10',
        favorite: false,
        origins: ['Indonesian Cuisine in General'],
        stars: 4.0,
        imageUrl: 'assets/images/foods/tahu-kalasan.jpg',
        tags: ['Snack'],
      }
      
    ]
  }
}