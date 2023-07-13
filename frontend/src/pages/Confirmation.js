import React from 'react';
import {FaCheckCircle} from 'react-icons/fa';

function Confirmation({message}) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="flex justify-center">
                    </div>
                    <div className="mt-6">
                        <div className="mt-2 flex items-center justify-center text-3xl">
                            <FaCheckCircle className="text-green-500 mr-2"/>
                            {message}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;
