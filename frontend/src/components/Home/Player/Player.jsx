import React, { useState, useContext, useRef } from 'react'
import cover from '../../../assets/song_cover.jpg'
import { BiRepeat } from 'react-icons/bi'
import { IoMdSkipBackward, IoMdSkipForward } from 'react-icons/io'
import { PiShuffleBold } from 'react-icons/pi'
import { FaPlay, FaPause } from 'react-icons/fa'
import { HiSpeakerWave } from 'react-icons/hi2'
import { LuHardDriveDownload } from 'react-icons/lu'
import VolumeController from './VolumeController'
import MusicContext from '../../../context/MusicContext'

const Player = () => {
    const [showVolume, setShowVolume] = useState(false)
    const { currentAudio, setCurrentAudio, currentPlaylist, setCurrentPlaylist, isplaying, setIsplaying, currentsong, setCurrentsong } = useContext(MusicContext)
    const myaudio = useRef(null)

    return (
        <>
            <audio src={currentAudio} controls autoPlay hidden={true} ref={myaudio} />
            <div className='fixed bottom-0 left-0 right-0 flex flex-col z-10 bg-[rgb(246,246,246)]'>
                <input type="range" name="progress" id="slider" min={0} max={100} step={0.1} value={0} className='w-full h-[5px] text-green-400 range' />
                <div className='flex justify-between items-center px-3 mb-3'>
                    <div className='flex justify-start items-center gap-3 lg:w-[30vw]'>
                        <img src={currentPlaylist.cover_image} alt="" width={55} className='rounded-lg' draggable="false" />
                        <div className='hidden lg:block'>
                            <span>{currentsong}</span>
                            <p className='text-xs text-gray-500'>{currentPlaylist.artist}</p>
                        </div>
                    </div>
                    <div className='flex text-2xl lg:text-3xl gap-4 lg:gap-6 lg:w-[40vw] justify-center'>
                        <BiRepeat className='text-gray-400 cursor-pointer' />
                        <IoMdSkipBackward className='text-gray-700 hover:text-gray-500 cursor-pointer' />
                        {(isplaying) ?
                            <FaPause className='text-gray-700 hover:text-gray-500 cursor-pointer' onClick={() => {
                                myaudio.current.pause()
                                setIsplaying(!isplaying)
                            }}
                            />
                            :
                            <FaPlay className='text-gray-700 hover:text-gray-500 cursor-pointer' onClick={() => {
                                myaudio.current.play()
                                setIsplaying(!isplaying)
                            }} />
                        }
                        <IoMdSkipForward className='text-gray-700 hover:text-gray-500 cursor-pointer' />
                        <PiShuffleBold className='text-gray-400 cursor-pointer' />
                    </div>
                    <div className='flex items-center lg:w-[30vw] justify-end'>
                        <LuHardDriveDownload className='text-gray-700 hover:text-gray-500 cursor-pointer text-2xl lg:text-3xl lg:mr-2' />
                        <HiSpeakerWave className='text-gray-700 hover:text-gray-500 cursor-pointer text-2xl lg:text-3xl hidden lg:block' onMouseEnter={() => setShowVolume(true)} onMouseLeave={() => setShowVolume(false)} />
                        <VolumeController showVolume={showVolume} setShowVolume={setShowVolume} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Player