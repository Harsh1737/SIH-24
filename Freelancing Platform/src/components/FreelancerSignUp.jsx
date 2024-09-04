import React from 'react';
import SignUpForm from '../src/SignUp.jsx';

const FreelancerSignUp = () => {
  return (
    <SignUpForm
    work="Here to hire talent?"
      talent="Join as a Client"
      title="Sign up to find work you love"
      emailLabel="Email"
      checkboxLabel="Send me emails with tips on how to find work that fits my needs."
      buttonLabel="Create my account"
      linkText="Already have an account?"
      linkHref="#"
    />
  );
};

export default FreelancerSignUp;