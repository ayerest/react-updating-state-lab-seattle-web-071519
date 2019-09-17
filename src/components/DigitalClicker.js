// Code DigitalClicker Component Here

import React from 'react'

class DigitalClicker extends React.Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }   
    }

    // incrementClicker = async () => {
    //     await this.setState({
    //         timesClicked: parseInt(this.state.timesClicked + 1)
    //     })
        
    // }

    incrementClicker =  () => {
         this.setState({
            timesClicked: parseInt(this.state.timesClicked + 1)
        })

    }

    render() {
        return (
            <div>
                <button onClick={this.incrementClicker}>{this.state.timesClicked}</button>
            </div>
        )
    }

}

export default DigitalClicker;
