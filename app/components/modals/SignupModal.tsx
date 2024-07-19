'use client'
import { useState } from "react";
import Modal from "./Modal";
import useSignupModal from "../hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";
 

const SignupModal = () =>{
    const signupModal = useSignupModal()

    const content = (
        <>
       
            <form className="space-y-4"> 
                <input type="email" placeholder="Enter your e-mail" className="w-full h-[60px] rounded-xl px-4 py-4 border border-gray-400 " />

                <input type="password" placeholder="Enter your password" className="w-full h-[60px] rounded-xl px-4 py-4 border border-gray-400 " />

                <input type="password" placeholder="Retype your password" className="w-full h-[60px] rounded-xl px-4 py-4 border border-gray-400 " />

                <div className="p-5 bg-djbag text-white rounded-xl opacity-80 ">
                    the error message
                </div>
                <CustomButton 
                    label="Save"
                    onClick = {()=> console.log('clicked save ')}
                />
            </form>
        </>
    )
    return (
        <>
            <Modal
                isOpen = {signupModal.isOpen}
                close = {signupModal.close}
                label = "Sign up"
                content={content}
            />
        </>   
    )
}
export default SignupModal;