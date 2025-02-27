/* eslint-disable react/prop-types */
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

const Auth = ({ user, setUser }) => {
    const handleLogin = async () => {
        const result = await signInWithPopup(auth, provider);
        setUser(result.user);
    };

    return (
        <div>
            <style>{`
                .auth-container {
                    display: flex;
                    justify-content: center;
                    margin-top: 20px;
                }
                .auth-btn {
                    padding: 10px 20px;
                    border: none;
                    background: #007bff;
                    color: white;
                    font-size: 16px;
                    cursor: pointer;
                    border-radius: 5px;
                }
                .auth-btn:hover {
                    background: #0056b3;
                }
            `}</style>
            <div className="auth-container">
                {user ? (
                    <button className="auth-btn" onClick={() => signOut(auth)}>Logout</button>
                ) : (
                    <button className="auth-btn" onClick={handleLogin}>Login with Google</button>
                )}
            </div>
        </div>
    );
};

export default Auth;
