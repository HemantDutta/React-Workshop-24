import {CommonComponent} from "./CommonComponent";

export const ComponentB = () => {
    return (
        <>
            <div className="component-a p-5 border-light shadow-light bg-[#A388EE] flex flex-col gap-4">
                <span className="px-4 py-2 bg-white border-light shadow-light">Component B</span>
                <CommonComponent/>
            </div>
        </>
    )
}