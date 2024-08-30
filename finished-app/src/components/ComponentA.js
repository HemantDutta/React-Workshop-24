import {ComponentA2} from "./ComponentA2";

export const ComponentA = () => {
    return (
        <>
            <div className="component-a p-5 border-light shadow-light bg-[#FF7A5C] flex flex-col gap-4">
                <span className="px-4 py-2 bg-white border-light shadow-light">Component A</span>
                <ComponentA2/>
            </div>
        </>
    )
}