import React from "react";


class Box extends React.Component {

    renderHeart() {
        if (this.props.unit === "bpm") {
            return (<input type="range"
                min={this.props.heartMin}
                max={this.props.heartMax}
                value={this.props.heart}
                onChange={this.props.onHeartChange} />)
        }
    }
    renderSteps() {
        if (this.props.unit === "steps") {
            return (<input type="range"
                min={this.props.stepsMin}
                max={this.props.stepsMax}
                value={this.props.steps}
                onChange={this.props.onStepsChange} />)
        }
    }
    renderTemp() {
        if (this.props.unit === "°C") {
            return (<input type="range"
                min={this.props.tempMin}
                max={this.props.tempMax}
                value={this.props.temp}
                onChange={this.props.onTempChange} />)
        }
    }

    render() {
            return (
                <div className="box col-sm-3 col-6">
                    <span className="material-icons" style={{ fontSize: 100, color: this.props.color }}>
                        {this.props.icon}
                    </span>
                    <p>{this.props.value} {this.props.unit} </p>
                    {this.renderHeart()}
                    {this.renderSteps()}
                    {this.renderTemp()}

                </div>
            );
        
    }
}

export default Box;

