import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'TARIFAS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'TARIFAS_FORM_FIND_STARTED',
      });

      axios.get(`/tarifas/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'TARIFAS_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'TARIFAS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/tarifas'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'TARIFAS_FORM_CREATE_STARTED',
      });

      axios.post('/tarifas', { data: values }).then((res) => {
        dispatch({
          type: 'TARIFAS_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Tarifas created' });
        dispatch(push('/admin/tarifas'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'TARIFAS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'TARIFAS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/tarifas/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'TARIFAS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Tarifas updated' });
        dispatch(push('/admin/tarifas'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'TARIFAS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
