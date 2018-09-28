export const validate = values => {
  const errors = {};
  if (!values.user) {
    errors.user = 'usuario no valido';
  } else if (values.user.length > 8) {
    errors.user = 'usuario con demasiados caracteres';
  }

  if (!values.pass) {
    errors.user = 'password no valida';
  }

  return errors;
};
