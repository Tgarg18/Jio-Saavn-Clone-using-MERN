import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import MusicContext from '../../../context/MusicContext'

const Playlist = () => {
    const { currentAudio, setCurrentAudio, setCurrentPlaylist, setIsplaying, setCurrentsong, songnumber, setSongnumber } = useContext(MusicContext)
    const { playlistid } = useParams()
    const [playlist, setPlaylist] = useState({
        name: "",
        artist: "",
        cover_image: "",
        songs: []
    })
    const formatTime = (time) => {
        if (!time)
            return `0:00`;
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URI}/api/getsongs`, {
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
                <div>
                    <img src={playlist.cover_image} alt="" className='w-[250px] max-w-24 lg:max-w-none rounded-xl' draggable="false" />
                </div>
                <div className='flex flex-col'>
                    <div className='text-4xl text-[var(--text)] font-semibold'>{playlist.name}</div>
                    <div className='text-xl text-[var(--textSoft)]'>By {playlist.artist}. {playlist.songs.length} Songs</div>
                </div>
            </div>
            <div className='mt-7 overflow-scroll h-auto pb-32 w-full'>
                {playlist.songs.map((song, index) => {
                    return (
                        <div key={index} className={`flex py-2 justify-between hover:bg-[var(--bg2)] px-4 w-full ${(songnumber === index && currentAudio === playlist.songs) ? "text-[rgb(57,190,170)] font-semibold" : ""}`} onClick={() => { setCurrentAudio(playlist.songs); setIsplaying(true); setCurrentsong(song.song_name); setCurrentPlaylist(playlist); setSongnumber(index) }}>
                            <div className='flex gap-8 w-1/2'>
                                <div className={`${(songnumber === index && currentAudio === playlist.songs) ? "text-[rgb(57,190,170)]" : "text-[--text]"}`}>{index + 1}</div>
                                <div className={`${(songnumber === index && currentAudio === playlist.songs) ? "text-[rgb(57,190,170)]" : "text-[--text]"}`}>{song.song_name}</div>
                            </div>
                            <div className={`w-1/2 ${(songnumber === index && currentAudio === playlist.songs) ? "text-[rgb(57,190,170)]" : "text-[--text]"}`}>{playlist.artist}</div>
                            <div className={`w-1/2 ${(songnumber === index && currentAudio === playlist.songs) ? "text-[rgb(57,190,170)]" : "text-[--text]"}`}>{formatTime(Number(song.totalTime))}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Playlist