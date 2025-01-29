import { Helmet } from 'react-helmet-async'
import Categories from '../../components/Categories/Categories'
import Rooms from '../../components/Home/Rooms'
import Hero from '../../components/Home/Hero'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>

      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <Categories />

      {/* Rooms Section */}
      <Rooms />
    </div>
  )
}

export default Home
