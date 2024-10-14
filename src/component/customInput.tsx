

export default function CustomInput({ 
    type,
    label
}: {
    type: "date" | "text" | "email" | "password";
    label: string;
}) {
    return (
        <div className=" w-full flex flex-col text-secondarybtn text-sm tracking-[-2%] " >
            <p >{label}</p>
            <input type={type} className=" px-4 h-[48px] border border-bordercolor rounded-[5px] " />
        </div>
    )
}
