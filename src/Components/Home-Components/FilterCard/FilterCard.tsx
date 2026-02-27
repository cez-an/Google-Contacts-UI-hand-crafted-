import FilterCardCell from "../FilterCardCell/FilterCardCell"

const FilterCard = () => {
  return (
    <div className="py-4 flex gap-2 overflow-x-auto no-scrollbar ">
        <FilterCardCell label="All" active={true}/>
        <FilterCardCell label="Missed" />
        <FilterCardCell label="Contacts" />
        <FilterCardCell label="Non-spam" />
        <FilterCardCell label="Spam" />
        <FilterCardCell label="Recording" />
    </div>
  )
}

export default FilterCard