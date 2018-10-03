export const validate = values => {
  const errors = {};
  if (!values.user) {
    errors.user = 'usuario no valido';
  } else if (values.user.length > 12) {
    errors.user = 'usuario con demasiados caracteres';
  }

  if (!values.pass) {
    errors.pass = 'password no valida';
  }

  return errors;
};
