
export const loadingReducer = (state) => ({ ...state, loading: true, hasError: false, error: null })
export const errorReducer = (state, error) => ({ ...state, hasError: true, loading: false, error })
export const successReducer = (state, data) => ({ ...state, hasError: false, error: null, loading: false, data })
export const changeReducer = (state, { name, value }) => ({ ...state, data: { ...state.data, [name]: value } })
