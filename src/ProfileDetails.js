import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import axios from 'axios'

//This Component is a child Component of Profile Component
export default class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val)
    }
  }

  //Function to Load the ProfileDetails data from api call .
  getCustomerDetails() {
    axios.get('https://randomuser.me/api/').then(response => {
      this.setState({ ProfileDetails: response })
    })
  };

  render() {
    if (!this.state.ProfileDetails)
      return (<p>Loading Data</p>)
    return (<div>
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">User Profile Details</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 text-right">
                <img src={this.state.ProfileDetails.data.results[0].picture.large} alt="Profile-img" width="200" height="250"></img>
              </div>
              <div className="col-sm-6 text-left">
                <p><b>Name : </b>{this.state.ProfileDetails.data.results[0].name.title + `. ` + this.state.ProfileDetails.data.results[0].name.first + ` ` + this.state.ProfileDetails.data.results[0].name.last}</p>
                <p><b>UserName : </b> {this.state.ProfileDetails.data.results[0].login.username}</p>
                <p><b>Address : </b>{this.state.ProfileDetails.data.results[0].location.street.name + `,` + this.state.ProfileDetails.data.results[0].location.street.number + `,` + this.state.ProfileDetails.data.results[0].location.city + `,` + this.state.ProfileDetails.data.results[0].location.state + `,` + this.state.ProfileDetails.data.results[0].location.country + `,` + this.state.ProfileDetails.data.results[0].location.postcode}</p>
                <p><b>Email : </b>{this.state.ProfileDetails.data.results[0].email}</p>
                <p><b>Phone : </b>{this.state.ProfileDetails.data.results[0].phone}</p>
              </div>
            </div>
          </div><br></br>
          <Button bsStyle="info" onClick={() => this.getCustomerDetails()} >
            Fetch Random User Detail
          </Button>
        </Panel.Body>
      </Panel>
    </div>)
  }
}