import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Women from "./Women";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("App", () => {
  it("renders headline", () => {
    render(<Women title="React" />);

    screen.debug();

  });
});
