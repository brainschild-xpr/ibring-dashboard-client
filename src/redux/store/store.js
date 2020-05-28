import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/root.reducer'
// import logger from 'react-logger'
import thunk from 'redux-thunk'

// import initialDriverState from '../initialState'

const middleware = thunk 

const store = createStore(rootReducer,
    // applyMiddleware(middleware)
    compose(
        applyMiddleware(middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

    )
)

export default store