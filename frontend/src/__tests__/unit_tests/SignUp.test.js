import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SignUp from "../../pages/SignUp";

test("renders sign up form", () => {
    const { getByLabelText } = render(<Router><SignUp /></Router>);

    expect(getByLabelText(/full name/i)).toBeInTheDocument();
    expect(getByLabelText(/contact address/i)).toBeInTheDocument();
    expect(getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/password/i)).toBeInTheDocument();
    expect(getByLabelText(/birth date/i)).toBeInTheDocument();
});

test("updates on change", () => {
    const { getByLabelText } = render(<Router><SignUp /></Router>);

    fireEvent.change(getByLabelText(/full name/i), {
        target: { value: "Test User" },
    });
    fireEvent.change(getByLabelText(/contact address/i), {
        target: { value: "Test Address" },
    });
    fireEvent.change(getByLabelText(/phone number/i), {
        target: { value: "1234567890" },
    });
    fireEvent.change(getByLabelText(/email/i), {
        target: { value: "test@example.com" },
    });
    fireEvent.change(getByLabelText(/password/i), {
        target: { value: "password" },
    });
    fireEvent.change(getByLabelText(/birth date/i), {
        target: { value: "2000-01-01" },
    });

    expect(getByLabelText(/full name/i).value).toBe("Test User");
    expect(getByLabelText(/contact address/i).value).toBe("Test Address");
    expect(getByLabelText(/phone number/i).value).toBe("1234567890");
    expect(getByLabelText(/email/i).value).toBe("test@example.com");
    expect(getByLabelText(/password/i).value).toBe("password");
    expect(getByLabelText(/birth date/i).value).toBe("2000-01-01");
});