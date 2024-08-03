import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "@shared/button";

describe("Button", () => {
  const mockedOnClick = vi.fn();

  it("should render", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("should be disabled", () => {
    render(<Button disabled>Test</Button>);
    expect(screen.getByText("Test")).toBeDisabled();
  });

  it("should show a loading circle", () => {
    render(<Button isLoading={true}>Test</Button>);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("should call onClick", () => {
    render(<Button onClick={mockedOnClick}>Test</Button>);
    screen.getByText("Test").click();
    expect(mockedOnClick).toHaveBeenCalled();
  });
});
