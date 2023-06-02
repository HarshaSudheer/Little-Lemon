import { useState, useReducer } from "react"
import BookingForm from "./BookingForm"

const updateTimes = (state, action) => {
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
        return (
            [
                {
                    id: 1,
                    time: "17:00"
                },
                {
                    id: 2,
                    time: "18:00"
                },
                {
                    id: 3,
                    time: "19:00"
                },
                {
                    id: 4,
                    time: "20:00"
                },
                {
                    id: 5,
                    time: "21:00"
                },
                {
                    id: 6,
                    time: "22:00"
                },
            ]
        )
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