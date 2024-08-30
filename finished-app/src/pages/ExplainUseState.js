//Render Count
import {useState} from "react";

let renderCount = 0;

export const ExplainUseState = () => {

    //Update Render Count
    renderCount++;

    //state
    const [counter, setCounter] = useState(0);

    //Normal Variable
    let normalCounter = 0;

    //Update normal Variable
    function updateNormalVariable() {
        normalCounter++;
        console.log(normalCounter);
    }

    return (
        <>
            <div className="explain-use-state flex flex-col">
                <div className="header text-center pt-10 flex flex-col gap-9 items-center">
                    <span className="text-xl md:text-5xl font-semibold shadow-white-dark p-4 border-white-light bg-black text-white"><i className="fa-brands fa-react"></i> React WorkShop '24</span>
                    <span className="text-4xl font-semibold p-4 bg-pink-500 text-white border-white-light shadow-white-light">useState()</span>
                </div>
                <div className="content flex-grow flex items-center justify-evenly gap-5 flex-wrap">
                    <div className="state-counter bg-[#90EE90] p-5 rounded border-light shadow-light flex flex-col gap-5">
                        <span className="text-5xl font-semibold">{counter}</span>
                        <span className="text-3xl">State Counter</span>
                        <button onClick={()=>{setCounter(counter => counter + 1)}} type="button" className="w-max px-4 py-2 bg-white border-light hover:bg-gray-200">Update</button>
                    </div>
                    <div className="let-counter bg-[#90EE90] p-5 rounded border-light shadow-light flex flex-col gap-5">
                        <span className="text-5xl font-semibold">{normalCounter}</span>
                        <span className="text-3xl">Normal Counter</span>
                        <button onClick={updateNormalVariable} type="button" className="w-max px-4 py-2 bg-white border-light hover:bg-gray-200">Update</button>

                    </div>
                </div>
                <div className="render-count text-center py-10 px-2">
                    <span className="p-5 bg-[#F8D6B3] border-white-light shadow-white-light text-xl font-semibold">Render Count: {renderCount}</span>
                </div>
            </div>
        </>
    )
}