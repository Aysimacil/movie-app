import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const registerSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  surname: Yup.string().required('Surname is required'),
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
  password: Yup.string().required('Password is required').min(8,"Password must be at least 8 characters").matches(/[A-Z]/,"password must be contain at least one uppercase letter")
  .max(16,"Password must be at most 16 characters"),
});