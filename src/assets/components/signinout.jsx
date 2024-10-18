import React, { useState } from 'react';

function signInOut() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const handleSignIn = () => {
        setIsSignedIn(true);
    };
    const handleSignOut = () => {
        setIsSignedIn(false);
    }
    return (
        <div className="signInOut-container">
            <h1>{isSignedIn ? 'Youve returned!' : 'Sign in!'}</h1>
            {isSignedIn ? (
                <button onClick={handleSignOut}>Log out</button>
            ) : (
                <button onClick={handleSignIn}>Log In</button>
            )}
        </div>
    );
}

export default signInOut;