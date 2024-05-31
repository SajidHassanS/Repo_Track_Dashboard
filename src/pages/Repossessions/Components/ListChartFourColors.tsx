
const ListChartFourColors = () => {
    const branches=[
        {
            color:"bg-[#a62811]",
            text:"Branch"
        },
        {
            color:"bg-[#d43316]",
            text:"Branch"
        },
        {
            color:"bg-[#ea5136]",
            text:"Branch"
        },
        {
            color:"bg-[#ee6f59]",
            text:"Branch"
        },
        {
            color:"bg-[#f29787]",
            text:"Branch"
        },
        {
            color:"bg-[#f7bfb5] text-red-500",
            text:"Branch"
        },
        {
            color:"bg-[#fce7e3] text-red-500",
            text:"Branch"
        },
        {
            color:"bg-[#00d394]",
            text:"Branch"
        },
        {
            color:"bg-[#6bffd3] text-red-500",
            text:"Branch"
        },
        {
            color:"bg-[#d1fff1] text-red-500",
            text:"Branch"
        },
        
    ]
  return (
    <div className="  py-4 flex flex-row flex-wrap w-full 2xl:flex-col justify-center items-start gap-2">
        {
            branches.map((item,idx)=>(
        <div key={idx} className={`rounded-xl text-center ${item.color} px-8 md:px-16 py-3 text-white`}>{item.text}</div>

            ))
        }
    </div>
  )
}

export default ListChartFourColors