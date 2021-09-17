import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Navbar from '../../components/Navbar/Navbar'

import '../../assets/css/news.css'

export default function News() {
  const [news, setNews] = useState({})

  useEffect(() => {
    async function getNews() {
      const result = await axios.get(
        'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ffee6e40f6b04efba4a74eb6f3215c3b'
      )
      setNews(result.data.articles[0])
      console.log(result.data.articles[0])
    }
    getNews()
  }, [])

  return (
    <>
      <Navbar />
      <div className="mycontainer">
        <p className="subjudul">{news?.description}</p>
        <h1 className="judul">{news?.title}</h1>

        <p className="author">Article by: {news?.author}</p>
        {/* <p className="ket">{news?.publishedAt.split('T')[0]}</p> */}

        <div>
          <div className="imgContainer">
            <img src={news?.urlToImage} alt="" />
          </div>
        </div>
        <div className="berita">
          <p>{news?.content}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi
            vitae voluptatem suscipit animi dignissimos error, iste saepe, unde
            impedit, voluptas tenetur ea quasi velit. Nesciunt suscipit dolorum
            molestiae quis debitis natus harum dolorem temporibus. Temporibus
            blanditiis id fugit et velit quidem mollitia iste, quo non
            aspernatur veritatis possimus aliquid facere tenetur fuga tempore?
            Iusto, magni voluptatibus. Inventore perferendis consequatur
            dignissimos! Voluptate enim soluta animi eligendi libero esse?
            Atque, architecto aliquam. Aliquam laudantium, atque veritatis
            reprehenderit porro accusantium perferendis. Repellendus,
            dignissimos vel! Cum dignissimos delectus eos incidunt magnam
            reiciendis est, ducimus debitis fugit ad porro qui facilis magni
            ullam odit distinctio consequatur natus voluptatibus atque commodi
            laboriosam quidem illo. Quidem, in dolore. Rem excepturi minima
            itaque temporibus veritatis facilis optio adipisci modi nemo
            provident commodi eos aut praesentium neque nihil quos eligendi,
            deleniti iure magni veniam dolorem vero atque. Possimus, assumenda?
            Sint error mollitia explicabo, veritatis id quasi. Iusto, odio. Ab
            cupiditate, molestiae fugiat beatae omnis natus eius eos. Maxime
            nostrum dolore sint quaerat totam ipsum cupiditate quo deserunt
            itaque optio modi eius numquam, adipisci animi voluptatibus
            obcaecati perferendis unde repellat, aspernatur voluptate nesciunt
            voluptatum eos sit quidem. Omnis excepturi eaque est veniam quasi
            inventore eius odit et nobis distinctio.
          </p>
        </div>
      </div>
    </>
  )
}
