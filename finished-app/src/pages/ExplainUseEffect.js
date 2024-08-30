//Render Count
import {useEffect, useState} from "react";

let renderCount = 0;

export const ExplainUseEffect = () => {

    //Update Render Count
    renderCount++;

    //state
    const [counter, setCounter] = useState(0);
    const [logs, setLogs] = useState([]);

    //useEffect
    //on Load
    useEffect(()=>{
        let logsStart = [<span className="py-2 px-4 border-light text-lg bg-white">Logs Started</span>]
        setLogs(logsStart);
    },[])

    //State Update
    useEffect(()=>{
        if(counter > 0) {
            let newLog = <span className="py-2 px-4 border-light text-lg bg-white">Log Counter: {counter}</span>
            setLogs(prev => [...prev, newLog]);
        }
    },[counter])

    return (
        <>
            <div className="explain-use-effect flex flex-col">
                <div className="header text-center pt-10 flex flex-col gap-9 items-center">
                    <span className="text-xl md:text-5xl font-semibold shadow-white-dark p-4 border-white-light bg-black text-white"><i className="fa-brands fa-react"></i> React WorkShop '24</span>
                    <span className="text-xl md:text-4xl font-semibold p-4 bg-purple-700 text-white border-white-light shadow-white-light">useEffect()</span>
                </div>
                <div className="content flex-grow flex items-center justify-evenly gap-5 flex-wrap">
                    <div className="state-counter bg-[#90EE90] p-5 rounded border-light shadow-light flex flex-col gap-5">
                        <span className="text-5xl font-semibold">{counter}</span>
                        <span className="text-3xl">State Counter</span>
                        <button onClick={()=>{setCounter(counter => counter + 1)}} type="button" className="w-max px-4 py-2 bg-white border-light hover:bg-gray-200">Update</button>
                    </div>
                    <div className="log-box bg-white w-[500px] max-h-[300px] overflow-y-scroll p-5 rounded shadow-light border-light">
                        <span className="text-3xl">useEffect Logs</span>
                        <div className="logs flex flex-col gap-2 mt-2">
                            {logs}
                        </div>
                    </div>
                </div>
                <div className="render-count text-center py-10 px-2">
                    <span className="p-5 bg-[#F8D6B3] border-white-light shadow-white-light text-xl font-semibold">Render Count: {renderCount}</span>
                </div>
            </div>
        </>
    )
}