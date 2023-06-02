import { render, screen, fireEvent } from "@testing-library/react"
import BookingPage from './BookingPage'

test('Renders the BookingForm heading', () => {
    render(<BookingPage />)
    const headingElement = screen.getByText("Reserve a table")
    expect(headingElement).toBeInTheDocument()
})

test("The time selector options are displayed correctly", () => {
    render(<BookingPage />)
    let options = screen.getAllByTestId("res-time-option")
    expect(options[0].value).toBe("17:00")
    expect(options[1].value).toBe("18:00")
    expect(options[2].value).toBe("19:00")
    expect(options[3].value).toBe("20:00")
    expect(options[4].value).toBe("21:00")
    expect(options[5].value).toBe("22:00")
});

test("Updates the time selector options correctly on selecting a date with even day of week", () => {
    render(<BookingPage />);
    const datePicker = screen.getByLabelText(/Choose date/)
    fireEvent.change(datePicker, { target: { value: "2023-03-05" } })
    let options = screen.getAllByTestId("res-time-option")
    expect(options[0].value).toBe("17:00")
    expect(options[1].value).toBe("18:00")
    expect(options[2].value).toBe("19:00")
    expect(options[3].value).toBe("20:00")
    expect(options[4].value).toBe("21:00")
    expect(options[5].value).toBe("22:00")
});

test("Updates the time selector options correctly on selecting a date with odd day of week", () => {
    render(<BookingPage />);
    const datePicker = screen.getByLabelText(/Choose date/)
    fireEvent.change(datePicker, { target: { value: "2023-04-05" } })
    let options = screen.getAllByTestId("res-time-option")
    expect(options[0].value).toBe("17:30")
    expect(options[1].value).toBe("18:30")
    expect(options[2].value).toBe("19:30")
    expect(options[3].value).toBe("20:30")
    expect(options[4].value).toBe("21:30")
    expect(options[5].value).toBe("22:30")
});