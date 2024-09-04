import React from 'react';
import SignUpForm from '../src/SignUp.jsx';

const EmployerSignUp = () => {
  return (
    <SignUpForm
      work="Looking for work?"
      talent="Apply as talent"
      title="Sign up to hire talent"
      emailLabel="Work email address"
      checkboxLabel="Send me emails with tips on how to find talent that fits my needs."
      buttonLabel="Create my account"
      linkText="Already have an account?"
      linkHref="#"
    />
  );
};

export default EmployerSignUp;