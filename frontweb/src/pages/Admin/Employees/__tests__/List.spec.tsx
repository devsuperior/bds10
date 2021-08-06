import { render, screen, waitFor } from "@testing-library/react";
import history from 'util/history';
import { Router } from 'react-router-dom';
import { getEmployessResponse, server } from "./fixtures";
import List from "../List";
import { hasAnyRoles } from "util/auth";
import { when } from 'jest-when';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock('util/auth', () => ({
    ...jest.requireActual('util/auth'),
    hasAnyRoles: jest.fn()
}));

describe('Employee list any user tests', () => {

    test('should render all employees', async () => {

        render(
            <Router history={history}>
                <List />
            </Router>
        );

        await waitFor(() => {
            const name0 = screen.getByText(getEmployessResponse.content[0].name);
            const mail0 = screen.getByText(getEmployessResponse.content[0].email);
            const name1 = screen.getByText(getEmployessResponse.content[1].name);
            const mail1 = screen.getByText(getEmployessResponse.content[1].email);
            const name2 = screen.getByText(getEmployessResponse.content[2].name);
            const mail2 = screen.getByText(getEmployessResponse.content[2].email);
            const name3 = screen.getByText(getEmployessResponse.content[3].name);
            const mail3 = screen.getByText(getEmployessResponse.content[3].email);

            expect(name0).toBeInTheDocument();
            expect(mail0).toBeInTheDocument();
            expect(name1).toBeInTheDocument();
            expect(mail1).toBeInTheDocument();
            expect(name2).toBeInTheDocument();
            expect(mail2).toBeInTheDocument();
            expect(name3).toBeInTheDocument();
            expect(mail3).toBeInTheDocument();
        });
    });
});

describe('Employee list ADMIN tests', () => {

    // https://stackoverflow.com/questions/41697513/can-i-mock-functions-with-specific-arguments-using-jest

    // yarn add jest-when @types/jest-when

    beforeEach(() => {
        when(hasAnyRoles).calledWith(['ROLE_ADMIN']).mockReturnValue(true);
    });

    test('should render create button', async () => {

        render(
            <Router history={history}>
                <List />
            </Router>
        );

        await waitFor(() => {
            const name0 = screen.getByText(getEmployessResponse.content[0].name);
            expect(name0).toBeInTheDocument();
        });
        
        const createButton = screen.getByText(/adicionar/i);
        expect(createButton).toBeInTheDocument();
    });
});

describe('Employee list NOT ADMIN tests', () => {

    // https://stackoverflow.com/questions/41697513/can-i-mock-functions-with-specific-arguments-using-jest

    // yarn add jest-when @types/jest-when

    beforeEach(() => {
        when(hasAnyRoles).calledWith(['ROLE_ADMIN']).mockReturnValue(false);
    });

    test('should NOT render create button', async () => {

        render(
            <Router history={history}>
                <List />
            </Router>
        );

        await waitFor(() => {
            const name0 = screen.getByText(getEmployessResponse.content[0].name);
            expect(name0).toBeInTheDocument();
        });
        
        const createButton = screen.queryByText(/adicionar/i);
        expect(createButton).not.toBeInTheDocument();
    });
});
