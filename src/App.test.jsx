import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App basic render', () => {
  it('renders input and button', () => {
    render(<App />)
    expect(screen.getByPlaceholderText(/Enter an ingredient/i)).toBeTruthy()
    expect(screen.getByRole('button', { name: /Find Recipes/i })).toBeTruthy()
  })
})
