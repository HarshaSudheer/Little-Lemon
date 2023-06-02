export const fetchAPI = (date) => {
    let times = [];
    console.log(date.getDay())
    if(date.getDay() % 2 === 0){
        times = [
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
    }
    else{
        times = [
            {
                id: 1,
                time: "17:30"
            },
            {
                id: 2,
                time: "18:30"
            },
            {
                id: 3,
                time: "19:30"
            },
            {
                id: 4,
                time: "20:30"
            },
            {
                id: 5,
                time: "21:30"
            },
            {
                id: 6,
                time: "22:30"
            },
        ]
    }

    return(times)
}