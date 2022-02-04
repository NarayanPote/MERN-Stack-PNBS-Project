import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  anjaliCreateReducer,
  anjaliDeleteReducer,
  anjaliListReducer,
  anjaliUpdateReducer,
} from './reducers/anjaliReducers';
import {
  noteCreateReducer,
  noteDeleteReducer,
  noteListReducer,
  noteUpdateReducer,
} from './reducers/notesReducers';
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from './reducers/userReducers';

const reducers = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  noteList: noteListReducer,
  noteCreate: noteCreateReducer,
  noteUpdate: noteUpdateReducer,
  noteDelete: noteDeleteReducer,
  userUpdate: userUpdateReducer,
  anjaliList: anjaliListReducer,
  anjaliCreate: anjaliCreateReducer,
  anjaliUpdate: anjaliUpdateReducer,
  anjaliDelete: anjaliDeleteReducer,  
});
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleWare = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);
export default store;
