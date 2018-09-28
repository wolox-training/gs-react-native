import getUserDetail from '../../services/LoginService';

const obtainUser = values => {
  const server = getUserDetail;
  console.log(server.getUserDetail);
  return {
    type: 'VALIDATE_USER'
  };
};

export { obtainUser };
