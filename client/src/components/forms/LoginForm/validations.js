import * as Yup from 'yup';

const LoginFormSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email.')
    .required('Email field requried.'),
  password: Yup.string()
    .min(6, 'Password must be between 6-12 characters.')
    .required('Password field required.'),
});

export default LoginFormSchema;
