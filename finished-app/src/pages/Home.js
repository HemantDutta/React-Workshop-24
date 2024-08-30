import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <>
            <div className="home flex flex-col gap-2">
                <div className="header text-center pt-10">
                    <span className="text-xl md:text-5xl font-semibold shadow-white-dark p-4 border-white-light bg-black text-white"><i className="fa-brands fa-react"></i> React WorkShop '24</span>
                </div>
                <div className="content flex-grow grid place-items-center">
                    <div className="topics-list px-5 py-10 bg-white border-light shadow-light rounded w-[60vw] flex items-center justify-center gap-5 flex-wrap">
                        <Link to={"/explain-use-state"} className="text-3xl p-2 border-light shadow-light">useState()</Link>
                        <Link to={"/explain-use-effect"} className="text-3xl p-2 border-light shadow-light">useEffect()</Link>
                        <Link to={"/explain-components"} className="text-3xl p-2 border-light shadow-light">Reusable Components</Link>
                        <Link to={"/explain-props"} className="text-3xl p-2 border-light shadow-light">Props</Link>
                        <Link to={"/login"} className="text-3xl p-2 border-light shadow-light">API Calls</Link>
                        <Link to={"/explain-data-render"} className="text-3xl p-2 border-light shadow-light">Data Rendering</Link>
                    </div>
                </div>
            </div>
        </>
    )
}