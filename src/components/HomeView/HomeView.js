/** @flow */
import React, {Component, PropTypes} from "react";
import MetaComponent from "metadata-ui/common/MetaComponent";
import DataList from "metadata-ui/DataList";

export default class HomeView extends MetaComponent {

  static propTypes = {
  }

  render() {
    const {props, context} = this
    const {$p} = context

    return <DataList { ...props } _mgr={$p.doc.cash_moving} />
  }
}
