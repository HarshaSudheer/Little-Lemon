
const BookingForm = (props) => {

    const handleDateChange = (e) => {
        props.handleChange(e)
        props.dispatch({payload: e.target.value})
    }

    return (
        <>
            <h2>Reserve a table</h2>
            <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" name="date" value={props.data.date} onChange={handleDateChange} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time"  name="time" value={props.data.time} onChange={props.handleChange}>
                    {props.availableTimes.map((availableTime) => {
                        return (
                            <option data-testid="res-time-option" key={availableTime.id}>{availableTime.time}</option>
                        )
                    })}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" name="number" min="1" max="10" id="guests" value={props.data.number} onChange={props.handleChange} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occasion" value={props.data.occasion} onChange={props.handleChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </>
    )
}

export default BookingForm