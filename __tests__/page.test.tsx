import Home from "@/app/page"
import "@testing-library/react"
import { render, screen } from "@testing-library/react"

test("Renders the BudidayaPlus Coming Soon on the Home Page", () => {
  render(<Home />)
  expect(screen.getByText((content, element) => {
    return element?.textContent === "BudidayaPlus"
  })).toBeInTheDocument()
})