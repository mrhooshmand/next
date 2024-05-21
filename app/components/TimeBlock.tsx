import React from 'react'
const TimeBlock = () => {
    let time = new Date().toLocaleTimeString('fa-ir');
    setInterval(() => {
        time = new Date().toLocaleTimeString('fa-ir')
    }, 100)
    return (
        <>
            {time}
        </>
    )
}

export default TimeBlock