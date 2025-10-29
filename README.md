# Recipe Ideas — Taylor

This is a small React + Vite app built for the persona "Taylor" (a busy professional) to find recipe ideas based on an ingredient they have.

Features

- Search recipes by ingredient using TheMealDB public API (no auth required)
- Responsive grid of recipe cards with images and names
- Loading and error handling for no results or network issues

Getting started (Windows, cmd.exe)

1. Install dependencies

```cmd
cd "c:\Users\sandh\Documents\work\recepie project"
npm install
```

2. Run the dev server

```cmd
npm run dev
```

3. Open the URL shown in the terminal (usually http://localhost:5173)

Notes

- The app uses TheMealDB filter API: https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}
- Click a recipe card to open TheMealDB meal page in a new tab.

Testing

Run tests with:

```cmd
npm run test
```

Improvements you might consider

- Add recipe detail modal using lookup by id (lookup.php?i={id})
- Add caching of recent searches
- Improve accessibility and keyboard interactions
