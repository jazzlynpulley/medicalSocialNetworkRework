import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from 'axios';
//import { addFriend } from  "../../actions/authActions";

class Dashboard extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  
  onFriendClick = e => {
   e.preventDefault();
  var person = prompt("Please enter your new friends name:", " ENTER HERE");
  const { user } = this.props.auth;
   
  const obj = {
            friends: user.friends.push(", " + person) 
        };
        console.log(obj);
        axios.post('http://localhost:3000/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        this.props.history.push('/dashboard'); 
       
  };
  
render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
                </p>
		<p>
		 Friends list 
		</p>
   		{user.friends}
		
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
 	    
	    <button
              style={{
                marginLeft: "10px",
		width: "150px",
                borderRadius: "4px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onFriendClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Friend 
            </button>

          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
