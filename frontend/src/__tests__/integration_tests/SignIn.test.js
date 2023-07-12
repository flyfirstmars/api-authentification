import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import userEvent from "@testing-library/user-event";
import SignIn from "../../pages/SignIn";
import {Router} from "react-router-dom";

test("renders Signin page", () => {
    const { getByText } = render(<Router><SignIn /></Router>);
    const linkElement = getByText(/Sign in to your account/i);
    expect(linkElement).toBeInTheDocument();
});

test("allows the user to sign in successfully", async () => {
    const { getByLabelText, getByText } = render(<Router><SignIn /></Router>);

    // simulate user typing
    userEvent.type(getByLabelText(/Email address/i), "test@example.com");
    userEvent.type(getByLabelText(/Password/i), "password");

    // simulate form submission
    fireEvent.click(getByText(/Enter the door/i));

    // assertion
    await waitFor(() => getByText(/Successfully signed in!/i));
});
