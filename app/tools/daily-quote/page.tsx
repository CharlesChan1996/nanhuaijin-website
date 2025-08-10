'use client'

import { useState, useEffect } from 'react'
import { RefreshCw, Heart, BookOpen, Share2, Copy } from 'lucide-react'

interface Quote {
  text: string
  author: string
  source?: string
  category: string
}

export default function DailyQuotePage() {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null)
  const [favorites, setFavorites] = useState<Quote[]>([])
  const [showFavorites, setShowFavorites] = useState(false)

  const quotes: Quote[] = [
    {
      text: "人生的最高境界是佛为心，道为骨，儒为表，大度看世界。",
      author: "南怀瑾",
      source: "《论语别裁》",
      category: "人生智慧"
    },
    {
      text: "修行不是为了遇见佛，而是为了遇见自己。",
      author: "南怀瑾",
      source: "《如何修证佛法》",
      category: "修行感悟"
    },
    {
      text: "真正的修养，是把自己恢复到儿童阶段的天真。",
      author: "南怀瑾",
      source: "《老子他说》",
      category: "修养品格"
    },
    {
      text: "学问之道，在厚德载物；人格之成，在自强不息。",
      author: "南怀瑾",
      source: "《易经杂说》",
      category: "学问之道"
    },
    {
      text: "静坐是息心法，心息则神安，神安则气足，气足则血旺。",
      author: "南怀瑾",
      source: "《静坐修道与长生不老》",
      category: "静坐修行"
    },
    {
      text: "做人如水，做事如山。做人尽量往低处走，让着别人，遇见利益和名声尽可能往下退，给自己留下做大事的格局。",
      author: "南怀瑾",
      source: "《论语别裁》",
      category: "处世智慧"
    },
    {
      text: "能控制早晨的人，方可控制人生。一个人如果连早起都做不到，你还指望他这一天能做些什么呢？",
      author: "南怀瑾",
      source: "《孟子旁通》",
      category: "自律修身"
    },
    {
      text: "今日的执著，会造成明日的后悔。",
      author: "南怀瑾",
      source: "《金刚经说什么》",
      category: "佛学智慧"
    },
    {
      text: "一个人内心没有涵养的时候，就会变得浮躁。",
      author: "南怀瑾",
      source: "《中庸讲记》",
      category: "内心修养"
    },
    {
      text: "人有三个基本错误是不能犯的：一是德薄而位尊，二是智小而谋大，三是力小而任重。",
      author: "南怀瑾",
      source: "《易经系传别讲》",
      category: "人生警示"
    }
  ]

  // 获取今日语录
  const getTodayQuote = () => {
    const today = new Date()
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)
    return quotes[dayOfYear % quotes.length]
  }

  // 获取随机语录
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    return quotes[randomIndex]
  }

  // 加载收藏的语录
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorite-quotes')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
    setCurrentQuote(getTodayQuote())
  }, [])

  // 保存收藏到localStorage
  const saveFavoritesToStorage = (favoritesToSave: Quote[]) => {
    localStorage.setItem('favorite-quotes', JSON.stringify(favoritesToSave))
  }

  // 添加到收藏
  const addToFavorites = (quote: Quote) => {
    const isAlreadyFavorite = favorites.some(fav => fav.text === quote.text)
    if (!isAlreadyFavorite) {
      const newFavorites = [...favorites, quote]
      setFavorites(newFavorites)
      saveFavoritesToStorage(newFavorites)
    }
  }

  // 从收藏中移除
  const removeFromFavorites = (quote: Quote) => {
    const newFavorites = favorites.filter(fav => fav.text !== quote.text)
    setFavorites(newFavorites)
    saveFavoritesToStorage(newFavorites)
  }

  // 检查是否已收藏
  const isFavorite = (quote: Quote) => {
    return favorites.some(fav => fav.text === quote.text)
  }

  // 复制语录
  const copyQuote = (quote: Quote) => {
    const text = `"${quote.text}" —— ${quote.author}`
    navigator.clipboard.writeText(text).then(() => {
      alert('语录已复制到剪贴板')
    }).catch(() => {
      alert('复制失败，请手动复制')
    })
  }

  // 分享语录
  const shareQuote = (quote: Quote) => {
    if (navigator.share) {
      navigator.share({
        title: '南怀瑾智慧语录',
        text: `"${quote.text}" —— ${quote.author}`,
        url: window.location.href
      })
    } else {
      copyQuote(quote)
    }
  }

  if (!currentQuote) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">每日一言</h1>
          <p className="text-lg text-gray-600">
            每天一句智慧语录，在日常生活中感受传统文化的魅力
          </p>
        </div>

        {/* 导航按钮 */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setShowFavorites(false)}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              !showFavorites
                ? 'bg-amber-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            今日语录
          </button>
          <button
            onClick={() => setShowFavorites(true)}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              showFavorites
                ? 'bg-amber-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            我的收藏 ({favorites.length})
          </button>
        </div>

        {!showFavorites ? (
          /* 今日语录 */
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-amber-600" />
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed mb-6">
                "{currentQuote.text}"
              </blockquote>
              
              <div className="text-lg text-gray-600 mb-2">
                —— {currentQuote.author}
              </div>
              
              {currentQuote.source && (
                <div className="text-sm text-gray-500 mb-4">
                  出自《{currentQuote.source}》
                </div>
              )}
              
              <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                {currentQuote.category}
              </div>
            </div>

            {/* 操作按钮 */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setCurrentQuote(getRandomQuote())}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>换一句</span>
              </button>
              
              <button
                onClick={() => isFavorite(currentQuote) ? removeFromFavorites(currentQuote) : addToFavorites(currentQuote)}
                className={`px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors ${
                  isFavorite(currentQuote)
                    ? 'bg-red-100 hover:bg-red-200 text-red-700'
                    : 'bg-pink-100 hover:bg-pink-200 text-pink-700'
                }`}
              >
                <Heart className={`w-4 h-4 ${isFavorite(currentQuote) ? 'fill-current' : ''}`} />
                <span>{isFavorite(currentQuote) ? '取消收藏' : '收藏'}</span>
              </button>
              
              <button
                onClick={() => copyQuote(currentQuote)}
                className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
              >
                <Copy className="w-4 h-4" />
                <span>复制</span>
              </button>
              
              <button
                onClick={() => shareQuote(currentQuote)}
                className="bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>分享</span>
              </button>
            </div>
          </div>
        ) : (
          /* 收藏列表 */
          <div className="space-y-6">
            {favorites.length === 0 ? (
              <div className="text-center py-12">
                <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">还没有收藏的语录</h3>
                <p className="text-gray-500">点击语录下方的收藏按钮来保存您喜欢的智慧语录</p>
              </div>
            ) : (
              favorites.map((quote, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <blockquote className="text-lg font-medium text-gray-900 leading-relaxed mb-4">
                    "{quote.text}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-gray-600 mb-1">—— {quote.author}</div>
                      {quote.source && (
                        <div className="text-sm text-gray-500">出自《{quote.source}》</div>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                        {quote.category}
                      </span>
                      <button
                        onClick={() => removeFromFavorites(quote)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Heart className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* 使用提示 */}
        <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">使用建议</h3>
          <div className="space-y-2 text-gray-700">
            <p>• <strong>每日阅读：</strong>建议每天花几分钟时间阅读和思考今日语录</p>
            <p>• <strong>深入思考：</strong>不要只是阅读，要思考语录背后的深层含义</p>
            <p>• <strong>生活应用：</strong>尝试将智慧语录的道理应用到日常生活中</p>
            <p>• <strong>收藏整理：</strong>收藏对您有启发的语录，定期回顾</p>
          </div>
        </div>
      </div>
    </div>
  )
}