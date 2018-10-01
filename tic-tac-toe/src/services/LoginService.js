import api from '../config/api';

export default {
  getUserDetail: user => api.post('/api/login', { email: user.user, password: user.pass })
};
