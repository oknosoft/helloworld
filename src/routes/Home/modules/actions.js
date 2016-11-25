import $p from 'metadata'

// ------------------------------------
// Actions
// ------------------------------------


function handleMarkDeleted(row, _mgr){

  return function (dispatch, getState) {
  	_mgr.get(row.ref, 'promise')
      .then(doc => doc.mark_deleted(true))
      .then(dispatch($p.rx_actions.POUCH_SYNC_DATA('doc', true)))
      .catch(err => console.log(err))
  }
}

function handleEdit(row, _mgr){

	return function (dispatch, getState) {
		$p.rx_actions.handleLocationChange('doc_calc_order/'+row.ref)
	}
}

/**
 * Генераторы действий
 */
export const actions = {

  handleEdit,
  handleRevert: $p.rx_actions.OBJ_REVERT,
  handlePost: $p.rx_actions.obj_post,
  handleUnPost: $p.rx_actions.obj_unpost,
  handlePrint(){},
  handleAttachment(){},

  handleMarkDeleted

}
