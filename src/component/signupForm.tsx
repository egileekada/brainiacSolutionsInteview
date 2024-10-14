import { CustomInput } from "./";
import { AppleBadge, Google, GoogleBadge, Logo } from "../imgs";

export default function SignupForm() {
    return (
        <div className=' w-full px-6 md:px-14 py-8 ' >
            <div className=" flex gap-2 items-center " >
                <img alt="logo" src={Logo} />
                <p className=" tracking-[-2%] font-semibold text-lg " >Capzul</p>
            </div>
            <p className=" text-textColor text-2xl font-semibold tracking-[-2%] mt-6 " >Create account</p>
            <p className=" text-secondarybtn text-sm tracking-[-2%] " >For business, band or celebrity.</p>
            <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 " >
                <CustomInput type="text" label="First name" />
                <CustomInput type="text" label="Last name" />
                <CustomInput type="text" label="Email or phone number" />
                <CustomInput type="date" label="Date of birth (DD/MM/YY)" />
                <CustomInput type="password" label="Password" />
                <CustomInput type="password" label="Confirm password" />
            </div>
            <div className=" w-full flex lg:flex-row flex-col-reverse lg:items-center lg:gap-0 gap-4 lg:justify-between mt-6 " >
                <div className=" flex items-center gap-2 " >
                    <input type="checkbox" className=" w-5 h-5 " />
                    <p className=" text-secondarybtn text-sm tracking-[-2%] " >Remember me</p>
                </div>
                <p role="button" className=" text-primarybtn underline text-sm tracking-[-2%] " >Forgot password?</p>
            </div>
            <div className=" flex items-center gap-2 mt-4 " >
                <input type="checkbox" className=" w-5 h-5 " />
                <p className=" text-secondarybtn text-sm tracking-[-2%] " >I agree to all the Terms and Privacy policy </p>
            </div>
            <div className=" w-full lg:flex-row flex-col flex gap-4 mt-8 " >
                <button className=" w-full h-[48px] rounded-[5px] bg-primarybtn tracking-[-2%] text-sm font-semibold text-white " >
                    Create account
                </button>
                <button className=" w-full h-[48px] rounded-[5px] flex justify-center items-center gap-2 bg-secondarybtn tracking-[-2%] text-sm font-semibold text-white " >
                    <img alt="google" src={Google} />
                    Sign-in with google
                </button>
            </div>
            <p className=" text-secondarybtn text-sm tracking-[-2%] mt-8 text-center " >{`Don’t have an account? `}<span className=" text-primarybtn " role="button" >Log In</span></p>
            <div className=" mt-10 flex lg:justify-start justify-center gap-4 " >
                <button>
                    <img alt="Googlebadge" src={GoogleBadge} />
                </button>
                <button>
                    <img alt="Googlebadge" src={AppleBadge} />
                </button>
            </div>
        </div>
    )
}
