import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import seashellImg from './../assets/images/seashell.jpg'
import {Link} from 'react-router-dom'
import Grid from 'material-ui/Grid'
import auth from './../auth/auth-helper'
import FindPeople from './../user/FindPeople'
import Newsfeed from './../post/Newsfeed'

class Home extends Component {
  state = {
    defaultPage: true
  }
  init = () => {
    if(auth.isAuthenticated()){
      this.setState({defaultPage: false})
    }else{
      this.setState({defaultPage: true})
    }
  }
  componentWillReceiveProps = () => {
    this.init()
  }
  componentDidMount = () => {
    this.init()
  }
  render() {

    return (
      <div>
        {this.state.defaultPage &&
          <Grid container spacing={24}>
            <Grid item xs={12}>
            <a href="https://github.com/jazzlynpulley/medicalSocialNetworkRework">Checkout our github!</a> 
            </Grid>
          </Grid>
        }
        {!this.state.defaultPage &&
          <Grid container spacing={24}>
            <Grid item xs={8} sm={7}>
              <Newsfeed/>
            </Grid>
            <Grid item xs={6} sm={5}>
              <FindPeople/>
            </Grid>
          </Grid>
        }
      </div>
    )
  }
}

export default (Home)

/*
notes from Matt
upload a document -- Top priority
see only other patients, if doctor vice versa
*/
