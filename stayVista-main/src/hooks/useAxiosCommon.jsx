import axios from 'axios'



// bes url setup 
export const axiosCommon = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})
const useAxiosCommon = () => {
  

  return axiosCommon
}

export default useAxiosCommon
