import { render, screen, fireEvent } from "@testing-library/react"
import App from './App'

test('Renders the BookingForm heading', () => {
    render(<App />)
    const reserveBtn = screen.getByTestId("reserve-btn")
    fireEvent.click(reserveBtn)
    const submitBtn = screen.getByTestId("submit-btn")
    fireEvent.click(submitBtn)
    const confirmMsg = screen.getByText("Your booking has been confirmed")
    expect(confirmMsg).toBeInTheDocument()
})