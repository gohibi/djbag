'use client'
import { useState } from "react";
import Modal from "./Modal";
import useLoginModal from "../hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";
 

const LoginModal = () =>{
    const loginModal = useLoginModal()

    const content = (
        <>
       
            <form className="space-y-4"> 
                <input type="email" placeholder="Enter your e-mail" className="w-full h-[60px] rounded-xl px-4 py-4 border border-gray-400 " />

                <input type="password" placeholder="Enter your password" className="w-full h-[60px] rounded-xl px-4 py-4 border border-gray-400 " />

                <div className="p-5 bg-djbag text-white rounded-xl opacity-80 ">
                    the error message
                </div>
                <CustomButton 
                    label="Submit"
                    onClick = {()=> console.log('clicked submit')}
                />
            </form>
        </>
    )
    return (
        <>
            <Modal
                isOpen = {loginModal.isOpen}
                close = {loginModal.close}
                label = "Log in"
                content={content}
            />
        </>   
    )
}
export default LoginModal;