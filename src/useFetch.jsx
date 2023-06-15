import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [fetchedData, setFetchedData] = useState("")

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios(url)
      console.log(response)
      setFetchedData(response)
      setLoading(false)
    } catch (error) {
      console.log(error.response)
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { loading, error, fetchedData }
}

export default useFetch
