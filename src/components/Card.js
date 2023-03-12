import React from "react"
import location from "../assets/images/location.png"
import "../components/Card.css"


function Card(props) {
    // console.log(props)
    return (
        <div>
            <div className="card">
                <img id="card--image" src={props.item.imageUrl} alt="location" />
                <div>
                    <div className="location">
                        <img src={location} width={"17px"} alt="" />
                        <p className="push--right">{props.item.location}</p>
                        <a className="links" href={props.item.googleMapsUrl}>{props.item.googleMapsUrl}</a>
                    </div>
                    <h1>{props.item.title}</h1> <br />
                    <h3>{props.item.startDate} - {props.item.endDate}</h3> <br />
                    <p className="description">{props.item.description}</p>
                </div>
            </div>
            <hr className='line'></hr>
        </div>

    )
}

export default Card


// Title
// Location
// Google Maps
// Link
// Start Date
// End Date
// Description
// Image URL

// Use .map() and props
// styled and polished
