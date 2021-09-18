import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Navbar from '../../components/Navbar/Navbar'

import '../../assets/css/news.css'

export default function News() {
  const [news, setNews] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getNews() {
      try {
        const result = await axios.get(
          'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ffee6e40f6b04efba4a74eb6f3215c3b'
        )
        setNews(result.data.articles[5])
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
          <>
            <p className="subjudul">{news?.description}</p>
            <h1 className="judul">{news?.title}</h1>

            <p className="author">
              {news?.author && 'Article by: ' + news.author}
            </p>

            <div>
              <div className="imgContainer">
                <img src={news?.urlToImage} alt="" />
              </div>
            </div>
            <div className="berita">
              <p>{news?.content}</p>
            </div>
          </>
        )}
      </div>
    </>
  )
}
