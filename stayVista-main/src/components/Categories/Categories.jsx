import Container from '../Shared/Container'
import CategoryBox from './CategoryBox'
import { categories } from './CategoriesData.js'
import Heading from '../Shared/Heading'

const Categories = () => {
  return (
    <div className="bg-white py-12">
      <Container>
        <Heading
          title="Explore by Category"
          subtitle="Find your perfect stay based on your preferences"
          center={true}
        />
        <div className='pt-8 flex flex-wrap items-center justify-center gap-6'>
          {categories.map(item => (
            <CategoryBox key={item.label} label={item.label} icon={item.icon} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Categories
