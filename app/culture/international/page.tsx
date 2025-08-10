import { Metadata } from 'next'
import Link from 'next/link'
import { Globe, Plane, BookOpen, Users, Building, Languages, ArrowRight, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: '国际传播 - 南怀瑾文化传承',
  description: '中华文化通过南怀瑾先生的努力在世界范围内的传播和影响',
}

export default function InternationalPage() {
  const globalJourney = [
    {
      year: '1976年',
      location: '美国',
      event: '首次赴美讲学',
      description: '应邀赴美国华盛顿大学等多所知名大学讲学，开启了中华文化国际传播的新篇章。',
      impact: '在美国学术界引起轰动，让西方世界第一次系统地接触到中华传统文化的精髓。'
    },
    {
      year: '1980年代',
      location: '欧洲',
      event: '欧洲文化交流',
      description: '在英国、法国、德国等欧洲国家进行文化交流，推动东西方文化对话。',
      impact: '促进了欧洲学者对中华文化的深入研究，建立了长期的学术合作关系。'
    },
    {
      year: '1990年代',
      location: '东南亚',
      event: '亚洲文化圈影响',
      description: '在新加坡、马来西亚、泰国等东南亚国家建立文化教育机构。',
      impact: '强化了海外华人的文化认同，推动了中华文化在东南亚的传承。'
    },
    {
      year: '2000年代',
      location: '全球网络',
      event: '数字化传播',
      description: '利用互联网技术，让南师的思想通过网络传播到世界各个角落。',
      impact: '打破了地域限制，让全球华人和文化爱好者都能接触到南师的智慧。'
    }
  ]

  const globalInstitutions = [
    {
      region: '北美洲',
      countries: ['美国', '加拿大'],
      institutions: [
        '华盛顿大学东亚研究中心',
        '加州大学伯克利分校中国研究所',
        '多伦多大学东亚学院',
        '纽约南怀瑾文化中心'
      ],
      activities: ['大学讲座', '学术研讨', '文化沙龙', '师资培训'],
      influence: '在北美华人社区产生深远影响，推动了中华文化在西方主流社会的认知度。'
    },
    {
      region: '欧洲',
      countries: ['英国', '法国', '德国', '意大利'],
      institutions: [
        '牛津大学中国研究中心',
        '巴黎东方语言文化学院',
        '柏林自由大学汉学系',
        '罗马大学东方学院'
      ],
      activities: ['学术交流', '文化展览', '翻译出版', '国际会议'],
      influence: '促进了欧洲汉学研究的发展，推动了中欧文化交流的深化。'
    },
    {
      region: '亚太地区',
      countries: ['日本', '韩国', '新加坡', '澳大利亚'],
      institutions: [
        '东京大学东洋文化研究所',
        '首尔大学中文系',
        '新加坡南洋理工大学',
        '悉尼大学中国研究中心'
      ],
      activities: ['文化节庆', '教育合作', '人才交流', '出版发行'],
      influence: '在亚太地区形成了中华文化传播的重要网络，影响了整个地区的文化发展。'
    }
  ]

  const culturalBridges = [
    {
      aspect: '语言翻译',
      icon: Languages,
      description: '南师著作被翻译成多种语言',
      achievements: [
        '英文版著作在欧美广泛发行',
        '日文、韩文版本在东亚流传',
        '法文、德文版本在欧洲出版',
        '多语种网络资源丰富'
      ]
    },
    {
      aspect: '学术合作',
      icon: Building,
      description: '与国际知名学府建立合作关系',
      achievements: [
        '与哈佛、耶鲁等名校合作',
        '设立国际研究项目',
        '培养跨文化研究人才',
        '举办国际学术会议'
      ]
    },
    {
      aspect: '文化交流',
      icon: Users,
      description: '促进不同文化间的理解与对话',
      achievements: [
        '东西方哲学对话',
        '宗教间的和谐交流',
        '现代科学与古代智慧结合',
        '跨文化教育模式创新'
      ]
    }
  ]

  const globalImpact = [
    {
      category: '学术影响',
      description: '推动了国际汉学研究的发展',
      examples: [
        '多所国际知名大学设立相关研究项目',
        '国际学术期刊发表相关研究论文',
        '培养了一批国际汉学研究专家',
        '促进了中西方学术交流'
      ]
    },
    {
      category: '教育影响',
      description: '改变了海外中华文化教育模式',
      examples: [
        '海外中文学校采用南师教学理念',
        '国际学校开设中华文化课程',
        '成人教育机构推广传统文化',
        '在线教育平台传播南师思想'
      ]
    },
    {
      category: '社会影响',
      description: '影响了海外华人的文化认同',
      examples: [
        '增强了海外华人的文化自信',
        '促进了华人社区的文化传承',
        '推动了中华文化的本土化发展',
        '加强了不同族裔间的文化理解'
      ]
    }
  ]

  const modernSpread = [
    {
      platform: '数字媒体',
      methods: ['网络讲座', '在线课程', '数字图书馆', '社交媒体'],
      reach: '全球数百万用户',
      impact: '打破地域限制，让南师思想传播到世界每个角落'
    },
    {
      platform: '国际出版',
      methods: ['多语种翻译', '国际发行', '电子书籍', '有声读物'],
      reach: '50多个国家和地区',
      impact: '让不同语言背景的读者都能接触到南师的智慧'
    },
    {
      platform: '文化机构',
      methods: ['文化中心', '教育基金会', '研究院所', '交流协会'],
      reach: '遍布六大洲',
      impact: '建立了持续的文化传播网络和支持体系'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              国际传播与影响
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              南怀瑾先生不仅是中华文化的传承者，更是文化的国际传播者。
              通过他的努力，中华文化走向世界，在全球范围内产生了深远影响。
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 全球传播历程 */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">全球传播历程</h2>
            <p className="text-lg text-gray-600">
              从1976年首次赴美讲学开始，南师开启了中华文化国际传播的新纪元
            </p>
          </div>

          <div className="space-y-8">
            {globalJourney.map((journey, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Plane className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                        {journey.year}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 mr-3">
                        {journey.event}
                      </h3>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {journey.location}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {journey.description}
                    </p>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-blue-800">
                        <strong>重要影响：</strong>{journey.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 全球机构网络 */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">全球机构网络</h2>
            <p className="text-lg text-gray-600">
              在世界各地建立的文化教育机构，形成了完整的传播网络
            </p>
          </div>

          <div className="space-y-8">
            {globalInstitutions.map((region, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="flex items-center mb-6">
                  <Globe className="w-8 h-8 text-green-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{region.region}</h3>
                    <p className="text-gray-600">
                      覆盖国家：{region.countries.join('、')}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">主要机构：</h4>
                    <ul className="space-y-2">
                      {region.institutions.map((institution, instIndex) => (
                        <li key={instIndex} className="flex items-center text-gray-700">
                          <Building className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {institution}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">主要活动：</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.activities.map((activity, actIndex) => (
                        <span key={actIndex} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-green-800">
                    <strong>区域影响：</strong>{region.influence}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 文化桥梁 */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">搭建文化桥梁</h2>
            <p className="text-lg text-gray-600">
              通过多种方式促进东西方文化的交流与理解
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {culturalBridges.map((bridge, index) => {
              const IconComponent = bridge.icon
              return (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-6 h-6 text-purple-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {bridge.aspect}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{bridge.description}</p>
                  
                  <ul className="space-y-2">
                    {bridge.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        {/* 全球影响力 */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">全球影响力</h2>
            <p className="text-lg text-gray-600">
              南师的国际传播在多个层面产生了深远影响
            </p>
          </div>

          <div className="space-y-8">
            {globalImpact.map((impact, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {impact.category}
                </h3>
                <p className="text-gray-600 mb-4">{impact.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {impact.examples.map((example, exIndex) => (
                    <div key={exIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 现代传播方式 */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">现代传播方式</h2>
            <p className="text-lg text-gray-600">
              利用现代技术和平台，让南师思想传播到世界每个角落
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {modernSpread.map((spread, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {spread.platform}
                </h3>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">传播方式：</h4>
                  <div className="flex flex-wrap gap-2">
                    {spread.methods.map((method, methodIndex) => (
                      <span key={methodIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-gray-600">覆盖范围：</span>
                  <span className="font-semibold text-blue-600 ml-1">{spread.reach}</span>
                </div>
                
                <p className="text-gray-700 text-sm">{spread.impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 未来展望 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">未来展望</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">发展趋势</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• 数字化传播将更加普及和深入</li>
                  <li>• 多语种资源将更加丰富完善</li>
                  <li>• 国际合作将更加紧密广泛</li>
                  <li>• 年轻一代将成为传播主力</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">发展目标</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• 让更多国家了解中华文化精髓</li>
                  <li>• 培养更多国际文化传播人才</li>
                  <li>• 促进世界文明的交流互鉴</li>
                  <li>• 为构建人类命运共同体贡献智慧</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 行动按钮 */}
        <section className="text-center">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">参与国际文化传播</h3>
            <p className="text-gray-600 mb-6">
              每个人都可以成为中华文化的国际传播者，
              让我们一起将南师的智慧传播到世界各地。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learning" className="btn-primary inline-flex items-center">
                开始学习传播
                <BookOpen className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/culture" className="btn-secondary inline-flex items-center">
                了解更多文化
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}