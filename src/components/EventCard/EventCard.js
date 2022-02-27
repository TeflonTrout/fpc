import React from 'react'
import styles from "./EventCard.module.css"
import Moment from "react-moment"
import placeholder from "../../images/shine.png"

const EventCard = (props) => {
    function concatName(name) {
        if(name.length > 20) {
            return `${name.slice(0,20)}...`
        } else {
            return name
        }
    }

  return (
    <a href={`https://smash.gg/${props.event.slug}`} target="_blank" rel='noreferrer' >
        <div className={styles['event-card']}>
            {props.event?.images[0]?.url === undefined 
            ? <div style={{
                backgroundImage: `url(${placeholder})`,  
                height: '200px',
                width: '200px',
                backgroundPosition: "center",
                backgroundSize: "200px",
                backgroundRepeat: 'no-repeat'
                }}
                className={styles['placeholder-image']}>
                <h1>No Image</h1>
            </div>
            : <img src={props.event?.images[0]?.url} alt="event_logo" /> }
            <div className={styles['description']}>
                <h1>{concatName(props.event.name)}</h1> 
                <h3>{props.event.city}, {props.event.addrState}</h3>
                <h3><Moment unix format='MMMM Do'>{props.event.startAt}</Moment> - <Moment unix format="MMMM Do">{props.event.endAt}</Moment> <Moment unix format='YYYY'>{props.event.startAt}</Moment></h3>
            </div>
            <h3 className={styles['attendees']}>
                Attendees:
                <p>{props.event.numAttendees !== null ? props.event.numAttendees : "TBD"}</p>
            </h3>
        </div>
    </a>
  )
}

export default EventCard