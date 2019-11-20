import React, {Component} from 'react';

class Auth extends Component {
    render() {
        const {match} = this.props;
        return (
            <div>
                <h2>Auth {match.params.name}</h2>
            </div>
        );
    }
}

export default Auth;