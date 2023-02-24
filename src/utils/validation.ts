import { number, ref, string } from 'yup';

import { REQUIRED_FIELD_ERROR } from './constants';

const latinNameValidation = () =>
  string()
    .trim()
    .min(3)
    .max(100)
    .matches(/(^[a-z]{1,}[a-z.,'\-()\s]{0,}[a-z.\s]$)|(^.{0}$)/i, {});

export const nameValidation = () => latinNameValidation().required();

export const fieldRequiredValidation = () => string().nullable().required();

export const passwordValidation = () =>
  string()
    .trim()
    .min(8, 'password must be at least 8')
    .max(16, 'password must be at less than 16')
    .matches(/[!@#$%^&*()_=+\-.,]/, 'Password must be have one of special symbols (!@#$%^&*()_=+\\-.,)')
    .matches(/[a-z]/, 'Password must be have lowercase symbols')
    .matches(/[A-Z]/, 'Password must be have uppercase symbols')
    .matches(/[0-9]/, 'Password must be have numbers')
    .matches(/^[a-zA-Z!@#$%^&*()_=+\-.,\d]+$/, 'Password has no valid symbols')
    .required('Password is required field');

export const repeatPasswordValidation = (passwordFieldName: string) =>
  string()
    .trim()
    .required('Passwords must match')
    .oneOf([ref(passwordFieldName), ''], 'Passwords must match');

export const emailValidation = () =>
  string()
    .required('Field is required')
    .trim()
    .matches(
      /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid email'
    );

export const maxAmountLengthValidation = (amountName: string) =>
  number()
    .required(REQUIRED_FIELD_ERROR)
    .test(amountName, 'Max length 13 numbers', value => /^\d{1,13}(\.\d*)?$/.test(`${value ?? ''}`));
