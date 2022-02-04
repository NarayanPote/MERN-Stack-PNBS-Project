import {
    ANJALI_CREATE_FAIL,
    ANJALI_CREATE_REQUEST,
    ANJALI_CREATE_SUCCESS,
    ANJALI_DELETE_FAIL,
    ANJALI_DELETE_REQUEST,
    ANJALI_DELETE_SUCCESS,
    ANJALI_LIST_FAIL,
    ANJALI_LIST_REQUEST,
    ANJALI_LIST_SUCCESS,
    ANJALI_UPDATE_FAIL,
    ANJALI_UPDATE_REQUEST,
    ANJALI_UPDATE_SUCCESS,
  } from '../constants/anjaliConstants';
  
  
  
  export const anjaliListReducer = (state = { notes: [] }, action) => {
    // console.log(state, '=====', action);
    switch (action.type) {
      case ANJALI_LIST_REQUEST:
        return { loading: true };
      case ANJALI_LIST_SUCCESS:
        return { loading: false, notes: action.payload };
      case ANJALI_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  export const anjaliCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case ANJALI_CREATE_REQUEST:
        return { loading: true };
      case ANJALI_CREATE_SUCCESS:
        return { loading: false, success: true };
      case ANJALI_CREATE_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  export const anjaliUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case ANJALI_UPDATE_REQUEST:
        return { loading: true };
      case ANJALI_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case ANJALI_UPDATE_FAIL:
        return { loading: false, error: action.payload, success: false };
  
      default:
        return state;
    }
  };
  export const anjaliDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case ANJALI_DELETE_REQUEST:
        return { loading: true };
      case ANJALI_DELETE_SUCCESS:
        return { loading: false, success: true };
      case ANJALI_DELETE_FAIL:
        return { loading: false, error: action.payload, success: false };
  
      default:
        return state;
    }
  };
  