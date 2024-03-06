import React, { useRef, useEffect } from 'react';

export default function LoginForm(props) {
  let optBox = useRef(null);
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'Enter') {
      if ('OTPCredential' in window) {
        const input = document.querySelector('input');
        const form = input.closest('form');
        if (form) {
          // Abort the OTP request if the user attempts to submit the form manually
          form.addEventListener('submit', (e) => {
            ac.abort();
          });
        }
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
              if (form)
                //form.submit();
                props.setValue(otp.code);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  };
  return (
    <form>
      Please enter Mobile No:
      <input
        type="text"
        ref={optBox}
        autoComplete="one-time-code"
        onKeyDown={handleKeyDown}
        inputMode="numeric"
        autoFocus
      />
    </form>
  );
}
