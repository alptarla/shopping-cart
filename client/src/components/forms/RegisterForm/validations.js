import * as Yup from 'yup';

const RegisterFormSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email.')
    .required('Email field requried.'),
  password: Yup.string()
    .min(6, 'Password must be between 6-12 characters.')
    .required('Password field required.'),
  firstName: Yup.string().required('First name field required'),
  lastName: Yup.string().required('Last name field required'),
});

export default RegisterFormSchema;
