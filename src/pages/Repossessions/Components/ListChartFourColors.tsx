const ListChartFourColors = () => {
    const branchData = [
      { name: "Branch", color: "bg-[#a62811]" },
      { name: "Drivable", color: "bg-[#d43316]" },
      { name: "Keys", color: "bg-[#ea5136]" },
      { name: "Clients", color: "bg-[#00FF0A]" },
      { name: "Recovert Agents", color: "bg-[#f29787]" },
      { name: "Disposition", color: "bg-[#0c7699] text-red-500" },
      { name: "Vehicle Year", color: "bg-[#f8991d] text-red-500" },
      { name: "Vehicle Make", color: "bg-[#00d394]" },
      { name: "Vehicle Model", color: "bg-[#6bffd3] text-red-500" },
      { name: "Storage Location", color: "bg-[#c9c822] text-red-500" },
      { name: "Fee Type", color: "bg-[#c9c382] text-red-500" },
    ];
  
    return (
      <div className="py-4 flex flex-row flex-wrap w-full 2xl:flex-col justify-center items-start gap-2 ml-8">
        <div className="flex justify-between items-center text-black dark:text-white">
          <h3 className="font-bold text-title-lg ml-40">Branches</h3> {/* Adjusted title */}
        </div>
        {branchData.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-xl text-center ${item.color} ml-40 px-8 md:px-1 py-3 text-white flex items-center justify-center`}
            style={{ minWidth: "250px", minHeight: "50px" }} // Set minimum dimensions
          >
            {item.name}
          </div>
        ))}
      </div>
    );
  };
  
  export default ListChartFourColors;
  