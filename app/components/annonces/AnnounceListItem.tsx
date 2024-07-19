import Image from "next/image";

const AnnounceListItem = () =>{
    return (
        <div className="cursor-pointer">
            <div className="relative overflow-hidden aspect-square rounded-xl border border-gray-700">
                <Image 
                    fill
                    src="/valise.webp"
                    sizes="(max-width:768px) 768px, (max-width:1200px) 768px, 768px"
                    className="hover:scale-110 object-cover transition h-full w-full" 
                    alt="valise"                
                />
            </div>
            <div className="mt-2">
                <p className="text-lg font-bold">Annonce nom </p>
            </div>
            <div className="mt-2">
                <p className="text-sm text-gray-700"><strong>10000 XOF</strong>/kg </p>
            </div>
        </div>
    )
}

export default AnnounceListItem;