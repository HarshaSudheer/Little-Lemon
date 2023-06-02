import { useState, useReducer } from "react"
import { fetchAPI, submitAPI } from "../utils/api"
import { useNavigate } from "react-router-dom"
import BookingForm from "./BookingForm"

const updateTimes = (state, action) => {
    const newState = fetchAPI(new Date(action.payload));
    return (newState)
}

const BookingPage = () => {
    const navigate = useNavigate();
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

    const handleChange = (e) => {
        setData(prevData => {
            const { name, value } = e.target
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        submitAPI(data)
        navigate("/confirm-booking")
    }

    return (
        <BookingForm data={data} availableTimes={availableTimes} handleChange={handleChange} dispatch={dispatch} submitForm={submitForm}/>
    )
}

export default BookingPage