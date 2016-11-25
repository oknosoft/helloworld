import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../modules/datalist.js'
import DynList from 'metadata-react-ui/src/DataList'
import $p from 'metadata'

export default connect(mapStateToProps, mapDispatchToProps)(DynList)