/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';

import Input from '~/components/Input';
import { authContext } from '~/contexts/AuthContext';
import { formContext } from '~/contexts/FormContext';
import { Container } from './styles';

export default function Profile() {
  const {
    cFieldName,
    cFieldEmail,
    cFieldPassword,
    cFieldOldPassword,
    cFieldConfirmPassword,
    setField,
    setShowPassword,
  } = useContext(formContext);

  const { loading, user } = useContext(authContext);

  useEffect(() => {
    function loadUserProfile() {
      setField('cFieldEmail', user.email);
      setField('cFieldName', user.name);
    }

    loadUserProfile();
  }, []);

  return (
    <Container>
      <form>
        <Input
          type={cFieldName.type}
          name="Name"
          content={cFieldName.value}
          handleInputChange={text => setField('cFieldName', text)}
        >
          <button type="button" onClick={() => {}}>
            <MdClose size={12} color="#fe346e" />
          </button>
        </Input>
        <Input
          type={cFieldEmail.type}
          name="Email"
          content={cFieldEmail.value}
          handleInputChange={text => setField('cFieldEmail', text)}
        >
          <button type="button" onClick={() => {}}>
            <MdClose size={12} color="#fe346e" />
          </button>
        </Input>
        <br />
        <br />
        <Input
          type={cFieldOldPassword.type}
          name="Old Password"
          content={cFieldOldPassword.value}
          handleInputChange={text => setField('cFieldOldPassword', text)}
        >
          {cFieldOldPassword.type === 'password' ? (
            <button
              type="button"
              onClick={() => setShowPassword('cFieldOldPassword', true)}
            >
              <FaEye size={12} color="#fe346e" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowPassword('cFieldOldPassword', false)}
            >
              <FaEyeSlash size={12} color="#fe346e" />
            </button>
          )}
        </Input>
        <Input
          type={cFieldPassword.type}
          name="Password"
          content={cFieldPassword.value}
          handleInputChange={text => setField('cFieldPassword', text)}
        >
          {cFieldPassword.type === 'password' ? (
            <button
              type="button"
              onClick={() => setShowPassword('cFieldPassword', true)}
            >
              <FaEye size={12} color="#fe346e" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowPassword('cFieldPassword', false)}
            >
              <FaEyeSlash size={12} color="#fe346e" />
            </button>
          )}
        </Input>
        <Input
          type={cFieldConfirmPassword.type}
          name="Confirm Password"
          content={cFieldConfirmPassword.value}
          handleInputChange={text => setField('cFieldConfirmPassword', text)}
        >
          {cFieldConfirmPassword.type === 'password' ? (
            <button
              type="button"
              onClick={() => setShowPassword('cFieldConfirmPassword', true)}
            >
              <FaEye size={12} color="#fe346e" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowPassword('cFieldConfirmPassword', false)}
            >
              <FaEyeSlash size={12} color="#fe346e" />
            </button>
          )}
        </Input>
        <button
          className={loading ? 'loading' : ''}
          disabled={loading}
          type="submit"
        >
          {loading ? (
            <FaSpinner className="spinner" size={18} color="#fff" />
          ) : (
            'UPDATE PROFILE'
          )}
        </button>
      </form>
      <button type="button">LOG OUT</button>
    </Container>
  );
}
