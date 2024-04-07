import React from 'react'

const VolumeController = ({showVolume,setShowVolume}) => {
    return (
        <>
            <div className={`w-[80px] absolute -rotate-90 bottom-20 -right-3 shadow-md px-2 rounded-lg bg-white ${showVolume ? 'block' : 'hidden'}`} onMouseEnter={() => setShowVolume(true)} onMouseLeave={() => setShowVolume(false)}>
                <input
                    type="range"
                    min={0}
                    max={100}
                    step={0.1}
                    value={0}
                    className='h-[5px] text-green-400 range'
                />
            </div>
        </>
    )
}

export default VolumeController 