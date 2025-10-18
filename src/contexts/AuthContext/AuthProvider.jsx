import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    return (
        <div>
            <AuthContext>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;