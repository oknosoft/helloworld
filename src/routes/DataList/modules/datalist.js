import $p from 'metadata'
import { LOCATION_CHANGE } from 'react-router-redux'

/**
 * Отображение свойств на связанные генараторы действий.
 */
export function mapDispatchToProps(dispatch) {
  return {
    handleAdd: function() {
      $p.doc.cash_moving.create().then((newDocument) => {
        newDocument._set_loaded();

        dispatch({
          type: LOCATION_CHANGE,
          payload: {
            pathname: 'doc_calc_order/' + newDocument.ref,
            search: '',
            hash: ''
          }
        });
      });
    },

    handleEdit: function (selectedDocument) {
      dispatch({
        type: LOCATION_CHANGE,
        payload: {
          pathname: 'doc_calc_order/' + selectedDocument.ref,
          search: '',
          hash: ''
        }
      });
    },

    handleRevert:      () => dispatch($p.rx_actions.OBJ_REVERT),
    handleMarkDeleted: () => dispatch($p.rx_actions.obj_mark_deleted),
    handlePost:        () => dispatch($p.rx_actions.obj_post),
    handleUnPost:      () => dispatch($p.rx_actions.obj_unpost),
    handlePrint:       () => {},
    handleAttachment:  () => {}
  };
}

export function mapStateToProps(state, props) {
  return {
    meta: state.meta,
    _mgr: $p.md.mgr_by_class_name(props.params.meta),
    _acl: 'e'
  };
}