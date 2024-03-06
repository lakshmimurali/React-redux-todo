import React, { useRef, useEffect } from 'react';

export default function LoginForm(props) {
  let optBox = useRef(null);
  useEffect(() => {
    if ('OTPCredential' in window) {
      // Set up an AbortController to use with the OTP request
      const ac = new AbortController();

      // Request the OTP via get()
      navigator.credentials
        .get({
          otp: { transport: ['sms'] },
          signal: ac.signal,
        })
        .then((otp) => {
          console.log(otp);
          // When the OTP is received by the app client, enter it into the form
          // input and submit the form automatically
          if (otp.code !== '' && otp.code !== undefined) {
            optBox.current.value = otp.code;
            props.setValue(otp.code);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);
  return (
    <div>
      <input
        type="text"
        ref={optBox}
        autocomplete="one-time-code"
        inputmode="numeric"
      />
    </div>
  );
}
