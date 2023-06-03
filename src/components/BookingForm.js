
const BookingForm = (props) => {

    const handleDateChange = (e) => {
        props.handleChange(e)
        props.dispatch({payload: e.target.value})
    }

    return (
        <section className="reserve-form">
            <h2>Reserve a table</h2>
            <form onSubmit={props.submitForm}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" data-testid="date-input" id="res-date" name="date" value={props.data.date} onChange={handleDateChange} />
                <label htmlFor="res-time">Choose time</label>
                <select data-testid="time-input" id="res-time"  name="time" value={props.data.time} onChange={props.handleChange}>
                    <option>Select an time</option>
                    {props.availableTimes && props.availableTimes.map((availableTime) => {
                        return (
                            <option data-testid="res-time-option" key={availableTime.id}>{availableTime.time}</option>
                        )
                    })}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" data-testid="number-input" name="number" min="1" max="10" id="guests" value={props.data.number} onChange={props.handleChange} />
                <label htmlFor="occasion">Occasion</label>
                <select data-testid="occasion-input" id="occasion" name="occasion" value={props.data.occasion} onChange={props.handleChange}>
                    <option>Select an occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input data-testid="submit-btn" type="submit" disabled={props.isSubmitDisabled} value="Make Your reservation" aria-label="On Click"/>
            </form>
        </section>
    )
}

export default BookingForm