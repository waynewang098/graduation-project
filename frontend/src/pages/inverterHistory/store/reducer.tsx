import * as constants from './constants'
const defaultState = {
  inverterName: 'inverter1',
  tableData: [],
  pageNo: 1,
  pageSize: 10,
  totalSize: 0,
  inverterId: 4
}
const reducer = (state = defaultState, action: any) => {
  switch(action.type) {
    case constants.CHANGE_INVERTER_NAME: {
      const newState = JSON.parse(JSON.stringify(state))
      newState.inverterName = action.inverterName
      return newState
    }
    case constants.CHANGE_TABLE_DATA: {
      const newState = JSON.parse(JSON.stringify(state))
      newState.tableData = action.tableData
      newState.totalSize = action.totalSize
      return newState
    }
    default: break
  }
  return state
}

export default reducer