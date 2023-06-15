import { useEffect } from "react"
import { useState } from "react"
import ProfileCard from "./components/ProfileCard"
import useFetch from "./useFetch"
import { pagination } from "./utils"

const url = "https://api.github.com/users/john-smilga/followers?per_page=100"

const App = () => {
  const {
    loading,
    fetchedData: { data },
    error,
  } = useFetch(url)

  const [users, setUsers] = useState([])
  const [pageIndex, setPageIndex] = useState(0)
  useEffect(() => {
    if (loading) {
      return
    }
    setUsers(pagination(data))
  }, [loading])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pageIndex])

  const checkIndex = (index) => {
    if (index < 0) {
      return users.length - 1
    }

    if (index > users.length - 1) {
      return 0
    }

    return index
  }

  const nextPage = () => {
    setPageIndex(checkIndex(pageIndex + 1))
  }

  const prevPage = () => {
    setPageIndex(checkIndex(pageIndex - 1))
  }

  if (loading || users.length < 1) return <h1>Loading...</h1>

  return (
    <section className="app">
      <h1 className="title">Pagination</h1>
      <div className="profile-container">
        {users[pageIndex].map((dataItem) => {
          const { id } = dataItem
          return <ProfileCard key={id} dataItem={dataItem} />
        })}
      </div>

      <div className="button-container">
        <button className="btn btn-prev" onClick={prevPage}>
          prev
        </button>
        {users.map((item, index) => {
          return (
            <button
              key={index}
              className={`btn-page ${index === pageIndex && "active"}`}
              onClick={() => setPageIndex(index)}
            >
              {index + 1}
            </button>
          )
        })}
        <button className="btn btn-next" onClick={nextPage}>
          next
        </button>
      </div>
    </section>
  )
}
export default App
