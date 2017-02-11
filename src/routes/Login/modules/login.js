import $p from "metadata";

const {rx_actions, wsql, aes, adapters} = $p;

// ------------------------------------
// Actions
// ------------------------------------
function handleLogin(login, password) {
	return rx_actions.USER_TRY_LOG_IN(adapters.pouch, login, password)
}

function handleLogOut() {
	return rx_actions.USER_LOG_OUT(adapters.pouch)
}

function handleSetPrm(attr) {
	for (var key in attr) {
		wsql.set_user_param(key, attr[key]);
	}
	return rx_actions.PRM_CHANGE(attr)
}

export const actions = {

	handleLogin,
	handleLogOut,
	handleSetPrm,

	handleSave: rx_actions.OBJ_SAVE,
	handleRevert: rx_actions.OBJ_REVERT,
	handleMarkDeleted: rx_actions.obj_mark_deleted,
	handlePost: rx_actions.obj_post,
	handleUnPost: rx_actions.obj_unpost,
	handlePrint(){
	},
	handleAttachment(){
	},
	handleValueChange: rx_actions.OBJ_VALUE_CHANGE,
	handleAddRow: rx_actions.OBJ_ADD_ROW,
	handleDelRow: rx_actions.OBJ_DEL_ROW,

}

export const mapStateToProps = (state, props) => ({

	login: wsql.get_user_param("user_name"),
	password: aes.Ctr.decrypt(wsql.get_user_param("user_pwd")),

	state_user: state.meta.user,

	_obj: $p.current_user,
	_mgr: $p.cat.users,
	_acl: 'e',

	zone: wsql.get_user_param("zone"),
	couch_path: wsql.get_user_param("couch_path"),
	couch_suffix: wsql.get_user_param("couch_suffix") || "",
	couch_direct: !!wsql.get_user_param("couch_direct"),
	enable_save_pwd: !!wsql.get_user_param("enable_save_pwd"),

})
