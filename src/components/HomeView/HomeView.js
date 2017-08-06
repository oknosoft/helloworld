/** @flow */
import React, {Component} from 'react';
import DataList from 'metadata-react-ui/DataList';

export default class HomeView extends Component {

  render() {
    const {props, context} = this;

    return <DataList {...props} _mgr={$p.doc.cash_moving}/>;
  }
}
