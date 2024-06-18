import {useState, useEffect} from "react"

const useFetch = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  useEffect( () => {

  },[])
  return { data, error, loading}
}