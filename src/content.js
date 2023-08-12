import { forwardRef } from "react"
import { useRef, useImperativeHandle } from "react"
import video1 from "./video/video1.mp4"


function Video(props, video) {

    const video2 = useRef()

    useImperativeHandle(video, () => ({
        play: () => {
            video2.current.play()
        },
        pause: () => {
            video2.current.pause()
        }
    }))

    return (
        <div>
            <video ref={video2} src={video1} type="video/mp4"></video>
        </div>
    )
}

export default forwardRef(Video)