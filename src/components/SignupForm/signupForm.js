import React,{useState} from 'react'
import Password from '../Password/password';
import TitleFade from "../TitleFade/titleFade";
import useSignUp from '../../hooks/data/post/useSignUp';
import Input from '../Input/input';
import ButtonValidationForm from '../ButtonValidationForm/buttonValidationForm';
import signUpFormData from '../../formData/signUpFormData';

const SignupForm = () => {

    const [isPasswordValid,setIsPasswordValid] = useState(false);

    const handlesetIsPasswordValid = (value) => {
        setIsPasswordValid(value)
    } 

    const {handleSubmit, isLoading, alertBanner} = useSignUp();

    const inputs = signUpFormData.map((input, index)=>{
    if (input.type === "password") {
        return  <Password
        title={input.title}
        id={input.id}
        type={input.type}
        size={input.size}
        handlesetIsPasswordValid={handlesetIsPasswordValid}
        key={index}
        />
    }else{
    return <Input
        title={input.title}
        id={input.id}
        type={input.type}
        size={input.size}
        options={input.type === "select" && input.options}
        key={index}
    />
}}
    )
    
  return (            
      <form action="#" method="POST" onSubmit={(e) => handleSubmit(e)}>
        {alertBanner && alertBanner}
            <TitleFade title="Inscription"/>
            <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-2 ">Personal Information</h2>
                {inputs}
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <a href="/login" className="text-sm font-semibold leading-6 ">
                Cancel
                </a>
                <ButtonValidationForm
                    isLoading={isLoading} 
                    isPasswordValid={isPasswordValid}     
                />
            </div>
    </form>
  )
}

export default SignupForm;