import React from 'react'
import Card from '../Card/Card'
import './Reservations.css'

const Reservations = ({ reservations }) => {

    const reservationGuests = reservations.map(res => {
        return (
                <Card 
                    name={res.name}
                    date={res.date}
                    time={res.time}
                    number={res.number}
                    id={res.id}
                    key={res.id}
                />
        )
    })
    return (
        <div className='reservations-container'>
            {reservationGuests}
        </div>
    )
}

export default Reservations