import { render, screen } from "@testing-library/react"
import BookingForm from './BookingForm'

test('Renders the BookingForm heading', () => {
    render(<BookingForm data={{}} availableTimes={{}} handleChange={{}} dispatch={{}}/>)
    const headingElement = screen.getByText("Reserve a table")
    expect(headingElement).toBeInTheDocument()
})
