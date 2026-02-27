import Search from '../../Home-Components/Search/Search'
import FilterCard from '../../Home-Components/FilterCard/FilterCard'
import Favorites from '../../Home-Components/FavoratesTab/Favorates'
import Todaytab from '../../Home-Components/TodayTab/Todaytab'
import CallCard from '../../Home-Components/CallCard/CallCard'
import BottomCard from '../../Partials/BottomCard/BottomCard'

const Home = () => {
  return (
    <div className='relative w-97.5 min-h-200 bg-[#1E1F24] px-3 py-4'>
          <Search/>
          <FilterCard/>
          <Favorites/>
          <Todaytab/>
          <CallCard/>
          <BottomCard/>
    </div>
  )
}

export default Home