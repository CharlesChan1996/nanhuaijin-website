'use client'

import { useState, useEffect } from 'react'
import { Plus, BookOpen, Calendar, CheckCircle, Target, Trash2, Edit3 } from 'lucide-react'

interface ReadingPlan {
  id: string
  title: string
  books: string[]
  startDate: string
  endDate: string
  dailyGoal: number // 每天阅读页数
  currentProgress: number
  totalPages: number
  status: 'active' | 'completed' | 'paused'
  createdAt: string
}

export default function ReadingPlanPage() {
  const [plans, setPlans] = useState<ReadingPlan[]>([])
  const [isCreating, setIsCreating] = useState(false)
  const [newPlan, setNewPlan] = useState({
    title: '',
    books: [''],
    startDate: '',
    endDate: '',
    dailyGoal: 10,
    totalPages: 300
  })

  // 从localStorage加载计划
  useEffect(() => {
    const savedPlans = localStorage.getItem('reading-plans')
    if (savedPlans) {
      setPlans(JSON.parse(savedPlans))
    }
  }, [])

  // 保存计划到localStorage
  const savePlansToStorage = (plansToSave: ReadingPlan[]) => {
    localStorage.setItem('reading-plans', JSON.stringify(plansToSave))
  }

  // 创建新计划
  const handleCreatePlan = () => {
    if (!newPlan.title.trim() || !newPlan.books[0].trim()) return

    const plan: ReadingPlan = {
      id: Date.now().toString(),
      title: newPlan.title,
      books: newPlan.books.filter(book => book.trim()),
      startDate: newPlan.startDate,
      endDate: newPlan.endDate,
      dailyGoal: newPlan.dailyGoal,
      currentProgress: 0,
      totalPages: newPlan.totalPages,
      status: 'active',
      createdAt: new Date().toISOString()
    }

    const updatedPlans = [plan, ...plans]
    setPlans(updatedPlans)
    savePlansToStorage(updatedPlans)
    setNewPlan({
      title: '',
      books: [''],
      startDate: '',
      endDate: '',
      dailyGoal: 10,
      totalPages: 300
    })
    setIsCreating(false)
  }

  // 更新进度
  const updateProgress = (planId: string, newProgress: number) => {
    const updatedPlans = plans.map(plan => {
      if (plan.id === planId) {
        const status = newProgress >= plan.totalPages ? 'completed' : plan.status
        return { ...plan, currentProgress: newProgress, status }
      }
      return plan
    })
    setPlans(updatedPlans)
    savePlansToStorage(updatedPlans)
  }

  // 删除计划
  const deletePlan = (planId: string) => {
    if (confirm('确定要删除这个阅读计划吗？')) {
      const updatedPlans = plans.filter(plan => plan.id !== planId)
      setPlans(updatedPlans)
      savePlansToStorage(updatedPlans)
    }
  }

  // 添加书籍输入框
  const addBookInput = () => {
    setNewPlan({ ...newPlan, books: [...newPlan.books, ''] })
  }

  // 更新书籍
  const updateBook = (index: number, value: string) => {
    const updatedBooks = [...newPlan.books]
    updatedBooks[index] = value
    setNewPlan({ ...newPlan, books: updatedBooks })
  }

  // 移除书籍输入框
  const removeBookInput = (index: number) => {
    const updatedBooks = newPlan.books.filter((_, i) => i !== index)
    setNewPlan({ ...newPlan, books: updatedBooks })
  }

  // 计算进度百分比
  const getProgressPercentage = (plan: ReadingPlan) => {
    return Math.min((plan.currentProgress / plan.totalPages) * 100, 100)
  }

  // 计算剩余天数
  const getDaysRemaining = (endDate: string) => {
    const end = new Date(endDate)
    const today = new Date()
    const diffTime = end.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">阅读计划</h1>
              <p className="text-gray-600 mt-2">制定和跟踪您的阅读目标，养成良好的学习习惯</p>
            </div>
            <button
              onClick={() => setIsCreating(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>新建计划</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 创建计划表单 */}
        {isCreating && (
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">创建新的阅读计划</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">计划名称</label>
                <input
                  type="text"
                  placeholder="例如：南怀瑾经典著作阅读计划"
                  value={newPlan.title}
                  onChange={(e) => setNewPlan({ ...newPlan, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">阅读书目</label>
                {newPlan.books.map((book, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      placeholder="输入书名"
                      value={book}
                      onChange={(e) => updateBook(index, e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    {newPlan.books.length > 1 && (
                      <button
                        onClick={() => removeBookInput(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={addBookInput}
                  className="text-green-600 hover:text-green-800 text-sm font-medium"
                >
                  + 添加书籍
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">开始日期</label>
                  <input
                    type="date"
                    value={newPlan.startDate}
                    onChange={(e) => setNewPlan({ ...newPlan, startDate: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">结束日期</label>
                  <input
                    type="date"
                    value={newPlan.endDate}
                    onChange={(e) => setNewPlan({ ...newPlan, endDate: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">每日目标（页数）</label>
                  <input
                    type="number"
                    min="1"
                    value={newPlan.dailyGoal}
                    onChange={(e) => setNewPlan({ ...newPlan, dailyGoal: parseInt(e.target.value) || 10 })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">总页数</label>
                  <input
                    type="number"
                    min="1"
                    value={newPlan.totalPages}
                    onChange={(e) => setNewPlan({ ...newPlan, totalPages: parseInt(e.target.value) || 300 })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setIsCreating(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  取消
                </button>
                <button
                  onClick={handleCreatePlan}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  创建计划
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 计划列表 */}
        <div className="space-y-6">
          {plans.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">还没有阅读计划</h3>
              <p className="text-gray-500">创建您的第一个阅读计划，开始系统化的学习之旅</p>
            </div>
          ) : (
            plans.map((plan) => (
              <div key={plan.id} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{plan.title}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        plan.status === 'completed' ? 'bg-green-100 text-green-800' :
                        plan.status === 'active' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {plan.status === 'completed' ? '已完成' :
                         plan.status === 'active' ? '进行中' : '已暂停'}
                      </span>
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {plan.startDate} 至 {plan.endDate}
                        </span>
                        <span className="flex items-center">
                          <Target className="w-4 h-4 mr-1" />
                          每日 {plan.dailyGoal} 页
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                        <span>阅读进度</span>
                        <span>{plan.currentProgress} / {plan.totalPages} 页 ({getProgressPercentage(plan).toFixed(1)}%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${getProgressPercentage(plan)}%` }}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">书目列表：</h4>
                      <div className="flex flex-wrap gap-2">
                        {plan.books.map((book, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                            {book}
                          </span>
                        ))}
                      </div>
                    </div>

                    {plan.status === 'active' && (
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <label className="text-sm text-gray-600">更新进度：</label>
                          <input
                            type="number"
                            min="0"
                            max={plan.totalPages}
                            defaultValue={plan.currentProgress}
                            onBlur={(e) => updateProgress(plan.id, parseInt(e.target.value) || 0)}
                            className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                          />
                          <span className="text-sm text-gray-500">页</span>
                        </div>
                        
                        {plan.endDate && (
                          <div className="text-sm text-gray-600">
                            剩余 {getDaysRemaining(plan.endDate)} 天
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => deletePlan(plan.id)}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 使用提示 */}
        <div className="bg-green-50 rounded-xl p-6 border border-green-200 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">使用建议</h3>
          <div className="space-y-2 text-gray-700">
            <p>• <strong>合理规划：</strong>根据自己的时间安排制定可行的阅读目标</p>
            <p>• <strong>持续跟踪：</strong>每天更新阅读进度，保持学习的连续性</p>
            <p>• <strong>灵活调整：</strong>根据实际情况适当调整计划，不要给自己太大压力</p>
            <p>• <strong>质量优先：</strong>注重理解质量，不要只追求阅读速度</p>
          </div>
        </div>
      </div>
    </div>
  )
}