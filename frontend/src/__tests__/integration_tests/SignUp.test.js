import {render, fireEvent, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import SignUp from "../../pages/SignUp";
import userEvent from "@testing-library/user-event";
import {BrowserRouter as Router} from "react-router-dom";


test("renders SignUp page", () => {
    const {getByText} = render(<Router><SignUp/></Router>);
    const linkElement = getByText(/Create your account/i);
    expect(linkElement).toBeInTheDocument();
});

test("allows the user to sign up successfully", async () => {
    const {getByLabelText, getByText} = render(<Router><SignUp/></Router>);

    // simulate user typing
    userEvent.type(getByLabelText(/Full Name/i), "Test User");
    userEvent.type(getByLabelText(/Email address/i), "test@example.com");
    userEvent.type(getByLabelText(/Password/i), "password");

    // simulate form submission
    fireEvent.click(getByText(/Sign Up/i));

    // assertion
    await waitFor(() => getByText(/Successfully signed up!/i));
});
