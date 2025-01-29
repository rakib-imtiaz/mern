import PropTypes from 'prop-types'
import { useNavigate, useSearchParams } from 'react-router-dom'
import qs from 'query-string'

const CategoryBox = ({ label, icon: Icon, description }) => {
  const [params, setParams] = useSearchParams()
  const navigate = useNavigate()
  const value = params.get('category')

  const handleClick = () => {
    let currentQuery = {}
    if (params) {
      currentQuery = qs.parse(params.toString())
    }
    const updatedQuery = {
      ...currentQuery,
      category: label,
    }

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      { skipNull: true }
    )

    navigate(url)
  }

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-4 border-2 rounded-xl hover:border-rose-500 transition cursor-pointer group 
      ${value === label ? 'border-rose-500' : 'border-neutral-200'}
      w-[200px] h-[180px]`}
    >
      <Icon
        size={30}
        className={`${value === label ? 'text-rose-500' : 'text-neutral-600'} 
        group-hover:text-rose-500 transition`}
      />
      <div className="text-center">
        <div
          className={`text-lg font-semibold ${value === label ? 'text-rose-500' : 'text-gray-800'
            } group-hover:text-rose-500 transition`}
        >
          {label}
        </div>
        <div className="text-sm text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </div>
      </div>
    </div>
  )
}

CategoryBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.func,
  description: PropTypes.string,
}

export default CategoryBox
