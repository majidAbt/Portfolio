import { createRef, useEffect, useState } from "react"
import loadscript from 'load-script'

const useSoundCloud = () => {

    // state hooks
    const [isPlaying, setIsPlaying] = useState(false)
    const [playlistIndex, setPlaylistIndex] = useState(0)
    const [player, setPlayer] = useState(false)

    // ref for iframe element - https://reactjs.org/docs/refs-and-the-dom.html
    const iframeRef = createRef()

    // initialization - load soundcloud widget API and set SC event listeners

    useEffect
        (() => {

            // use load-script module to load SC Widget API
            loadscript('https://w.soundcloud.com/player/api.js', () => {

                // initialize player and store reference in state
                const player = window.SC.Widget(iframeRef.current)
                setPlayer(player)

                const { PLAY, PLAY_PROGRESS, PAUSE, FINISH, ERROR } = window.SC.Widget.Events

                // NOTE: closures created - cannot access react state or props from within and SC callback functions!!

                player.bind(PLAY, () => {
                    // update state to playing
                    setIsPlaying(true)
                    // check to see if song has changed - if so update state with next index
                    player.getCurrentSoundIndex((playerPlaylistIndex) => {
                        setPlaylistIndex(playerPlaylistIndex)
                    })
                })

                player.bind(PAUSE, () => {
                    // update state if player has paused - must double check isPaused since false positives
                    player.isPaused((playerIsPaused) => {
                        if (playerIsPaused) setIsPlaying(false)
                    })
                })

            })

        }, [])

    return { iframeRef }
}

export default useSoundCloud