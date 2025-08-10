'use client'

import { useState, useEffect, useRef } from 'react'
import { Play, Pause, RotateCcw, Settings, Bell } from 'lucide-react'

export default function MeditationTimerPage() {
  const [duration, setDuration] = useState(10) // 默认10分钟
  const [timeLeft, setTimeLeft] = useState(duration * 60) // 转换为秒
  const [isRunning, setIsRunning] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // 预设时间选项
  const presetTimes = [5, 10, 15, 20, 30, 45, 60]

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false)
            setIsCompleted(true)
            // 播放提示音（如果浏览器支持）
            try {
              const audio = new Audio('/meditation-bell.mp3')
              audio.play().catch(() => {
                // 如果音频播放失败，使用浏览器默认提示音
                console.log('Meditation completed!')
              })
            } catch (error) {
              console.log('Meditation completed!')
            }
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning, timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleStart = () => {
    if (timeLeft === 0) {
      setTimeLeft(duration * 60)
      setIsCompleted(false)
    }
    setIsRunning(true)
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setTimeLeft(duration * 60)
    setIsCompleted(false)
  }

  const handleDurationChange = (newDuration: number) => {
    setDuration(newDuration)
    setTimeLeft(newDuration * 60)
    setIsRunning(false)
    setIsCompleted(false)
  }

  const progress = ((duration * 60 - timeLeft) / (duration * 60)) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">静坐计时器</h1>
          <p className="text-lg text-gray-600">
            专为静坐修行设计的计时工具，帮助您建立规律的修行习惯
          </p>
        </div>

        {/* 主计时器 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          {/* 时间显示 */}
          <div className="text-center mb-8">
            <div className="relative w-64 h-64 mx-auto mb-6">
              {/* 进度圆环 */}
              <svg className="w-64 h-64 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                  className="transition-all duration-1000 ease-linear"
                />
              </svg>
              
              {/* 时间文字 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-gray-900 mb-2">
                    {formatTime(timeLeft)}
                  </div>
                  <div className="text-sm text-gray-500">
                    {isCompleted ? '修行完成' : isRunning ? '修行中...' : '准备开始'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 控制按钮 */}
          <div className="flex justify-center space-x-4 mb-8">
            {!isRunning ? (
              <button
                onClick={handleStart}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors"
              >
                <Play className="w-5 h-5" />
                <span>{timeLeft === duration * 60 ? '开始' : '继续'}</span>
              </button>
            ) : (
              <button
                onClick={handlePause}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors"
              >
                <Pause className="w-5 h-5" />
                <span>暂停</span>
              </button>
            )}
            
            <button
              onClick={handleReset}
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              <span>重置</span>
            </button>
          </div>

          {/* 完成提示 */}
          {isCompleted && (
            <div className="text-center mb-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <Bell className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-green-800 font-semibold">恭喜！您已完成本次静坐修行</p>
                <p className="text-green-600 text-sm mt-1">愿您在修行路上精进不懈</p>
              </div>
            </div>
          )}
        </div>

        {/* 时间设置 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Settings className="w-5 h-5 mr-2" />
            时间设置
          </h3>
          
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
            {presetTimes.map((time) => (
              <button
                key={time}
                onClick={() => handleDurationChange(time)}
                className={`py-2 px-3 rounded-lg font-medium transition-colors ${
                  duration === time
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {time}分
              </button>
            ))}
          </div>
        </div>

        {/* 修行提示 */}
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">修行提示</h3>
          <div className="space-y-3 text-gray-700">
            <p>• <strong>姿势：</strong>保持脊柱挺直，身体放松，双手自然放置</p>
            <p>• <strong>呼吸：</strong>自然呼吸，可以数息或观察呼吸</p>
            <p>• <strong>心态：</strong>不要执著于任何境界，保持平常心</p>
            <p>• <strong>环境：</strong>选择安静的地方，关闭手机等干扰源</p>
          </div>
        </div>
      </div>
    </div>
  )
}