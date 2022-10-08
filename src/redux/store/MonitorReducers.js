
const MonitorReducerEnhancer =
    createStore => (reducer, initialState, enhancer) => {
        const monitoredReducer = (state, action) => {
            const newState = reducer(state, action)
            // console.log('reducer process time:', diff)
            return newState
        }

        return createStore(monitoredReducer, initialState, enhancer)
    }

export default MonitorReducerEnhancer