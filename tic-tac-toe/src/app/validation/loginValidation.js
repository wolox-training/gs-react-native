export const validate = values => {
  const errors = {};
  const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (values.user !== undefined) {
    if (!pattern.test(values.user)) {
      errors.user = 'usuario no valido';
    }
  } else {
    values.user === undefined;
    errors.user = 'usuario no valido';
  }
  if (values.pass !== undefined) {
    if (!values.pass) {
      errors.pass = 'password no valida';
    } else if (values.pass.length < 8) {
      errors.pass = 'password con menos de 8 caracteres';
    }
  } else {
    errors.pass = 'password no valida';
  }

  return errors;
};
