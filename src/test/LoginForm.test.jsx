import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import {describe, it, expect, vi, afterEach} from 'vitest';
import LoginForm from "../components/LoginForm";
import '@testing-library/jest-dom';


describe("Testing form validation", () => {

    afterEach(() => {
        vi.restoreAllMocks();
    });

    //Frontend test
    it("shows required field errors", () => {
        render(<LoginForm />);
        expect(screen.getByRole('button', {name: /Login/i})).toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', {name: /login/i})); //Simulates a click on the “Login” button
        expect(screen.getByText(/username is required/i)).toBeInTheDocument(); //expects error: "Usernmae is required"
    });

    it("Checks success message, when API return Ok", async () => {
        // Mock the fetch API to simulate a successful login
        vi.spyOn(global, "fetch").mockResolvedValueOnce({
            ok: true,
            json: async () => ({ token: "abc123", username: "emily" }),
        });

        render(<LoginForm />)
        fireEvent.change(screen.getByLabelText(/username/i), {target: {value: "emily"}});
        fireEvent.change(screen.getByLabelText(/password/i), {target: {value: "emilypass"}});

        fireEvent.click(screen.getByRole("button", {name: /login/i}));
        expect(await screen.findByText(/Login successful!/i)).toBeInTheDocument();
    });

    it("This checks error message when API returns error", async () => {
        // Mock the fetch API to simulate a failed login
        vi.spyOn(global, "fetch").mockResolvedValueOnce({
            ok: false,
            json: async () => ({ message: "Invalid credentials" }),
        });

        render(<LoginForm />);
        fireEvent.change(screen.getByLabelText(/username/i), { target: { value: "wronguser" } });
        fireEvent.change(screen.getByLabelText(/password/i), {target: {value: "pass"}});

        fireEvent.click(screen.getByRole("button", { name: /login/i }));
        expect(await screen.findByText(/Invalid credentials/i)).toBeInTheDocument();

    });


});
