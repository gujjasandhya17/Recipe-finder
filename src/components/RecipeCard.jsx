
export default function RecipeCard({ meal }) {
  // meal has idMeal, strMeal, strMealThumb
  const openDetails = () => {
    // open the meal detail page on themealdb (lookup by id)
    const url = `https://www.themealdb.com/meal.php?c=${meal.idMeal}`
    window.open(url, '_blank', 'noopener')
  }

  return (
    <article className="card" onClick={openDetails} tabIndex={0} role="button">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="thumb" />
      <h3 className="meal-title">{meal.strMeal}</h3>
    </article>
  )
}
