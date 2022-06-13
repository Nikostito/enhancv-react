import React, {useState, useEffect, useContext} from 'react';
import {Context} from './Context/Context';
import {HandleSignInPostRequest} from './Services';
import CheckMarkImage from './Images/CheckMark.gif';
import NetworkStatus from './NetWorkStatus';
import {Link} from 'react-router-dom';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {Button} from 'react-bootstrap';
import ClickNHold from 'react-click-n-hold';
import {BsEye} from 'react-icons/bs';

const initialValues = {
  Email: '',
  Password: '',
};

function SignIn (props) {
  const contextData = useContext (Context);
  const [Values, setValues] = useState (initialValues);
  const [Password, setPassword] = useState ('');
  const [CheckMArk, setCheckMArk] = useState (false);
  const [ValidationEmail, setValidationEmail] = useState (false);
  const [ValidationPassword, setValidationPassword] = useState (false);
  const [ErrorMessage, setErrorMessage] = useState ('');
  const [CheckOnline, setCheckOnline] = useState (false);
  const [PasswordType, setPasswordType] = useState ('password');
  const [ToggleDisabledLoginButton, setToggleDisabledLoginButton] = useState (
    true
  );

  console.log ('hello', Values);

  async function handleSubmit (Email, Password) {
    if (CheckOnline) {
      if (Email !== '' && Password !== '') {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test (Email)) {
          contextData.HandleDisplayLoading (true);
          let userData = {
            email: Email,
            password: Password,
          };
          let data = await HandleSignInPostRequest (userData);
          if (data) {
            contextData.HandleDisplayLoading (false);
            if (data === 200) {
              setCheckMArk (true);
              contextData.UpdateHandleLoginSuccess (
                !contextData.UpdateLoginSuccess
              );
              localStorage.setItem ('leLoginSuccess', JSON.stringify (data));
            } else {
              setErrorMessage (data);
              localStorage.setItem ('leLoginSuccess', JSON.stringify (null));
              if (data.includes (Email)) {
                setValidationEmail (true);
                setValidationPassword (false);
              } else {
                setValidationPassword (true);
                setValidationEmail (false);
              }
            }
          }
        } else {
          setErrorMessage ('invalid Email');
          setValidationEmail (true);
        }
      } else {
        if (Email === '') {
          setValidationEmail (true);
        } else {
          setValidationEmail (false);
        }
        if (Password === '') {
          setValidationPassword (true);
        } else {
          setValidationPassword (false);
        }
      }
    } else {
      confirmAlert ({
        title: 'Your Are Currently Off Line',
        buttons: [
          {
            label: 'OK',
          },
        ],
      });
    }
  }

  const Alert = ({message}) => {
    if (message === 'online') {
      setCheckOnline (true);
    } else {
      setCheckOnline (false);
    }
    return <div />;
  };

  useEffect (
    () => {
      if (CheckMArk) {
        const timer = setTimeout (() => {
          contextData.HandleBackGroundColorOfModal (false);
          contextData.HandleShowModal (false);
        }, 2000);
        return () => clearTimeout (timer);
      }
    },
    [CheckMArk]
  );

  function start (e) {
    console.log ('START');
    setPasswordType ('text');
  }

  function end (e, enough) {
    console.log ('END');
    setPasswordType ('password');
    console.log (
      enough ? 'Click released after enough time' : 'Click released too soon'
    );
  }

  function clickNHold (e) {
    console.log ('CLICK AND HOLD');
  }

  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues ({
      ...Values,
      [name]: value,
    });
  };

  useEffect (
    () => {
      if (Values.Email === '' && Values.Password === '') {
        setToggleDisabledLoginButton (true);
      } else {
        setToggleDisabledLoginButton (false);
      }
    },
    [Values]
  );

  useEffect (
    () => {
      const timer = setTimeout (() => {
        setValidationPassword (false);
        setValidationEmail (false);
        setErrorMessage ('');
      }, 3000);
      return () => clearTimeout (timer);
    },
    [ValidationPassword, ValidationEmail]
  );

  if (CheckMArk) {
    return (
      <div>
        <img src={CheckMarkImage} alt="loading..." width={370} height={400} />
      </div>
    );
  } else {
    return (
      <div>
        <main className="wrapper">
          <NetworkStatus>
            {({online}) => (
              <Alert
                message={`${online ? 'online' : 'offline'}`}
                theme={online ? 'success' : 'warning'}
              />
            )}
          </NetworkStatus>
        </main>
        <div className="HeadingTextHolderSignIn">
          Login to your account
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center',
            marginTop: '40px',
          }}
        >
          <input
            className="SignUPName BorderRadius"
            placeholder="Email*"
            style={{borderColor: ValidationEmail ? 'red' : ''}}
            value={Values.Email}
            name="Email"
            onChange={handleInputChange}
          />
          <div className="SignUPName BorderRadius justify-content-between d-flex align-items-center">
            <input
              className="w-100"
              placeholder="Password*"
              style={{borderColor: ValidationPassword ? 'red' : ''}}
              value={Values.Password}
              type={PasswordType}
              name="Password"
              onChange={handleInputChange}
            />
            <ClickNHold
              time={1}
              onStart={start}
              onClickNHold={clickNHold}
              onEnd={end}
            >

              <BsEye />
            </ClickNHold>
          </div>
          {ErrorMessage && <div>{ErrorMessage}</div>}
        </div>
        <Button
          disabled={ToggleDisabledLoginButton}
          className="SubmitButtons w-100 FontWeight BorderRadius CommonCssClassWhiteColor CommonCssClassCursorPointer"
          onClick={() => {
            handleSubmit (Values.Email, Values.Password);
          }}
        >
          LogIn
        </Button>
        <Link
          onClick={() => {
            window.scrollTo (0, 0);
          }}
          className="text-decoration-none text-white"
          to="/forget-password"
        >
          <p className="mt-3" style={{cursor: 'pointer', color: '#4F46E5'}}>
            Forget Password
          </p>
        </Link>

      </div>
    );
  }
}

export default SignIn;
