import axios from 'axios';
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

export const listAnjalis = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ANJALI_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    

    const { data } = await axios.get(`/api/anjalis`, config);

      console.log(data);

    dispatch({
      type: ANJALI_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ANJALI_LIST_FAIL,
      payload: message,
    });
  }
};
export const createAnjaliAction =
  ( day,
    slot1,
    slot2,
    slot3,
    slot4,
    slot5,
    slot6,
    slot7,
    slot8,
    slot9,
    slot10,
    slot11,
    slot12,
    slot13,
    slot14,
    slot15,
    slot16,
    slot17,
    slot18,
    slot19,
    slot20 ) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ANJALI_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/anjalis/create`,
        { day,
          slot1,
          slot2,
          slot3,
          slot4,
          slot5,
          slot6,
          slot7,
          slot8,
          slot9,
          slot10,
          slot11,
          slot12,
          slot13,
          slot14,
          slot15,
          slot16,
          slot17,
          slot18,
          slot19,
          slot20 },
        config
      );

      dispatch({
        type: ANJALI_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: ANJALI_CREATE_FAIL,
        payload: message,
      });
    }
  };
export const updateNoteAction =
  (id, days, pack, amount, coupan) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ANJALI_UPDATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/notes/${id}`,
        {days, pack, amount, coupan },
        config
      );

      dispatch({
        type: ANJALI_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: ANJALI_UPDATE_FAIL,
        payload: message,
      });
    }
  };
export const deleteNoteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ANJALI_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/notes/${id}`, config);

    dispatch({
      type: ANJALI_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ANJALI_DELETE_FAIL,
      payload: message,
    });
  }
};
