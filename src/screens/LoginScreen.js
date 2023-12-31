import React , {useState} from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen';


function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
        <div className='loginScreen_background'>
            <img
                className='loginScreen_logo'
                src='https://i.postimg.cc/TwPPbDCN/Screenshot-2023-11-24-224234-removebg-preview.png'
                alt='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png'
            />
            <button className='loginScreen_button' onClick={()=> setSignIn(signIn^(true))}>Sign In</button>
            <div className='loginScreen_gradient'></div>
            <div className = "loginScreen_body"> 
                {signIn ? (
                    <SignupScreen/>
                ):(
                    <>
                        <h1>Tremendous Trailers, Wonderful Web Series and much more.</h1>
                        <h2>Watch anywhere. Relax Anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className='loginScreen_input'>
                            <form>
                                <button className='loginScreen_getStarted' onClick={() => setSignIn(true)}>
                                    Get Started
                                </button>
                            </form>
                        </div>
                    </>
                )}
                
            </div>
        </div>
    </div>
  )
}

export default LoginScreen
