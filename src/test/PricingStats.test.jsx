import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import PricingStats from "../components/PricingStats";
import "@testing-library/jest-dom";

describe("PricingStats Component", () => {
  beforeEach(() => {
    render(<PricingStats />);
  });

  it("renders the main heading", () => {
    expect(screen.getByText(/Pricing/i)).toBeInTheDocument();
  });

  it("renders all pricing plans", () => {
    expect(screen.getByText("Basic")).toBeInTheDocument();
    expect(screen.getByText("Pro")).toBeInTheDocument();
    expect(screen.getByText("Enterprise")).toBeInTheDocument();
  });

  it("renders pricing values", () => {
    expect(screen.getByText("9 Rs")).toBeInTheDocument();
    expect(screen.getByText("29 Rs")).toBeInTheDocument();
    expect(screen.getByText("99 Rs")).toBeInTheDocument();
  });

  it("renders action buttons", () => {
    expect(screen.getByRole("button", { name: /Get Started/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Upgrade Now/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Contact Sales/i })).toBeInTheDocument();
  });

  it("renders stats boxes", () => {
    expect(screen.getByText(/10K\+/i)).toBeInTheDocument();
    expect(screen.getByText(/250\+/i)).toBeInTheDocument();
    expect(screen.getByText(/95%/i)).toBeInTheDocument();
  });
});
