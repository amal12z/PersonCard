import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class PersonCard extends Component {
    constructor(props){ //** 
        super(props) // **
        this.buttonEvent = this.buttonEvent.bind(this); // ** 
    }

    /* This function is like Empty function .. every time we need to use this component we 
    need deffrent functionalty from this button 
    so : we will provide the vlaue of this function in App.js (where we collect all of our components in or page)
    in this class we just need to provide empty template that recev logic from another 
    */


    buttonEvent(){
        this.props.buttonLogic(this.props.id) /* it the App function we need to write the logic of this function when we need this card in our component */
    }

    render() {
        const {changeAge, firstName, lastName , age , hairColor} = this.props; 
        return (
            <>
            <div className='d-flex justify-content-center'>
            <div className='col-8 bg-light m-4 p-5 rounded'>
                <h1 className='mb-4'><span className="text-info">{firstName}, {lastName}</span></h1>
                <h5 className="text-dark">Age : <span className="text-info">{age}</span></h5>
                <h6 className="text-dark">Hair Color : <span className="text-info">{hairColor}</span></h6>
                <button onClick={this.buttonEvent} className="btn btn-info mt-4 rounded-pill">Birthday Button for {firstName} {lastName}</button>
            </div>
            </div>
            </>
        )
    }
}
    
export default PersonCard;