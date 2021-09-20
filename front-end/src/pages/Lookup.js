import React, { Component } from 'react';
import WhoIsRecord from '../components/WhoIsRecord'

// TODO Change back to dynamic
class LookupPage extends Component {
  render() {
    return (
        <div>
            <WhoIsRecord domainName={this.props.location.state.domainName}></WhoIsRecord>   
        </div>
    );
  }
}

export default LookupPage;