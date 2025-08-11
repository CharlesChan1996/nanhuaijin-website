'use client'

import { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX, Play, Pause } from 'lucide-react'

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [showControls, setShowControls] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // 设置音频属性
    audio.volume = volume
    audio.loop = true

    // 尝试自动播放（需要用户交互后才能成功）
    const tryAutoPlay = async () => {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch (error) {
        console.log('自动播放被阻止，需要用户交互')
        setShowControls(true)
      }
    }

    // 监听用户首次交互
    const handleFirstInteraction = async () => {
      if (!isPlaying) {
        try {
          await audio.play()
          setIsPlaying(true)
          setShowControls(false)
        } catch (error) {
          console.log('播放失败:', error)
        }
      }
      // 移除事件监听器
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('keydown', handleFirstInteraction)
      document.removeEventListener('touchstart', handleFirstInteraction)
    }

    // 添加用户交互监听器
    document.addEventListener('click', handleFirstInteraction)
    document.addEventListener('keydown', handleFirstInteraction)
    document.addEventListener('touchstart', handleFirstInteraction)

    // 尝试自动播放
    tryAutoPlay()

    return () => {
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('keydown', handleFirstInteraction)
      document.removeEventListener('touchstart', handleFirstInteraction)
    }
  }, [])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        await audio.play()
        setIsPlaying(true)
        setShowControls(false)
      }
    } catch (error) {
      console.log('播放控制失败:', error)
    }
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isMuted) {
      audio.volume = volume
      setIsMuted(false)
    } else {
      audio.volume = 0
      setIsMuted(true)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    
    const audio = audioRef.current
    if (audio && !isMuted) {
      audio.volume = newVolume
    }
  }

  return (
    <>
      {/* 隐藏的音频元素 */}
      <audio
        ref={audioRef}
        src="/music.mp3"
        preload="auto"
        onEnded={() => setIsPlaying(false)}
        onError={(e) => console.log('音频加载错误:', e)}
      />

      {/* 音乐控制面板 */}
      <div className="music-controls">
        {/* 首次播放提示 */}
        {showControls && !isPlaying && (
          <div className="mb-2 bg-primary-600 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
            <p className="text-sm">点击播放背景音乐 🎵</p>
          </div>
        )}

        {/* 音乐控制按钮 */}
        <div className="music-panel flex items-center space-x-2">
          {/* 播放/暂停按钮 */}
          <button
            onClick={togglePlay}
            className="music-button"
            aria-label={isPlaying ? '暂停音乐' : '播放音乐'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>

          {/* 音量控制 */}
          <button
            onClick={toggleMute}
            className="music-button"
            aria-label={isMuted ? '取消静音' : '静音'}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>

          {/* 音量滑块 */}
          <div className="hidden sm:block">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>

          {/* 播放状态指示 */}
          {isPlaying && (
            <div className="music-visualizer">
              <div className="music-bar"></div>
              <div className="music-bar"></div>
              <div className="music-bar"></div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}