import { createStore, applyMiddleware} from "redux";
import RootReducer from "./RootReducers";
import thunk from "redux-thunk";
     
const store = createStore(RootReducer,applyMiddleware(thunk));
export { store};