import { useState } from 'react'
import { useFoodStore } from '../store/foodStore'

export default function FoodForm() {
  const [name, setName] = useState('')
  const [calories, setCalories] = useState('')
  const addFood = useFoodStore((state) => state.addFood)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !calories) return
    addFood({ name, calories: Number(calories) })
    setName('')
    setCalories('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Еда"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Калории"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  )
}
