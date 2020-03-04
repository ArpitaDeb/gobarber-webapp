import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { MdFiberManualRecord, MdClose } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '~/assets/logo.svg';

import { formContext } from '~/contexts/FormContext';
import { authContext } from '~/contexts/AuthContext';
import Input from '~/components/Input';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Inform a valid email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function SignIn() {
  const {
    cFieldEmail,
    cFieldPassword,
    setEmail,
    setPassword,
    setShowPassword,
  } = useContext(formContext);

  const { signInRequest } = useContext(authContext);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await schema.validate({
        email: cFieldEmail.value,
        password: cFieldPassword.value,
      });

      signInRequest(cFieldEmail.value, cFieldPassword.value);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form onSubmit={handleSubmit}>
        <Input
          type={cFieldEmail.type}
          name="Email"
          content={cFieldEmail.value}
          handleInputChange={text => setEmail(text)}
          icon={<MdClose size={12} color="#fff" />}
        >
          <button type="button" onClick={() => setEmail('')}>
            <MdClose size={12} color="#fe346e" />
          </button>
        </Input>
        <Input
          type={cFieldPassword.type}
          name="Password"
          content={cFieldPassword.value}
          handleInputChange={text => setPassword(text)}
        >
          {cFieldPassword.type === 'password' ? (
            <button type="button" onClick={() => setShowPassword(true)}>
              <FaEye size={12} color="#fe346e" />
            </button>
          ) : (
            <button type="button" onClick={() => setShowPassword(false)}>
              <FaEyeSlash size={12} color="#fe346e" />
            </button>
          )}
        </Input>
        <button type="submit">Sign In</button>
      </form>
      <Link to="/recover">Forgot password?</Link>
      <MdFiberManualRecord
        size={8}
        color="#fe346e"
        style={{ marginLeft: 10, marginRight: 10 }}
      />
      <Link to="/register">Sign up for GoBarber</Link>
    </>
  );
}
