import { useEffect, useState } from 'react'
import getNowPlayingItem from './SpotifyAPI'
import { FaSpotify } from 'react-icons/fa6'

const SpotifyNowPlaying = (props) => {
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState({})

  useEffect(() => {
    Promise.all([
      getNowPlayingItem(
        props.client_id,
        props.client_secret,
        props.refresh_token,
      ),
    ]).then((results) => {
      setResult(results[0])
      setLoading(false)
    })
  })

  return (
    <div className="flex pl-5 bg-[#E9EEE8]/80 dark:bg-[#b6cbb1]/20 backdrop-blur-sm h-[85px] w-[full] md:w-[auto] rounded-[50px] items-center outline-none overflow-hidden">
      {result.isPlaying ? (
      <img
        src={result.albumImageUrl} // Use the fetched album image URL
        alt="Album image"
        className={`h-[45px] w-[45px] rounded-full absolute ${result.isPlaying ? 'animate-spin-slow' : ''}`}
      />
    ) : (
      <FaSpotify
        className='fill-[#1DB954]/70 dark:fill-[#1DB954] absolute' size={45}
      />
    )}
      {loading ? (
        <div className="pl-10 grid grid-cols-1">
          <a className="pl-10 font-bold text-[#78927b] dark:text-[#8bae8f]">
            On Rotation
          </a>
          <a className="pl-10 font-light text-[#829d85]">Loading tracks...</a>
        </div>
      ) : (
        <div className="pl-10 grid grid-cols-1">
          {result.isPlaying ? (
            <div className="grid grid-cols-1">
              <a className="pl-10 font-bold text-[#78927b] dark:text-[#8bae8f]">
                Now Playing
              </a>
              <a
                className="pl-10 font-light text-[#829d85] overflow-hidden"
                href={result.songUrl}
                target="_blank"
              >
                {result.title} by {result.artist}
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1">
              <a className="pl-10 font-bold text-[#78927b] dark:text-[#8bae8f]">
                On Rotation
              </a>
              <a className="pl-10 font-light text-[#829d85]">
                Dancing Queen by ABBA
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SpotifyNowPlaying
