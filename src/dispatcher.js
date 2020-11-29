import React from 'react';
import InpUT from './input';
import {connect} from "react-redux";


class Dispatcher extends React.Component {
    
    onClickHANdler() {
        console.log("Clicked");
        this.countDispatcher();
    }

    render() {
        // return <InpUT type="submit" onClick={this.countDispatcher} value={this.props.counter} />
        return (
                <React.Fragment>
                    <div className="row"> 
                        <input type="text" value={this.props.counter} disabled ></input>
                    </div>
                    <div className="row">
                        <input type="submit" onClick={this.props.countDispatcher} value={this.props.counter}></input>
                    </div>
                    <div className="row">
                        <input type="submit" onClick={this.props.loginDispatcher}></input>
                        <input type="text" value={this.props.isLoggedIn}></input>
                    </div>
                </React.Fragment>
                )
    }

}

function mapStateToProps (state) {
    return {
        counter : state.counter,
        isLoggedIn : state.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        countDispatcher : () => dispatch({ type : 'INCREMENT'}),
        loginDispatcher : () => dispatch({ type : 'LOGGEDIN' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dispatcher);