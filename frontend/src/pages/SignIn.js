import React, {useState} from "react";
import {signIn, signInWithGoogle} from "../services/auth";
import {MdEmail, MdLock} from 'react-icons/md';
import {FaGoogle, FaUserAlt, FaUserGraduate, FaUserTie, FaArrowLeft, FaWallet, FaEnvelope} from "react-icons/fa";
import {useNavigate} from 'react-router-dom';


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedRole, setSelectedRole] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await signIn({email, password});
            navigate('/confirmation', { state: { message: 'Successfully signed in!' } });
        } catch (error) {
            console.error("Login Error: ", error);
        }
    };

    const handleRoleSelection = (role) => {
        setSelectedRole(role);
    };

    const handleGoogleSignIn = async () => {
        const response = await signInWithGoogle();
        if (!response.success) {
            setError(response.error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="mt-4 flex items-center">
                    <button
                        onClick={() => navigate('/')}
                        className="py-2 px-4 rounded bg-blue-500 text-white mr-5"
                    >
                        <FaArrowLeft/>
                    </button>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                </div>

                {error && <p className="mt-2 text-center text-sm text-red-600">{error}</p>}
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <button
                                className={`m-2 py-2 px-4 rounded ${selectedRole === 'Student' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                onClick={() => handleRoleSelection('Student')}>
                                <FaUserGraduate className="inline-block mr-2"/> Student
                            </button>
                            <button
                                className={`m-2 py-2 px-4 rounded ${selectedRole === 'Staff' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                onClick={() => handleRoleSelection('Staff')}>
                                <FaUserTie className="inline-block mr-2"/> Staff
                            </button>
                            <button
                                className={`m-2 py-2 px-4 rounded ${selectedRole === 'Guest' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                onClick={() => handleRoleSelection('Guest')}>
                                <FaUserAlt className="inline-block mr-2"/> Guest
                            </button>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                <MdEmail className="inline"/> Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                <MdLock className="inline"/> Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <FaEnvelope className="h-5 w-5 text-indigo-400 inline-block mr-2 "/>
                                Sign in with Email
                            </button>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                onClick={handleGoogleSignIn}
                            >
                                <FaGoogle
                                    className="h-5 w-5 text-red-400 inline-block mr-2 "/>
                                Sign in with Google
                            </button>
                        </div>
                        <div className="mt-4">
                            <button
                                type="button"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                // onClick={handleMoralisSignIn}
                            >
                                <FaWallet
                                    className="h-5 w-5 inline-block mr-2 text-blue-500 "/>
                                Sign in with Moralis
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
