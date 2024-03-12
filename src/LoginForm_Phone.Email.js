import React, { useState, useEffect } from 'react';

const LoginFormPhoneEmail = (props) => {
  const searchParams = new URLSearchParams(window.location.search);
  const accessToken = searchParams.get('access_token');

  // Replace with your actual CLIENT_ID
  const CLIENT_ID = '16528973526584927873';

  const REDIRECT_URL = window.location.href;
  const AUTH_URL = `https://auth.phone.email/log-in?client_id=${CLIENT_ID}&redirect_url=${REDIRECT_URL}`;

  // Use state to manage user details
  const [userDetails, setUserDetails] = useState({
    countryCode: '',
    phoneNo: '',
    phEmailJwt: '',
  });

  const httpRequest = async () => {
    console.log('inside httpRequest >>>>>>>>>>>>>>>>>');
    try {
      const url = 'https://eapi.phone.email/getuser';
      const data = new FormData();

      data.append('access_token', accessToken);
      data.append('client_id', CLIENT_ID);

      const response = await fetch(url, { method: 'POST', body: data });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();

      if (responseData.status !== 200) {
        props.setValue(true);
        console.log('Something went wrong');
      }

      const phEmailJwt = responseData.ph_email_jwt;

      setUserDetails({
        countryCode: responseData.country_code,
        phoneNo: responseData.phone_no,
        phEmailJwt: phEmailJwt,
      });

      console.log('User Details are>>>>>>>', responseData);

      // Set cookie with 180-day expiration
      const cookieExpire = new Date(
        Date.now() + 180 * 24 * 60 * 60 * 1000
      ).toUTCString();
      document.cookie = `ph_email_jwt=${phEmailJwt}; expires=${cookieExpire}; path=/`;
      props.setValue(true);
      // Register User: As the user phone number has been verified successfully. If user corrosponding to this verified  mobile number does not exist in your user table then register the user by creating a row in user table. If user already exists then simply continue to the next step.

      // Send Email: We reccomend you to send welcome email to the user.
      //curl --location --request POST "https://api.phone.email/v1/sendmail" --ssl-no-revoke --header "Content-Type: application/json" --data-raw "{'apiKey':'API_KEY','fromCountryCode':'XXX','fromPhoneNo':'XXXXXXXXXX', 'toCountrycode':'XX','toPhoneNo':'XXXXXXXXXX','subject': 'Welcome to YOUR_BUSINESS_NAME','tinyFlag':true,'messageBody':'V2VsY29tZSB0byB5b3VyIEJVU0lORVNTX05BTUU='}"

      // Create Session: Store verified user phone number in session variable.

      // Redirect: Redirect user to the page of your choice as the user has successfully logged in.

      // Handle Logout (Optional): You can create logout button on your website as required.In the event of logout you must clear delete ph_email_jwt cookie and clear your session variables.  To delete cookie simply set it to blank -> setcookie("ph_email_jwt", "", time()-3600);
    } catch (error) {
      props.setValue(false);
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      httpRequest();
    }
  }, [accessToken]);

  return (
    <React.Fragment>
      {!accessToken && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '50px 30px',
          }}
        >
          <div
            style={{
              color: '#024430 !important',
              textAlign: 'center',
              backgroundColor: '#fff',
              padding: '30px',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px rgba(17, 24, 39, .09)',
              width: '100%',
              maxWidth: '420px',
              margin: '0 auto',
              fontFamily:
                "sans-serif, serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
              lineHeight: '28px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              className="phe-login-img"
              width="250px"
              src="https://storage.googleapis.com/prod-phoneemail-prof-images/phem-widgets/phe-signin-box.svg"
              alt="phone email login demo"
            />
            <h1 style={{ margin: '10px' }}>Sign In</h1>
            <p style={{ color: '#a6a6a6' }}>Welcome to Sign In with Phone</p>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px 20px',
                backgroundColor: '#02BD7E',
                fontWeight: 'bold',
                color: '#ffffff',
                border: 'none',
                borderRadius: '3px',
                fontSize: 'inherit',
                cursor: 'pointer',
                maxWidth: '320px',
                width: '100%',
              }}
              id="btn_ph_login"
              name="btn_ph_login"
              type="button"
              onClick={() =>
                window.open(
                  AUTH_URL,
                  'peLoginWindow',
                  'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0, width=500, height=560, top=' +
                    (window.screen.height - 600) / 2 +
                    ', left=' +
                    (window.screen.width - 500) / 2
                )
              }
            >
              <img
                src="https://storage.googleapis.com/prod-phoneemail-prof-images/phem-widgets/phem-phone.svg"
                alt="phone email"
                style={{ marginRight: '10px' }}
              />
              Sign In with Phone
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default LoginFormPhoneEmail;
