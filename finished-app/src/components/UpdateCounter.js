export const UpdateCounter = ({counter, incrementCounter, title}) => {
    return (
        <>
            <div className="component-a p-5 border-light shadow-light bg-[#FF7A5C] flex flex-col gap-4">
                <span className="text-5xl font-semibold">{counter}</span>
                <span className="px-4 py-2 bg-white border-light shadow-light">{title}</span>
                <button onClick={incrementCounter} type="button" className="py-2 px-4 bg-white border-light shadow-light">Increment</button>
            </div>
        </>
    )
}