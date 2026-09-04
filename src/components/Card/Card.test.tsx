import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card from "./index";

const artigoMock = {
  id: 1, // <--- Altere aqui para número (sem aspas)
  titulo: "Lançamento do Novo Framework",
  data: "10/04/2026",
  description: "Confira todos os detalhes sobre a atualização.",
  slug: "lancamento-framework",
  categoria: "tecnologia",
  autor: "Gabrielly",
  conteudo: "Conteúdo completo da notícia aqui..."
}

test("Exibe o título, data e descrição do artigo no Card", () => {
  render(<Card artigo={artigoMock} />)

  expect(screen.getByText("Lançamento do Novo Framework")).toBeInTheDocument()
  expect(screen.getByText("10/04/2026")).toBeInTheDocument()
  expect(screen.getByText("Confira todos os detalhes sobre a atualização.")).toBeInTheDocument()
})

test("Direciona o link do Card para o slug correto do artigo", () => {
  render(<Card artigo={artigoMock} />)

  const link = screen.getByRole("link")
  expect(link).toHaveAttribute("href", "/artigos/lancamento-framework")
})