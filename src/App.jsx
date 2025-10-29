import { useState } from 'react'
import RecipeCard from './components/RecipeCard'

// Taylor: Busy Professional persona — simple, quick UI to search by ingredient
export default function App() {
  const [ingredient, setIngredient] = useState('')
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function searchByIngredient(e) {
    e && e.preventDefault()
    if (!ingredient.trim()) {
      setError('Please enter an ingredient (e.g., chicken, tomato)')
      setMeals([])
      return
    }
    setLoading(true)
    setError(null)
    setMeals([])

    try {
      const q = encodeURIComponent(ingredient.trim())
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${q}`)
      if (!res.ok) throw new Error('Network response was not ok')
      const data = await res.json()
      if (!data || !data.meals) {
        setError(`No recipes found for "${ingredient}"`)
        setMeals([])
      } else {
        setMeals(data.meals)
      }
    } catch (err) {
      setError('Could not fetch recipes. Check your connection and try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Recipe Ideas</h1>
        <p className="subtitle">For Taylor — quick recipes from what you have at home</p>
      </header>

      <main className="container">
        <form className="search" onSubmit={searchByIngredient}>
          <input
            aria-label="ingredient-input"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            placeholder="Enter an ingredient (e.g., chicken, potato, tomato)"
            className="input"
          />
          <button className="btn" type="submit" disabled={loading}>
            {loading ? 'Searching...' : 'Find Recipes'}
          </button>
        </form>

        {error && <div className="error" role="alert">{error}</div>}

        <section className="grid">
          {meals.map((m) => (
            <RecipeCard key={m.idMeal} meal={m} />
          ))}
        </section>

        {!loading && !error && meals.length === 0 && (
          <p className="hint">Try searching by a common ingredient like "chicken" or "eggs".</p>
        )}
      </main>

      <footer className="footer">
        Data from TheMealDB — filter by ingredient
      </footer>
    </div>
  )
}
