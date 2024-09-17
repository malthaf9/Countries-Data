
import { render, screen } from "@testing-library/react";
import App from "./App";
import { act } from "react";

test('renders app header', () => {

  act(() => {
    render(<App />);
  })

  const linkElement = screen.getByText(/Where in the world\?/i);
  expect(linkElement).toBeInTheDocument();
});

