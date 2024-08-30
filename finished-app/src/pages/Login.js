import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const Login = () => {

    //navigator
    const navigator = useNavigate();
    
    //states
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [serverError, setServerError] = useState("");

    //Submission handler
    async function submissionHandler(e) {
        try {
            e.preventDefault();
            let payLoad = {
                username: username,
                password: password
            }

            let response = await axios.post("http://localhost:5000/log-in", payLoad);

            if(response.data === "success") {
                navigator("/explain-data-render");
            }
            else {
                setServerError(response.data);
            }
        }
        catch (e) {
            setServerError("Something went wrong!");
        }
    }
    
    return (
        <>
            <div className="explain-components flex flex-col">
                <div className="header text-center pt-10 flex flex-col gap-9 items-center">
                    <span className="text-xl md:text-5xl font-semibold shadow-white-dark p-4 border-white-light bg-black text-white"><i className="fa-brands fa-react"></i> React WorkShop '24</span>
                    <span className="text-xl md:text-4xl font-semibold p-4 bg-orange-500 text-white border-white-light shadow-white-light">Login</span>
                </div>
                <div className="content flex-grow grid place-items-center">
                    <form className="p-5 bg-white border-light shadow-light flex flex-col gap-5" onSubmit={submissionHandler}>
                        <div className="input-field flex flex-col gap-2">
                            <label htmlFor="username" className="text-xl">Username</label>
                            <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" className="p-2 border-light rounded shadow-light" required/>
                        </div>
                        <div className="input-field flex flex-col gap-2">
                            <label htmlFor="password" className="text-xl">Password</label>
                            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} className="p-2 border-light rounded shadow-light" required/>
                        </div>
                        <button type="submit" className="py-2 px-4 bg-white border-light shadow-light">Login</button>
                    </form>
                </div>
                {
                    serverError ? <span className="fixed bottom-14 left-[50%] -translate-x-[50%] bg-white p-5 border-light shadow-light">{serverError}</span> : null
                }
            </div>
        </>
    )
}