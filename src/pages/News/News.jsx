import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Navbar from '../../components/Navbar/Navbar'

import '../../assets/css/news.css'

export default function News() {
  const [news, setNews] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getNews() {
      try {
        const result = await axios.get(
          'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=64U3e8oy0NKoKhizZoBXnb7Jyi9gni39'
        )

        setNews(result.data.results.slice(0, 5))
      } catch (error) {
        setError(error)
      }
    }
    getNews()
  }, [])

  return (
    <>
      <Navbar />

      <div className="mycontainer">
        {error ? (
          <h3>Oops.. Something went wrong :(</h3>
        ) : (
          news?.map((n) => (
            <div key={n.url} className="mb-5">
              <p className="subjudul">{n.section}</p>
              <h2 className="judul">{n.title}</h2>

              <p className="author">{n.byline}</p>

              <div>
                <div className="imgContainer">
                  <img src={n.multimedia[0].url} alt="news" />
                  <p>{n.multimedia[0].caption}</p>
                </div>
              </div>
              <div className="berita">
                <p>{n.abstract}</p>
              </div>

              <hr />
            </div>
          ))
        )}
      </div>
    </>
  )
}
