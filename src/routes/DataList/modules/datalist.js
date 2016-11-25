import $p from 'metadata'

/**
 * Генераторы действий
 */
export const actions = {

  handleEdit: (row, _mgr) => (() => {
	  $p.rx_actions.handleLocationChange(_mgr.class_name.replace('.', '_') + '/' + row.ref)
  }),

  handleAdd: (_mgr) => (() => {
  	_mgr.create()
	    .then(_obj => {
	    	_obj._set_loaded()
		    $p.rx_actions.handleLocationChange(_obj._manager.class_name.replace('.', '_') + '/' + _obj.ref)
	    })
  }),

  handleRevert: $p.rx_actions.OBJ_REVERT,
  handleMarkDeleted: $p.rx_actions.obj_mark_deleted,
  handlePost: $p.rx_actions.obj_post,
  handleUnPost: $p.rx_actions.obj_unpost,
  handlePrint(){},
  handleAttachment(){}
}

export const mapStateToProps = (state, props) => ({

  state_user: state.meta.user,
  user: $p.current_user,

})
