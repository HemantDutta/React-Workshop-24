import {ComponentA} from "../components/ComponentA";
import {ComponentB} from "../components/ComponentB";

export const ExplainComponents = () => {

    return (
        <>
            <div className="explain-components flex flex-col">
                <div className="header text-center pt-10 flex flex-col gap-9 items-center">
                    <span className="text-xl md:text-5xl font-semibold shadow-white-dark p-4 border-white-light bg-black text-white"><i className="fa-brands fa-react"></i> React WorkShop '24</span>
                    <span className="text-xl md:text-4xl font-semibold p-4 bg-orange-500 text-white border-white-light shadow-white-light">Reusable Components & Nesting</span>
                </div>
                <div className="content flex-grow flex items-center justify-evenly gap-5 flex-wrap">
                    <ComponentA/>
                    <ComponentB/>
                </div>
            </div>
        </>
    )
}