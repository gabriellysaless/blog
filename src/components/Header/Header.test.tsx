import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"
import Header from "./index"

test("Renderiza o título principal do portal 'A Notícia'", () => {
  render(<Header />)

  const titulo = screen.getByText(/A Notícia/i)
  expect(titulo).toBeInTheDocument()
})

test("Renderiza os links de navegação principais no Header", () => {
  render(<Header />)

  expect(screen.getByRole("link", { name: /Início/i })).toBeInTheDocument()
  expect(screen.getByRole("link", { name: /Tecnologia/i })).toBeInTheDocument()
})