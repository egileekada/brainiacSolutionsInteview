import { Circle, SideImg } from "../imgs";


export default function SideComponent() {
    return (
        <div className=" w-full h-screen flex flex-col items-center justify-between py-8 gap-3 text-white " >
            <p className=" text-[24px] tracking-[-2%] font-semibold text-center max-w-[470px] " >Social media shared today, tomorrow or by location</p>
            <div className=" w-full flex relative justify-center h-[74vh]" >
                <img alt="side" src={SideImg} className=" relative z-10 h-full " />
                <div className=" w-full h-full absolute inset-0 flex justify-center items-center " >
                    <img alt="side" src={Circle} className=" w-[75%]  " />
                </div>
            </div>
            <div className=" w-full flex justify-center gap-3 items-center " >
                <div className=" w-[10px] h-[10px] rounded-full border border-white " >

                </div>
                <div className=" relative w-5 h-5 flex rounded-full  " >
                    <div className=" w-full h-full rounded-l-full" />
                    <div className=" w-full h-full rounded-r-full border border-white" />
                    <div className=" absolute inset-[1px] bg-[#1E78F7] rounded-full flex justify-center items-center " >
                        <div className=" w-[10px] h-[10px] rounded-full bg-white " />
                    </div>
                </div>
                <div className=" w-[10px] h-[10px] rounded-full border border-white  " >

                </div>
            </div>
        </div>
    )
}
