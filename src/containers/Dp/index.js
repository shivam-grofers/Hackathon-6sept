import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Test, ApiCall, postApiCall } from './actions.js';
import styles from './styles.scss';
import CircularProgress from '@material-ui/core/CircularProgress';


class Dp extends Component {
  render() {
    console.log("props :", this.props);
    return (
      <div>
        {this.props.visibility &&
          <div className="full-loader">
            <div className="relative">
              <div className="abs" id='full-screen-loader-wrapper'>
                <CircularProgress size={50} thickness={5} />
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  test: state.postReducer.test,
  response: state.postReducer.response,
  Postresponse: state.postReducer.Postresponse,
  visibility: state.postReducer.visibility
})

export default connect(mapStateToProps, { Test, ApiCall, postApiCall })(Dp);

