import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import MusicContext from '../../../context/MusicContext'

const Playlist = () => {
    const { currentAudio, setCurrentAudio, currentPlaylist, setCurrentPlaylist, isplaying, setIsplaying, currentsong, setCurrentsong, songnumber, setSongnumber } = useContext(MusicContext)
    const { playlistid } = useParams()
    const [playlist, setPlaylist] = useState({
        name: "",
        artist: "",
        cover_image: "",
        songs: []
    })
    useEffect(() => {
        fetch("http://localhost:5000/getsongs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ playlistid })
        }).then((res) => res.json())
            .then((data) => {
                setPlaylist(data)

            })
    }, [])
    return (
        <>
            <div className='flex gap-9 items-center'>
                <div><img src={playlist.cover_image} alt="" width={250} draggable="false" /></div>
                <div className='flex flex-col'>
                    <div className='text-4xl font-semibold'>{playlist.name}</div>
                    <div className='text-xl'>By {playlist.artist}. {playlist.songs.length} Songs</div>
                </div>
            </div>
            <div className='mt-7'>
                {playlist.songs.map((song, index) => {
                    return (
                        <div key={index} className='flex py-2 justify-between hover:bg-white px-4' onClick={() => { setCurrentAudio(playlist.songs); setIsplaying(true); setCurrentsong(song.song_name); setCurrentPlaylist(playlist); setSongnumber(index) }}>
                            <div className='flex gap-8'>
                                <div>{index + 1}</div>
                                <div>{song.song_name}</div>
                            </div>
                            <div>{playlist.artist}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Playlist