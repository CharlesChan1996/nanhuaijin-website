'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen, Users, Compass, Star, Quote, Lightbulb } from 'lucide-react'
import { useState, useEffect } from 'react'

const features = [
  {
    name: '文化介绍',
    description: '深入了解南怀瑾先生的生平思想，探索传统文化的深厚底蕴',
    icon: Compass,
    href: '/culture',
    color: 'from-primary-500 to-primary-600'
  },
  {
    name: '经典著作',
    description: '精选经典著作，提供导读和学习指南，让智慧触手可及',
    icon: BookOpen,
    href: '/books',
    color: 'from-accent-500 to-accent-600'
  },
  {
    name: '学习指导',
    description: '系统的学习路径和修行指导，助您在智慧之路上稳步前行',
    icon: Users,
    href: '/learning',
    color: 'from-secondary-500 to-secondary-600'
  },
  {
    name: '实修工具',
    description: '实用的修行工具和日常指导，将智慧融入生活实践',
    icon: Lightbulb,
    href: '/tools',
    color: 'from-sage-500 to-sage-600'
  },
]

const heroQuotes = [
  {
    text: "人生的最高境界是佛为心，道为骨，儒为表，大度看世界。",
    source: "《论语别裁》"
  },
  {
    text: "修行不是为了遇见佛，而是为了遇见自己。",
    source: "《如何修证佛法》"
  },
  {
    text: "真正的修养，是把自己恢复到儿童阶段的天真。",
    source: "《老子他说》"
  },
  {
    text: "学问之道，在厚德载物；人格之成，在自强不息。",
    source: "《易经杂说》"
  },
  {
    text: "今日的执著，会造成明日的后悔。",
    source: "《金刚经说什么》"
  },
  {
    text: "能控制早晨的人，方可控制人生。",
    source: "《孟子旁通》"
  },
  {
    text: "做人如水，做事如山。",
    source: "《论语别裁》"
  },
  {
    text: "一个人内心没有涵养的时候，就会变得浮躁。",
    source: "《中庸讲记》"
  },
  {
    text: "静坐是息心法，心息则神安，神安则气足，气足则血旺。",
    source: "《静坐修道与长生不老》"
  },
  {
    text: "人有三个基本错误是不能犯的：德薄而位尊，智小而谋大，力小而任重。",
    source: "《易经系传别讲》"
  },
  {
    text: "教育的目的，在于培养一个人格健全的人。",
    source: "《论语别裁》"
  },
  {
    text: "读书是为了明理，明理是为了做人。",
    source: "《孟子旁通》"
  },
  {
    text: "真正的智慧，是在平常心中求得的。",
    source: "《禅海蠡测》"
  },
  {
    text: "修行的路上，最大的敌人是自己的习气。",
    source: "《如何修证佛法》"
  },
  {
    text: "人生如梦，但不能因为是梦就不认真地做。",
    source: "《金刚经说什么》"
  },
  {
    text: "学而时习之，不亦说乎？这个'习'字，是实践的意思。",
    source: "《论语别裁》"
  },
  {
    text: "真正的快乐，来自于内心的宁静。",
    source: "《老子他说》"
  },
  {
    text: "做学问要在不疑处有疑，做人要在有疑处不疑。",
    source: "《原本大学微言》"
  },
  {
    text: "人生最难得的是糊涂，但这种糊涂是大智若愚的糊涂。",
    source: "《易经杂说》"
  },
  {
    text: "修行人要有三心：慈悲心、智慧心、平常心。",
    source: "《如何修证佛法》"
  }
]



export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(heroQuotes[0])

  useEffect(() => {
    // 随机选择一句名言
    const randomIndex = Math.floor(Math.random() * heroQuotes.length)
    setCurrentQuote(heroQuotes[randomIndex])

    // 设置页面标题（可选，layout.tsx已经设置了默认标题）
    document.title = '南怀瑾文化传承网 - 传统文化智慧的现代传播平台'
  }, [])

  return (
    <>
      {/* JSON-LD 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "南怀瑾文化传承网",
            "description": "专业的南怀瑾文化传承平台，深入了解南怀瑾先生的思想智慧，学习儒释道三家精髓",
            "url": "https://nanhuaijin-culture.vercel.app",
            "author": {
              "@type": "Person",
              "name": "南怀瑾",
              "description": "当代著名国学大师、教育家、文化传播者"
            },
            "publisher": {
              "@type": "Organization",
              "name": "南怀瑾文化传承网"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://nanhuaijin-culture.vercel.app/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden" role="banner">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>

          {/* Random Quote - Left side - Desktop only */}
          <div className="absolute inset-0 hidden xl:flex items-center justify-start pl-8 2xl:pl-16">
            <div className="relative max-w-xs xl:max-w-sm quote-card">
              <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 xl:p-6 border border-primary-200/50 shadow-lg">
                <Quote className="w-6 h-6 xl:w-8 xl:h-8 text-primary-400 mb-3 xl:mb-4" />
                <blockquote className="text-sm xl:text-lg font-medium text-primary-800 leading-relaxed mb-3 xl:mb-4 italic">
                  "{currentQuote.text}"
                </blockquote>
                <cite className="text-xs xl:text-sm text-primary-600 font-medium">
                  —— 出自《{currentQuote.source}》
                </cite>
              </div>
            </div>
          </div>

          {/* Portrait background - Right side - Tablet and Desktop */}
          <div className="absolute inset-0 hidden lg:flex items-center justify-end pr-4 xl:pr-8 2xl:pr-16">
            <div className="relative w-64 h-80 xl:w-80 xl:h-96 2xl:w-96 2xl:h-[480px] portrait-bg">
              <img
                src="/nanhuaijin.jpg"
                alt="南怀瑾先生肖像 - 当代著名国学大师、教育家、文化传播者"
                className="w-full h-full object-cover object-center rounded-lg blur-[2px] grayscale-[30%]"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/30 to-white/70 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20 rounded-lg"></div>
            </div>
          </div>

          <div className="relative container-custom px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-4 sm:mb-6 animate-fade-in relative z-10 leading-tight">
                传承
                <span className="text-gradient"> 南怀瑾 </span>
                智慧
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-primary-700 mb-6 sm:mb-8 leading-relaxed animate-slide-up relative z-10 px-4 sm:px-0">
                在传统文化的深厚底蕴中寻找人生智慧，<br className="hidden sm:block" />
                让古圣先贤的教诲照亮现代人的心灵之路
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up relative z-10 px-4 sm:px-0">
                <Link href="/culture" className="btn-primary inline-flex items-center justify-center py-3 px-6 text-base sm:text-lg">
                  开始探索
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link href="/learning" className="btn-secondary inline-flex items-center justify-center py-3 px-6 text-base sm:text-lg">
                  学习指导
                  <BookOpen className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile and Tablet Quote - Below title */}
          <div className="xl:hidden relative container-custom mt-6 sm:mt-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-primary-200/50 shadow-md">
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400 mb-2 sm:mb-3" />
                <blockquote className="text-sm sm:text-base font-medium text-primary-800 leading-relaxed mb-2 sm:mb-3 italic">
                  "{currentQuote.text}"
                </blockquote>
                <cite className="text-xs sm:text-sm text-primary-600">
                  —— 出自《{currentQuote.source}》
                </cite>
              </div>
            </div>
          </div>

          {/* Decorative elements - Responsive */}
          <div className="absolute top-10 sm:top-16 lg:top-20 left-4 sm:left-8 lg:left-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-primary-200/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 sm:bottom-16 lg:bottom-20 right-4 sm:right-8 lg:right-10 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-accent-200/30 rounded-full blur-xl"></div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white/50" aria-labelledby="features-heading">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                探索智慧宝库
              </h2>
              <div className="section-divider"></div>
              <p className="text-lg text-primary-700 max-w-2xl mx-auto">
                通过多元化的学习方式，深入理解南怀瑾先生的思想精髓，在传统智慧中找到现代生活的指引
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Link
                    key={feature.name}
                    href={feature.href}
                    className="group card-elegant p-6 hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-3">
                      {feature.name}
                    </h3>
                    <p className="text-primary-700 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="mt-4 flex items-center text-primary-600 group-hover:text-primary-800 transition-colors">
                      <span className="text-sm font-medium">了解更多</span>
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600" aria-labelledby="cta-heading">
          <div className="container-custom text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-6">
              开始您的智慧之旅
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              加入我们，在传统文化的海洋中汲取智慧养分，让古圣先贤的教诲成为您人生路上的明灯
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/learning/path"
                className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                制定学习计划
                <Star className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/books"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
              >
                浏览经典著作
                <BookOpen className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}