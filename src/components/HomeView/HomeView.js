import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class HomeView extends Component {

  componentDidMount() {
    this.props.handleNavigate('/doc.cash_moving/list');
  }

  render() {
    return <div>redirecting</div>;
  }

}

HomeView.propTypes = {
  handleNavigate: PropTypes.func.isRequired,
};
