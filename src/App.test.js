import { render, screen, fireEvent } from "@testing-library/react"
import App from './App'

test('Submit button is disabled when inputs', () => {
    render(<App />)
    const reserveBtn = screen.getByTestId("reserve-btn")
    fireEvent.click(reserveBtn)
    const submitBtn = screen.getByTestId("submit-btn")
    expect(submitBtn).toBeDisabled()
})

test('Renders the confirmed booking message when valid inputs are submitted', () => {
    render(<App />)
    let date = new Date();
    date.setDate(date.getDate() + 1);
    fireEvent.change(screen.getByTestId("date-input"), {target: {value: date.toISOString().split('T')[0]}})
    fireEvent.change(screen.getByTestId("time-input"), {target: {value: "17:00"}})
    fireEvent.change(screen.getByTestId("number-input"), {target: {value: "2"}})
    fireEvent.change(screen.getByTestId("occasion-input"), {target: {value: "Birthday"}})
    const submitBtn = screen.getByTestId("submit-btn")
    fireEvent.click(submitBtn)
    const confirmMsg = screen.getByText("Your booking has been confirmed")
    expect(confirmMsg).toBeInTheDocument()
})