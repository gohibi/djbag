'use client'
import { useCallback, useEffect, useState } from "react"

interface ModalProps{
    label:string;
    content:React.ReactElement;
    isOpen:boolean;
    close : ()=>void;
}
const Modal: React.FC<ModalProps> = ({
    label,
    content,
    isOpen,
    close,
}) =>{
    const [showModal,setShowModal] = useState(isOpen)

    useEffect( ()=>{
        setShowModal(isOpen)
    },[isOpen])

    const handleClose = useCallback(()=>{
        setShowModal(false)

        setTimeout(()=>{
            close();
        },600)
    },[close])


    if (!isOpen){
        return null;
    }
    return (
        <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/50">
            <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 mx-auto h-auto">
                <div className={`transalte duration-600 h-full ${showModal ? `translate-y-0 opacity-100`:'translate-y-full opacity-10'} `}>
                    <div
                        onClick={handleClose} 
                        className="w-full h-auto rounded-xl relative flex flex-col bg-white"
                    >
                            <header className="h-[60px] flex items-center p-6 rounded-t justify-center relative border-b">
                                    <div className="p-3 absolute left-4 hover:bg-gray-400 rounded-full cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h2 className="text-lg font-bold"> {label} </h2>
                            </header>

                        <section className="py-8 px-6">
                            {content}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;


