import React from 'react'


export default function BlogTitle({ titleColor, borderColor, title, desc, }) {
    console.log("Color", borderColor)
    return (
        <div className="w-[370px] h-[360px] flex flex-col bg-[#1d1d1d] p-8 justify-around align-center gap-6" >
            <hr className={`w-full border-t-2 ${borderColor}`} />
            <div className='flex flex-col gap-16 text-center'>

                <h1 className={`${titleColor} text-2xl`}>
                    {title}
                </h1>
                <h3 className='text-white text-lg'>
                    {desc}
                </h3>
            </div>
            <hr className={`w-full border-t-2 ${borderColor}`} />
        </div>

    )
}
