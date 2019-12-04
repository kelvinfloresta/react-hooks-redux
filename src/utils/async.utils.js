import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

export function useRedux(fn, formName, type = { LOADING: 'LOADING', ERROR: 'ERROR', SUCCESS: 'SUCCESS' }) {
    const dispatch = useDispatch()
    const form = useSelector(state => state[formName])
    const [promise] = useState(fn)

    useEffect(() => {
        fetch(dispatch, type, promise)
    }, [dispatch, type, promise])

    async function fetch(dispatch, type, promise) {
        dispatch({ type: type.LOADING })
        const [error, data] = await to(promise())
        dispatch({ type: type.LOADING })
        if (error) {
            return dispatch({ type: type.ERROR, error })
        }
        return dispatch({ type: type.SUCCESS, data })
    }

    function onChange(e) {
        const { target: { name, value } } = e
        dispatch({ type: type.CHANGE, name, value })
    }

    return [form, onChange]
}

export async function to(promise) {
    try {
        const response = await promise
        return [null, response]
    } catch (error) {
        return [error, null]
    }
}
