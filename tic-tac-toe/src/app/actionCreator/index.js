import { create } from 'apisauce';

const obtainUser = values =>
  // const response; // aca haria el llamado deberia retornar true o false

  ({
    type: 'VALIDATE_USER',
    response
  });

export { obtainUser };
