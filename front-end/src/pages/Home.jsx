import React, { Component } from 'react';
import '../css/home.css';

class HomePage extends Component {

    handleClick = (event) => {
        event.preventDefault();
        let domainName = event.target[0].value
        this.props.history.push({ 
            pathname: '/lookup',
            state: {domainName: domainName},
        });
    }

  render() {
    return (
        <div className="home-page" >
            <h1>WHOIS Lookup</h1>
            <form onSubmit={this.handleClick}>
                <div className="form-group">
                    <input type="whois" id="whois-input" className="form-control" aria-describedby="emailHelp" placeholder="Enter a domain name or IP address to lookup"/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
  }
}

export default HomePage;