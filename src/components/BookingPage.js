import { useState, useReducer } from "react"
import { fetchAPI } from "../utils/api"
import BookingForm from "./BookingForm"

const updateTimes = (state, action) => {
    const newState = fetchAPI(new Date(action.payload));
    state = [...newState]
    return (state)
}

const BookingPage = () => {
    const [data, setData] = useState(
        {
            date: "",
            time: "",
            number: "1",
            occasion: ""
        }
    );

    const initializeTimes = () => {
        return (fetchAPI(new Date()))
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())

    function handleChange(e) {
        setData(prevData => {
            const { name, value } = e.target
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    return (
        <BookingForm data={data} availableTimes={availableTimes} handleChange={handleChange} dispatch={dispatch} />
    )
}

export default BookingPage