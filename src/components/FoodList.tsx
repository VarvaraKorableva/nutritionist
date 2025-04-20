import { useFoodStore } from '../store/foodStore'

export default function FoodList() {
  const foods = useFoodStore((state) => state.foods)
  const total = useFoodStore((state) => state.totalCalories)

  return (
    <div>
      <h2>Список еды</h2>
      <ul>
        {foods.map((f, idx) => (
          <li key={idx} className="food-item">
            {f.name} — {f.calories} ккал
          </li>
        ))}
      </ul>
      <p><strong>Итого:</strong> {total()} ккал</p>
    </div>
  )
}