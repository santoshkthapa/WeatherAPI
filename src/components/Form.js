import React from "react";

class Form extends React.Component{
    render(){
        return (
            <form onSubmit={this.props.getWeather}>
                <input type = "test" name = "city" placeholder = "City..."/>
                <input type = "test" name = "country" placeholder = "Country..."/>
                <button>Get Weather</button>
            </form>
        );
    }

};

export default Form;