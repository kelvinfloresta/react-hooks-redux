import { loadingReducer, errorReducer, successReducer, changeReducer } from "./reducer"

export const UserType = {
  LOADING: 'user/LOADING',
  ERROR: 'user/ERROR',
  SUCCESS: 'user/SUCCESS',
  CHANGE: 'user/CHANGE',
}

const INITIAL_STATE = { data: { nome: '', sobrenome: '' } }

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UserType.LOADING:
      return loadingReducer(state)
    case UserType.ERROR:
      return errorReducer(state, action.error)
    case UserType.SUCCESS:
      return successReducer(state, action.data)
    case UserType.CHANGE:
      return changeReducer(state, { name: action.name, value: action.value })
    default:
      return state
  }
}
