import {render, screen, fireEvent, getByRole} from "@testing-library/react";
import {describe, it, expect, vi} from 'vitest';
import LoginForm from "../components/LoginForm";


describe("Testing form validation", () => {

    it("shows required field errors", () =>{
        render(<LoginForm />);
        expect(screen.getByRole('button', {name: /Login/i})).toBeInTheDocument();
        fireEvent.click(screen.getByRole('button', {name: /login/i})); //Simulates a click on the “Login” button
        expect(screen.getByText(/username is required/i)).toBeInTheDocument(); //expects error: "Usernmae is required"
    });

    it("Shows invalid credentials msg", () => {
        render(<LoginForm />);
        fireEvent.change(screen.getByLabelText(/username/i), {target: { value: "user"}});
        fireEvent.change(screen.getByLabelText(/password/i), {target: { value: "456"}});
        fireEvent.click(screen.getByRole('button', {name: /login/i}));
        expect(screen.getByText(/Invalid credentials/i)).toBeInTheDocument();
    });

    it("shows success message on correct credentials", () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: "admin" } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "1234" } });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.getByText(/Valid credentials/i)).toBeInTheDocument();
    
});

});