import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MapPin, BookOpen, Users, Star, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '南怀瑾先生生平简介 - 南怀瑾文化传承',
  description: '详细了解南怀瑾先生的生平经历、学术成就和文化贡献',
}

export default function BiographyPage() {
  const lifeEvents = [
    {
      year: '1918年',
      age: '出生',
      location: '浙江乐清',
      event: '出生于书香门第',
      description: '3月18日出生于浙江省乐清县翁垟镇地团村，原名南常铿。家境殷实，自幼受到良好的传统文化教育。'
    },
    {
      year: '1935年',
      age: '17岁',
      location: '浙江国术馆',
      event: '开始习武学道',
      description: '进入浙江国术馆学习武术，同时开始接触道家思想和修行方法，为日后的学术研究奠定基础。'
    },
    {
      year: '1943年',
      age: '25岁',
      location: '四川峨眉山',
      event: '闭关修行',
      description: '在峨眉山大坪寺闭关修行三年，深入研究佛学经典，获得深刻的修行体验和智慧洞察。'
    },
    {
      year: '1949年',
      age: '31岁',
      location: '台湾',
      event: '迁居台湾',
      description: '随国民政府迁至台湾，开始在台湾传播中华传统文化，成为重要的文化传承者。'
    },
    {
      year: '1960年代',
      age: '40多岁',
      location: '台北',
      event: '创办东西精华协会',
      description: '创办东西精华协会，致力于东西方文化的交流与融合，培养了大批学者和文化传承人。'
    },
    {
      year: '1976年',
      age: '58岁',
      location: '美国',
      event: '赴美讲学',
      description: '应邀赴美国华盛顿大学等多所大学讲学，向西方世界传播中华文化，扩大了国际影响力。'
    },
    {
      year: '1980年代',
      age: '60多岁',
      location: '香港',
      event: '创办太湖大学堂',
      description: '在香港创办太湖大学堂，专门培养传统文化人才，成为重要的文化教育基地。'
    },
    {
      year: '1990年代',
      age: '70多岁',
      location: '大陆',
      event: '回归祖国大陆',
      description: '应邀回到祖国大陆，在各地讲学，为两岸文化交流做出重要贡献。'
    },
    {
      year: '2012年',
      age: '94岁',
      location: '江苏太湖',
      event: '安详示寂',
      description: '9月29日在江苏太湖大学堂安详示寂，享年94岁，一生致力于传统文化的传承与弘扬。'
    }
  ]

  const achievements = [
    {
      category: '学术成就',
      icon: BookOpen,
      items: [
        '著作等身，出版图书60余种',
        '融会贯通儒释道三家思想',
        '开创性地用现代语言阐释古典智慧',
        '建立了完整的传统文化教学体系'
      ]
    },
    {
      category: '教育贡献',
      icon: Users,
      items: [
        '培养了数以万计的学生和弟子',
        '创办多所文化教育机构',
        '推动传统文化的现代化传承',
        '促进东西方文化的交流对话'
      ]
    },
    {
      category: '文化影响',
      icon: Star,
      items: [
        '让传统文化重新焕发生机',
        '影响了几代人的精神追求',
        '推动了国学复兴运动',
        '为中华文化走向世界做出贡献'
      ]
    }
  ]

  const personalTraits = [
    {
      trait: '博学多才',
      description: '精通儒释道三家学说，兼通诗词、书法、武术等多种技艺，学识渊博，见解独到。'
    },
    {
      trait: '平易近人',
      description: '虽然学问深厚，但从不摆架子，总是以平等的心态对待每一个学生，深受爱戴。'
    },
    {
      trait: '幽默风趣',
      description: '讲学时经常妙语连珠，用生动有趣的比喻和故事来阐释深奥的道理，深入浅出。'
    },
    {
      trait: '慈悲济世',
      description: '一生致力于文化教育事业，不求名利，只为传承中华文化，造福后世。'
    }
  ]

  const famousQuotes = [
    {
      quote: "人生的最高境界是佛为心，道为骨，儒为表，大度看世界。",
      context: "体现了先生融会三教的思想境界"
    },
    {
      quote: "学问之道，在厚德载物；人格之成，在自强不息。",
      context: "强调了学问与人格修养的重要性"
    },
    {
      quote: "今日的执著，会造成明日的后悔。",
      context: "教导人们要放下执著，保持智慧"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              南怀瑾先生生平简介
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              一代国学大师，传统文化的传承者与弘扬者，
              用一生的时间诠释了什么是真正的学者风范和文化情怀。
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 基本信息 */}
        <section className="mb-12">
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">基本信息</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <span className="font-semibold text-gray-900">生卒年月：</span>
                    <span className="text-gray-700">1918年3月18日 - 2012年9月29日</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <span className="font-semibold text-gray-900">出生地：</span>
                    <span className="text-gray-700">浙江省乐清县翁垟镇</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <span className="font-semibold text-gray-900">原名：</span>
                    <span className="text-gray-700">南常铿</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <span className="font-semibold text-gray-900">身份：</span>
                    <span className="text-gray-700">国学大师、教育家、文化学者</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 人生历程 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">人生历程</h2>
          <div className="space-y-8">
            {lifeEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start">
                  <div className="w-20 flex-shrink-0">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium text-center">
                      {event.year}
                    </div>
                    <div className="text-center text-gray-500 text-sm mt-1">
                      {event.age}
                    </div>
                  </div>
                  
                  <div className="flex-1 ml-6">
                    <div className="flex items-center mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 mr-3">
                        {event.event}
                      </h3>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {event.location}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 主要成就 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">主要成就</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {achievement.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {achievement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-700 text-sm">
                        <Star className="w-3 h-3 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        {/* 人格特质 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">人格特质</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {personalTraits.map((trait, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {trait.trait}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {trait.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 经典语录 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">经典语录</h2>
          <div className="space-y-6">
            {famousQuotes.map((item, index) => (
              <div key={index} className="bg-amber-50 rounded-lg border border-amber-200 p-6">
                <blockquote className="text-lg font-medium text-gray-900 leading-relaxed mb-3">
                  "{item.quote}"
                </blockquote>
                <p className="text-amber-700 text-sm">
                  {item.context}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 文化影响 */}
        <section className="mb-12">
          <div className="bg-purple-50 rounded-xl p-8 border border-purple-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">文化影响与贡献</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                南怀瑾先生是20世纪最重要的国学大师之一，他用现代的语言和方法，
                将深奥的传统文化智慧传播给现代人，让古老的智慧重新焕发生机。
              </p>
              <p>
                他的著作深入浅出，既有学术的严谨性，又有很强的实用性，
                影响了海内外数以百万计的读者，推动了中华文化的复兴与传承。
              </p>
              <p>
                先生一生致力于教育事业，培养了大批优秀的文化传承人，
                为中华文化的延续和发展做出了不可磨灭的贡献。
              </p>
            </div>
          </div>
        </section>

        {/* 行动按钮 */}
        <section className="text-center">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">继承先生遗志</h3>
            <p className="text-gray-600 mb-6">
              让我们继承南怀瑾先生的文化理想，在新时代继续传承和弘扬中华优秀传统文化。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/books" className="btn-primary inline-flex items-center">
                阅读先生著作
                <BookOpen className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/learning" className="btn-secondary inline-flex items-center">
                开始学习之旅
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}