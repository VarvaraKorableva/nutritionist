import { create } from 'zustand'

type Food = {
  name: string
  calories: number
}

type FoodStore = {
  foods: Food[]
  addFood: (food: Food) => void
  totalCalories: () => number
}

export const useFoodStore = create<FoodStore>((set, get) => ({
  foods: [],
  addFood: (food) => set((state) => ({ foods: [...state.foods, food] })),
  totalCalories: () =>
    get().foods.reduce((sum, food) => sum + food.calories, 0),
}))