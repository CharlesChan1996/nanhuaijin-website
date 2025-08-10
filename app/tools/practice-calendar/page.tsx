'use client'

import { useState, useEffect } from 'react'
import { Calendar, CheckCircle, Plus, Target, TrendingUp } from 'lucide-react'

interface PracticeRecord {
  date: string
  meditation: boolean
  reading: boolean
  reflection: boolean
  notes: string
}

export default function PracticeCalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [records, setRecords] = useState<PracticeRecord[]>([])
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [showModal, setShowModal] = useState(false)
  const [currentRecord, setCurrentRecord] = useState<PracticeRecord>({
    date: '',
    meditation: false,
    reading: false,
    reflection: false,
    notes: ''
  })

  // 从localStorage加载记录
  useEffect(() => {
    const savedRecords = localStorage.getItem('practice-records')
    if (savedRecords) {
      setRecords(JSON.parse(savedRecords))
    }
  }, [])

  // 保存记录到localStorage
  const saveRecordsToStorage = (recordsToSave: PracticeRecord[]) => {
    localStorage.setItem('practice-records', JSON.stringify(recordsToSave))
  }

  // 获取指定日期的记录
  const getRecordForDate = (date: string): PracticeRecord | undefined => {
    return records.find(record => record.date === date)
  }

  // 保存或更新记录
  const saveRecord = () => {
    const existingIndex = records.findIndex(record => record.date === currentRecord.date)
    let updatedRecords

    if (existingIndex >= 0) {
      updatedRecords = [...records]
      updatedRecords[existingIndex] = currentRecord
    } else {
      updatedRecords = [...records, currentRecord]
    }

    setRecords(updatedRecords)
    saveRecordsToStorage(updatedRecords)
    setShowModal(false)
  }

  // 打开记录模态框
  const openRecordModal = (dateString: string) => {
    const existingRecord = getRecordForDate(dateString)
    setCurrentRecord(existingRecord || {
      date: dateString,
      meditation: false,
      reading: false,
      reflection: false,
      notes: ''
    })
    setSelectedDate(dateString)
    setShowModal(true)
  }

  // 生成日历
  const generateCalendar = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())

    const days = []
    const current = new Date(startDate)

    for (let i = 0; i < 42; i++) {
      days.push(new Date(current))
      current.setDate(current.getDate() + 1)
    }

    return days
  }

  // 格式化日期
  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0]
  }

  // 检查日期是否有完整的修行记录
  const hasCompleteRecord = (date: string) => {
    const record = getRecordForDate(date)
    return record && record.meditation && record.reading && record.reflection
  }

  // 检查日期是否有部分修行记录
  const hasPartialRecord = (date: string) => {
    const record = getRecordForDate(date)
    return record && (record.meditation || record.reading || record.reflection)
  }

  // 计算本月统计
  const getMonthlyStats = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const monthRecords = records.filter(record => {
      const recordDate = new Date(record.date)
      return recordDate.getFullYear() === year && recordDate.getMonth() === month
    })

    const totalDays = monthRecords.length
    const meditationDays = monthRecords.filter(r => r.meditation).length
    const readingDays = monthRecords.filter(r => r.reading).length
    const reflectionDays = monthRecords.filter(r => r.reflection).length
    const completeDays = monthRecords.filter(r => r.meditation && r.reading && r.reflection).length

    return {
      totalDays,
      meditationDays,
      readingDays,
      reflectionDays,
      completeDays
    }
  }

  const calendarDays = generateCalendar()
  const monthNames = [
    '一月', '二月', '三月', '四月', '五月', '六月',
    '七月', '八月', '九月', '十月', '十一月', '十二月'
  ]
  const weekDays = ['日', '一', '二', '三', '四', '五', '六']
  const stats = getMonthlyStats()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">修行日历</h1>
              <p className="text-gray-600 mt-2">记录每日修行，培养持续精进的习惯</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                ←
              </button>
              <h2 className="text-xl font-semibold text-gray-900">
                {currentDate.getFullYear()}年 {monthNames[currentDate.getMonth()]}
              </h2>
              <button
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* 日历主体 */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              {/* 星期标题 */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {weekDays.map(day => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* 日历格子 */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => {
                  const dateString = formatDate(day)
                  const isCurrentMonth = day.getMonth() === currentDate.getMonth()
                  const isToday = dateString === formatDate(new Date())
                  const hasComplete = hasCompleteRecord(dateString)
                  const hasPartial = hasPartialRecord(dateString)

                  return (
                    <button
                      key={index}
                      onClick={() => openRecordModal(dateString)}
                      className={`
                        relative h-16 p-1 text-sm border border-gray-100 hover:bg-gray-50 transition-colors
                        ${!isCurrentMonth ? 'text-gray-300' : 'text-gray-900'}
                        ${isToday ? 'bg-blue-50 border-blue-200' : ''}
                        ${hasComplete ? 'bg-green-50 border-green-200' : ''}
                        ${hasPartial && !hasComplete ? 'bg-yellow-50 border-yellow-200' : ''}
                      `}
                    >
                      <div className="text-left">
                        {day.getDate()}
                      </div>
                      
                      {isCurrentMonth && (hasComplete || hasPartial) && (
                        <div className="absolute bottom-1 right-1">
                          {hasComplete ? (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          ) : (
                            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                          )}
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* 侧边栏统计 */}
          <div className="space-y-6">
            {/* 本月统计 */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                本月统计
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">修行天数</span>
                  <span className="font-semibold text-gray-900">{stats.totalDays}天</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">静坐修行</span>
                  <span className="font-semibold text-blue-600">{stats.meditationDays}天</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">经典阅读</span>
                  <span className="font-semibold text-green-600">{stats.readingDays}天</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">反思总结</span>
                  <span className="font-semibold text-purple-600">{stats.reflectionDays}天</span>
                </div>
                
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">完整修行</span>
                    <span className="font-semibold text-orange-600">{stats.completeDays}天</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 修行目标 */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                修行目标
              </h3>
              
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  每日静坐20分钟
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  阅读经典30分钟
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  晚间反思总结
                </div>
              </div>
            </div>

            {/* 图例说明 */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">图例说明</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-100 border border-green-200 rounded mr-3"></div>
                  <span className="text-gray-700">完整修行</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-100 border border-yellow-200 rounded mr-3"></div>
                  <span className="text-gray-700">部分修行</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-100 border border-blue-200 rounded mr-3"></div>
                  <span className="text-gray-700">今天</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 记录模态框 */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                修行记录 - {selectedDate}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="meditation"
                    checked={currentRecord.meditation}
                    onChange={(e) => setCurrentRecord({...currentRecord, meditation: e.target.checked})}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="meditation" className="ml-3 text-gray-700">
                    静坐修行（20分钟以上）
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="reading"
                    checked={currentRecord.reading}
                    onChange={(e) => setCurrentRecord({...currentRecord, reading: e.target.checked})}
                    className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                  />
                  <label htmlFor="reading" className="ml-3 text-gray-700">
                    经典阅读（30分钟以上）
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="reflection"
                    checked={currentRecord.reflection}
                    onChange={(e) => setCurrentRecord({...currentRecord, reflection: e.target.checked})}
                    className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="reflection" className="ml-3 text-gray-700">
                    反思总结
                  </label>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    修行心得
                  </label>
                  <textarea
                    value={currentRecord.notes}
                    onChange={(e) => setCurrentRecord({...currentRecord, notes: e.target.value})}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="记录今日的修行体会..."
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  取消
                </button>
                <button
                  onClick={saveRecord}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  保存
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}