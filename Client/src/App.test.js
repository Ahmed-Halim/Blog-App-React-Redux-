import { render, screen } from "@testing-library/react";
import Home from "./Pages/Home";

test("renders learn react link", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Add Task/i);
  expect(linkElement).toBeInTheDocument();
});
