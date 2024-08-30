import {useEffect, useState} from "react";
import axios from "axios";

export const ExplainDataRender = () => {

    //states
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    //Fetch Users
    async function fetchUsers() {
        try {
            setLoading(true);
            let response = await axios.get("http://localhost:5000/get-users");
            setTimeout(()=>{
                setData(response.data);
            }, 2000)
            setLoading(false);
        }
        catch (e) {
            console.log(e);
        }
    }

    //useEffect
    useEffect(()=>{
        fetchUsers();
    },[])

    return (
        <>
            <div className="explain-props flex flex-col">
                <div className="header text-center pt-10 flex flex-col gap-9 items-center">
                    <span className="text-xl md:text-5xl font-semibold shadow-white-dark p-4 border-white-light bg-black text-white"><i className="fa-brands fa-react"></i> React WorkShop '24</span>
                    <span className="text-xl md:text-4xl font-semibold p-4 bg-blue-500 text-white border-white-light shadow-white-light">Data Render</span>
                </div>
                <div className="content flex-grow grid place-items-center">
                    <div className="list-container p-5 bg-white border-light shadow-light flex flex-col gap-4 w-[80vw]">
                        {
                            !loading && data.length !== 0 ? (
                                data.map((user,index) => {
                                    return (
                                        <div key={index} className="flex items-center gap-2 justify-between">
                                            <span>{user.name}</span>
                                            <span>{user.email}</span>
                                            <span>{user.birthdate}</span>
                                        </div>
                                    )
                                })
                            ) : <span className="text-xl">Loading...</span>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}