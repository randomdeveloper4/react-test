import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class InnerComponent extends React.Component {

    render() {
        return (
            <div>

                HIIIIIIIIIIII
                <div className="row">
                    <div className="col-4">
                    <Link to="/home">HOME</Link>

                    </div>
                    <div className="col-4">
                    <Link to="/routeFirst/innerLinkOne">Link 1</Link>

                    </div>
                    <div className="col-4">
                    <Link to="/routeFirst/innerLinkTwo">Link 2</Link>

                    </div>
                </div>

                <Switch>

                <Route path="/routeFirst/innerLinkOne"> Inner Link One Content </Route>
                <Route path="/routeFirst/innerLinkTwo"> Inner Link Two Content </Route>
                </Switch>

            </div>
        );
    }
}

export default InnerComponent;