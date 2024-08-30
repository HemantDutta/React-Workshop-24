import {CommonComponent} from "./CommonComponent";

export const ComponentA2 = () => {
    return (
        <>
            <div className="component-a-2 p-5 border-light shadow-light bg-[#90EE90] flex flex-col gap-4">
                <span className="px-4 py-2 bg-white border-light shadow-light">Component A 2</span>
                <CommonComponent/>
            </div>
        </>
    )
}