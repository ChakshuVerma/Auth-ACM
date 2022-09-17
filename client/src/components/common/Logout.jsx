import React, {useEffect} from  'react';
import {useNavigate} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Logout = () => {

    const navigate = useNavigate();
    
    const SuccesToast = (succesMsg) => {
        toast.success(succesMsg, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 500
        });
    }

    useEffect(() => {
        async function callLogout(){
            try {
                const res = await fetch('/api/logout', {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                       "Content-Type": "application/json",
                    },
                    credentials: "include",
                });
    
                const data = await res.json();
                
                if(data && res.status === 201){
                    SuccesToast(data.message);
                    navigate('/login');
                }
            } catch (error) {
                console.log('Logout error: '+error);
                // navigate('/login');
            }
        }
        callLogout();
    })

    return(
        <>
            <ToastContainer style={{fontSize:"2rem"}} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} limit={2} theme={"dark"} pauseOnFocusLoss={false} draggable pauseOnHover={false}/>
            <div className="outer-container">
                <h2 style={{color: "#000"}}>.</h2>
            </div>
        </>
    );
}

export default Logout;