import React from 'react';
import {Link} from 'react-router-dom';


function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">

                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome</h2>
                <div className="mt-6 text-center text-gray-700">
                    <Link to="/login"
                          className="mx-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        Sign In
                    </Link>
                    <Link to="/signup"
                          className="mx-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
