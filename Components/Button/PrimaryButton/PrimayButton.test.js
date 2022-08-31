import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import PrimaryButton from "./PrimaryButton";
import "@testing-library/jest-dom";
import PRIMARYCOLOR from "../../../styles/primaryColor";

const mockFn = jest.fn();

it("Renders primary button", async () => {
  render(<PrimaryButton text="Hello World" />);
  const buttonElement = screen.getByText("Hello World");
  expect(buttonElement).toBeInTheDocument();
});

it("Should have primary color as the background color", async () => {
  render(<PrimaryButton text="hello world" solid={true} />);
  const button = screen.getByRole("button");
  expect(button).toHaveStyle({
    backgroundColor: PRIMARYCOLOR,
  });
});

it("Should have a border of pirmary color", async () => {
  render(<PrimaryButton text="hello world" solid={false} />);
  const button = screen.getByRole("button");
  expect(button).toHaveStyle({
    borderColor: PRIMARYCOLOR,
  });
});

it("Should fire click function", async () => {
  render(<PrimaryButton text="click" onClick={mockFn} />);

  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(mockFn).toBeCalled();
});
