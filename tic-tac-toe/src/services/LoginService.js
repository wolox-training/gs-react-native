import api from '../config/api';

export default {
  getUserDetail: user => api.get('/usuarios')
};
