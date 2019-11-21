import React, {Component} from 'react';
import queryString from 'query-string';

class Auth extends Component {
    render() {
        const {location, match} = this.props;
        const query = queryString.parse(location.search);

        const detail = query.detail === 'true';

        return (
            <div>
                <h2>Auth {match.params.name}</h2>
                {detail && 'detail: blahblah'}
            </div>
        );
    }
}

export default Auth;