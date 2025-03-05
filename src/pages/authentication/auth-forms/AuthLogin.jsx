import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { useUser } from 'hook/user/useUser'; // Assuming this hook is for handling user-related actions like OTP generation

// ============================|| OTP LOGIN ||============================ //

export default function AuthLogin({ isDemo = false }) {
  const { genrateotp } = useUser(); // Assuming this hook handles OTP generation
  const [isOtpGenerated, setIsOtpGenerated] = useState(false); // State to track if OTP is generated
  const [otp, setOtp] = useState(''); // Store OTP value
  const [isLoading, setIsLoading] = useState(false); // Loading state for OTP generation

  const handleGenerateOtp = async (values) => {
  
    try {
      setIsLoading(true); 
      const response = await genrateotp({email:values.email});

      if (response.success) {
        setIsOtpGenerated(true);
        setIsLoading(false);
      } else {
       
        alert(response.message || "Failed to send OTP");
        setIsLoading(false);
      }
    } catch (error) {
      // Handle errors in the API call
      console.error('Error generating OTP:', error);
      alert('An error occurred. Please try again.');
      setIsLoading(false);
    }
  };

  // Handle OTP submission
  const handleSubmitOtp = (values) => {
    // Handle OTP submission logic here (e.g., verify OTP with backend)
    console.log('OTP Submitted:', values);
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          otp: '',
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          otp: isOtpGenerated ? Yup.string().min(6, 'OTP must be 6 digits').max(6, 'OTP must be 6 digits').required('OTP is required') : Yup.string(),
        })}
        onSubmit={handleSubmitOtp}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Email Input */}
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-login">Email Address</InputLabel>
                  <OutlinedInput
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                  />
                </Stack>
                {touched.email && errors.email && (
                  <FormHelperText error id="helper-text-email">
                    {errors.email}
                  </FormHelperText>
                )}
              </Grid>

              {/* OTP or Submit Button */}
              {isOtpGenerated ? (
                <>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="otp-login">Enter OTP</InputLabel>
                      <OutlinedInput
                        id="otp-login"
                        type="text"
                        value={values.otp}
                        name="otp"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter OTP"
                        fullWidth
                        error={Boolean(touched.otp && errors.otp)}
                      />
                    </Stack>
                    {touched.otp && errors.otp && (
                      <FormHelperText error id="helper-text-otp">
                        {errors.otp}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <AnimateButton>
                      <Button
                        disableElevation
                        disabled={isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        color="primary"
                      >
                        Submit OTP
                      </Button>
                    </AnimateButton>
                  </Grid>
                </>
              ) : (
                <Grid item xs={12}>
                  <AnimateButton>
                    <Button
                      disableElevation
                      disabled={isSubmitting || isLoading}
                      fullWidth
                      size="large"
                      variant="contained"
                      color="primary"
                      onClick={() => handleGenerateOtp(values)} // Pass email to generate OTP
                    >
                      {isLoading ? 'Sending OTP...' : 'Generate OTP'}
                    </Button>
                  </AnimateButton>
                </Grid>
              )}
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
}

AuthLogin.propTypes = { isDemo: PropTypes.bool };
