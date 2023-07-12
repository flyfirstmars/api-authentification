import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from "../../pages/SignIn";

test("renders sign form", () => {
    const { getByLabelText } = render(<Router><SignIn /></Router>);

    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/password/i)).toBeInTheDocument();
});

test("updates on change", () => {
    const { getByLabelText } = render(<Router><SignIn /></Router>);

    fireEvent.change(getByLabelText(/email/i), {
        target: { value: "test@example.com" },
    });
    fireEvent.change(getByLabelText(/password/i), {
        target: { value: "password" },
    });

    expect(getByLabelText(/email/i).value).toBe("test@example.com");
    expect(getByLabelText(/password/i).value).toBe("password");
});

