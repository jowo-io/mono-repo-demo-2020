import React from "react";
import PropTypes from "prop-types";

import Number from "@components/Number";

class App extends React.Component {
    state = { data: [] };

    componentDidMount() {
        fetch("http://localhost:4000")
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({ data });
            });
    }

    render() {
        return (
            <div className="App">
                <Number num={123} />
                <Number num="foo bar" />
                {this.state.data.map(num => (
                    <Number key={num} num={num} />
                ))}
            </div>
        );
    }
}

App.propTypes = {
    // Required
    // ...
    // Optional
    // ...
};

export default App;
