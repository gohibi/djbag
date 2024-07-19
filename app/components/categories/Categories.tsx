import Image from "next/image";
const Categories = () =>{
    return (
        <div className="pt-3 cursor-pointer pb-4 flex items-center space-x-12">
            <div className="pb-2 flex flex-col items-center space-y-2 border-b-3 hover:border-gray-400 border-white opacity-60 hover:opacity-100">
            <Image 
            src="/icn-categories/iconiques.webp" 
            alt="iconique" 
            width={30} 
            height={30}
            />
                <span className="text-xs">Iconiques</span>
            </div>

            <div className="pb-2 flex flex-col items-center space-y-2 border-b-3 hover:border-gray-400 border-white opacity-60 hover:opacity-100">
            <Image 
            src="/icn-categories/suitcase1.png" 
            alt="iconique" 
            width={30} 
            height={30}
            />
                <span className="text-xs">Grandes valises</span>
            </div>

            <div className="pb-2 flex flex-col items-center space-y-2 border-b-3 hover:border-gray-400 border-white opacity-60 hover:opacity-100">
            <Image 
            src="/icn-categories/2.png" 
            alt="iconique" 
            width={30} 
            height={30}
            />
                <span className="text-xs">Petites Valises</span>
            </div>

            <div className="pb-2 flex flex-col items-center space-y-2 border-b-3 hover:border-gray-400 border-white opacity-60 hover:opacity-100">
            <Image 
            src="/icn-categories/3.png" 
            alt="iconique" 
            width={30} 
            height={30}
            />
                <span className="text-xs">Sacs de voyage</span>
            </div>
        </div>

        
    )
}

export default Categories;