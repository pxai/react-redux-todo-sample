import React from 'react';


var PrintScreen = React.createClass({
    getInitialState() {
        return ({ });
    },
    handleNextClick(event) {
        //event.preventDefault();
        var formData = {};
        this.props.stepForward(formData);
        console.log('Field was updated');
    },
    render() {
        return(<form>
            <button className="btn btn-success" onClick={this.handleNextClick}>Print Screen</button>
        </form>);
    }
});

export default PrintScreen;
