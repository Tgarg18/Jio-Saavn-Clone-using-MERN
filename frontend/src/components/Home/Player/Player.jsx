import React, { useState, useContext, useRef, useEffect } from 'react';
import { BiRepeat } from 'react-icons/bi';
import { IoMdSkipBackward, IoMdSkipForward } from 'react-icons/io';
import { PiShuffleBold } from 'react-icons/pi';
import { FaPlay, FaPause } from 'react-icons/fa';
import { HiSpeakerWave } from 'react-icons/hi2';
import { HiSpeakerXMark } from "react-icons/hi2";
import { LuHardDriveDownload } from 'react-icons/lu';
import VolumeController from './VolumeController';
import MusicContext from '../../../context/MusicContext';

const Player = () => {
    const [showVolume, setShowVolume] = useState(false);
    const { currentAudio, setCurrentAudio, currentPlaylist, setCurrentPlaylist, isplaying, setIsplaying, songnumber, setSongnumber } = useContext(MusicContext);
    const myaudio = useRef(null);
    const [isMuted, setIsMuted] = useState(false);
    const sliderRef = useRef(null);
    const [volume, setVolume] = useState(100);
    const [curtim, setCurTim] = useState(0);
    const [isSeeking, setIsSeeking] = useState(false);

    const handleTimeUpdate = (e) => {
        const currentTime = e.target.currentTime;
        const duration = Number(currentAudio[songnumber].totalTime);
        setCurTim(currentTime); // Update current time

        // Update slider position if not seeking
        if (!isSeeking) {
            const percent = (currentTime / duration) * 100;
            sliderRef.current.style.background = `linear-gradient(to right, cyan ${percent}%, #ccc ${percent}%)`;
            sliderRef.current.value = percent;
        }
    };

    useEffect(() => {
        // Update current time on audio load
        myaudio.current.addEventListener('timeupdate', handleTimeUpdate);
        return () => myaudio.current.removeEventListener('timeupdate', handleTimeUpdate);
    }, [songnumber]);
    useEffect(() => {
        // Set volume
        myaudio.current.volume = volume / 100;
        myaudio.current.muted = isMuted;
    }, [volume]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleSeek = (e) => {
        const newValue = e.target.value;
        const newTime = (newValue / 100) * currentAudio[songnumber].totalTime;
        myaudio.current.currentTime = newTime;
        setCurTim(newTime);
    };

    const handleSeekStart = () => {
        setIsSeeking(true);
    };

    const handleSeekEnd = () => {
        setIsSeeking(false);
    };
    const toggleMute = () => {
        setIsMuted(!isMuted);
    };



    return (
        <>
            <audio src={currentAudio[songnumber]?.audio} controls autoPlay hidden={true} ref={myaudio} onEnded={() => { setSongnumber(songnumber + 1) }} />
            <div className='fixed bottom-0 left-0 right-0 flex flex-col z-10 bg-[rgb(246,246,246)]'>
                <input
                    type="range"
                    name="progress"
                    id="slider"
                    min={0}
                    max={100}
                    step={0.1}
                    value={(curtim / currentAudio[songnumber]?.totalTime) * 100 || 0}
                    ref={sliderRef}
                    className='w-full h-[5px] text-green-400 range'
                    onChange={handleSeek}
                    onMouseDown={handleSeekStart}
                    onMouseUp={handleSeekEnd}
                    style={{ background: `linear-gradient(to right, cyan ${(curtim / currentAudio[songnumber]?.totalTime) * 100}%, #ccc ${(curtim / currentAudio[songnumber]?.totalTime) * 100}%)` }}
                />
                <div className='flex justify-between items-center px-2'>
                    <div id='time'>{formatTime(curtim)}</div>
                    <div>{formatTime(Number(currentAudio[songnumber]?.totalTime))}</div>
                </div>
                <div className='flex justify-between items-center px-3 mb-3'>
                    <div className='flex justify-start items-center gap-3 lg:w-[30vw]'>
                        <img src={currentPlaylist.cover_image} alt="" width={55} className='rounded-lg' draggable="false" />
                        <div className='hidden lg:block'>
                            <span>{currentAudio[songnumber]?.song_name}</span>
                            <p className='text-xs text-gray-500'>{currentPlaylist.artist}</p>
                        </div>
                    </div>
                    <div className='flex text-2xl lg:text-3xl gap-4 lg:gap-6 lg:w-[40vw] justify-center'>
                        <BiRepeat className='text-gray-400 cursor-pointer' />
                        <IoMdSkipBackward className='text-gray-700 hover:text-gray-500 cursor-pointer' onClick={() => { if (songnumber !== 0) setSongnumber(songnumber - 1) }} />
                        {isplaying ? (
                            <FaPause className='text-gray-700 hover:text-gray-500 cursor-pointer' onClick={() => { myaudio.current.pause(); setIsplaying(!isplaying); }} />
                        ) : (
                            <FaPlay className='text-gray-700 hover:text-gray-500 cursor-pointer' onClick={() => { myaudio.current.play(); setIsplaying(!isplaying); }} />
                        )}
                        <IoMdSkipForward className='text-gray-700 hover:text-gray-500 cursor-pointer' onClick={() => { if (songnumber !== currentAudio.length - 1) setSongnumber(songnumber + 1) }} />
                        <PiShuffleBold className='text-gray-400 cursor-pointer' />
                    </div>
                    <div className='flex items-center lg:w-[30vw] justify-end'>
                        <LuHardDriveDownload className='text-gray-700 hover:text-gray-500 cursor-pointer text-2xl lg:text-3xl lg:mr-2' />
                        {(isMuted) ? 
                        <HiSpeakerXMark onClick={()=>{
                            setVolume(50)
                            toggleMute()
                        }} className='text-gray-700 hover:text-gray-500 cursor-pointer text-2xl lg:text-3xl hidden lg:block' onMouseEnter={() => setShowVolume(true)} onMouseLeave={() => setShowVolume(false)} />
                        :
                        <HiSpeakerWave onClick={()=>{
                            setVolume(0)
                            toggleMute()
                        }} className='text-gray-700 hover:text-gray-500 cursor-pointer text-2xl lg:text-3xl hidden lg:block' onMouseEnter={() => setShowVolume(true)} onMouseLeave={() => setShowVolume(false)} />
                        }
                        <VolumeController setIsMuted={setIsMuted} showVolume={showVolume} setShowVolume={setShowVolume} volume={volume} setVolume={setVolume} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Player;
