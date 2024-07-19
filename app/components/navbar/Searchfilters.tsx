const SearchFilters = () => {
    return (
        <div className="h-[49px] lg:h-[64] flex flex-row items-center justify-between border rounded-full">
            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-between">
                    <div className="w-[250px] h-[49px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Where</p>
                        <p className="text-sm">Wanted location</p>
                    </div> 

                    <div className="h-[49px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Check in</p>
                        <p className="text-sm">Dates</p>
                    </div>  

                    <div className="h-[49px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Check out</p>
                        <p className="text-sm">Dates</p>
                    </div>  

                    <div className="h-[49px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Who</p>
                        <p className="text-sm">Number guests</p>
                    </div> 
                </div>
            </div>
            <div className="p-2">
                <div className="p-4 text-white lg:p-4 bg-djbag hover:bg-djbag-dark transition rounded-full">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 32 32" 
                    aria-hidden="true" 
                    role="presentation" 
                    focusable="false" 
                    style={{'display':'block', 'fill':'none','height':'16px','width':'16px', 'stroke':'currentcolor', 'strokeWidth':4, 'overflow':'visible'}}>
                    
                    <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                </svg>
                </div>
            </div>
        </div>
    )   
}

export default SearchFilters;