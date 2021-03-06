import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Firebase/fire.base.init';

const NeedAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return;
    }
    if(!user){
        return <Navigate to="/loging" state={{form:location}} replace></Navigate>
    }
    return children;
};

export default NeedAuth;