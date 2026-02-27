interface FilterCardCellProps {
  label: string;
  active?: boolean;
}

const FilterCardCell = ({ label, active = false }: FilterCardCellProps) => {
  return (
    <>
      <div
        className={`${active ? "bg-[#3E465B]" : "bg-[#ffffff00]    border-[1.5px] border-[#424349]"}
        whitespace-nowrap
       text-[#B1B2B9]
         px-6
         py-1 
         rounded-lg
         text-sm
         cursor-pointer
       hover:bg-[#2d3039]`}
      >
        <p>{label}</p>
      </div>
    </>
  );
};

export default FilterCardCell;
