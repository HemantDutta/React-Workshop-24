import {useState} from "react";
import {UpdateCounter} from "../components/UpdateCounter";

export const ExplainProps = () => {

    //states
    const [counter, setCounter] = useState(0);

    //Increment Counter
    function incrementCounter() {
        setCounter(prevState => prevState + 1);
    }

    return (
        <>
            <div className="explain-props flex flex-col">
                <div className="header text-center pt-10 flex flex-col gap-9 items-center">
                    <span className="text-xl md:text-5xl font-semibold shadow-white-dark p-4 border-white-light bg-black text-white"><i className="fa-brands fa-react"></i> React WorkShop '24</span>
                    <span className="text-xl md:text-4xl font-semibold p-4 bg-blue-500 text-white border-white-light shadow-white-light">Props</span>
                    <div className="text-xl md:text-3xl font-semibold p-4 bg-orange-400 text-white border-white-light shadow-white-light flex flex-col gap-2">
                        <span>Source of Truth</span>
                        {counter}
                    </div>
                </div>
                <div className="content flex-grow flex items-center justify-evenly gap-5 flex-wrap">
                    <UpdateCounter counter={counter} incrementCounter={incrementCounter} title={"Update Component A"}/>
                    <UpdateCounter counter={counter} incrementCounter={incrementCounter} title={"Update Component B"}/>
                </div>
            </div>
        </>
    )
}