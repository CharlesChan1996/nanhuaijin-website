import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Users, Compass, Star, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
    title: '学习指导 - 南怀瑾文化传承',
    description: '系统的学习路径指引，帮助您深入了解南怀瑾先生的思想体系',
}

export default function LearningPage() {
    const learningPaths = [
        {
            id: 'beginner',
            title: '初学者入门',
            description: '适合刚接触南怀瑾思想的朋友',
            duration: '3-6个月',
            books: ['论语别裁', '孟子旁通', '老子他说'],
            color: 'bg-blue-50 border-blue-200',
            iconName: 'BookOpen'
        },
        {
            id: 'intermediate',
            title: '进阶修学',
            description: '深入理解传统文化精髓',
            duration: '6-12个月',
            books: ['易经杂说', '金刚经说什么', '圆觉经略说'],
            color: 'bg-green-50 border-green-200',
            iconName: 'Compass'
        },
        {
            id: 'advanced',
            title: '深度实修',
            description: '理论与实践相结合的修行指导',
            duration: '持续修行',
            books: ['禅海蠡测', '定慧初修', '如何修证佛法'],
            color: 'bg-purple-50 border-purple-200',
            iconName: 'Star'
        }
    ]

    const practiceGuides = [
        {
            title: '静坐入门',
            description: '基础静坐方法与注意事项',
            link: '/practice/meditation'
        },
        {
            title: '日常修行',
            description: '将修行融入日常生活的方法',
            link: '/practice/daily'
        },
        {
            title: '读书方法',
            description: '如何正确阅读经典著作',
            link: '/practice/reading'
        },
        {
            title: '疑难解答',
            description: '修行过程中常见问题解答',
            link: '/practice/faq'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* 页面标题 */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            学习指导
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            系统的学习路径，帮助您循序渐进地深入了解南怀瑾先生的思想体系，
                            从初学入门到深度实修，找到适合自己的修学道路。
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* 学习路径 */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">学习路径</h2>
                        <p className="text-lg text-gray-600">
                            根据您的基础选择合适的学习路径，循序渐进地深入学习
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {learningPaths.map((path) => {
                            return (
                                <div
                                    key={path.id}
                                    className={`${path.color} rounded-xl p-8 border-2 hover:shadow-lg transition-shadow`}
                                >
                                    <div className="flex items-center mb-6">
                                        {path.iconName === 'BookOpen' && <BookOpen className="h-8 w-8 text-gray-700 mr-3" />}
                                        {path.iconName === 'Compass' && <Compass className="h-8 w-8 text-gray-700 mr-3" />}
                                        {path.iconName === 'Star' && <Star className="h-8 w-8 text-gray-700 mr-3" />}
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            {path.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-700 mb-4">{path.description}</p>

                                    <div className="mb-6">
                                        <span className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                                            学习周期：{path.duration}
                                        </span>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-3">推荐书目：</h4>
                                        <ul className="space-y-2">
                                            {path.books.map((book, index) => (
                                                <li key={index} className="flex items-center text-gray-700">
                                                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                                    {book}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link
                                        href={`/learning/${path.id}`}
                                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        开始学习
                                        <ArrowRight className="h-4 w-4 ml-1" />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* 实修指导 */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">实修指导</h2>
                        <p className="text-lg text-gray-600">
                            理论学习与实际修行相结合，获得真正的智慧体验
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {practiceGuides.map((guide, index) => (
                            <Link
                                key={index}
                                href={guide.link}
                                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600">
                                    {guide.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    {guide.description}
                                </p>
                                <div className="flex items-center text-blue-600 text-sm font-medium">
                                    了解更多
                                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* 学习工具 */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">学习工具</h2>
                        <p className="text-lg text-gray-600">
                            辅助工具帮助您更好地进行学习和修行
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <Users className="h-6 w-6 text-blue-600 mr-3" />
                                <h3 className="text-lg font-semibold text-gray-900">学习笔记</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                记录学习心得，整理重要观点，建立个人知识体系
                            </p>
                            <Link
                                href="/tools/notes"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                开始记录 →
                            </Link>
                        </div>

                        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <BookOpen className="h-6 w-6 text-green-600 mr-3" />
                                <h3 className="text-lg font-semibold text-gray-900">阅读计划</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                制定个人阅读计划，跟踪学习进度，保持学习节奏
                            </p>
                            <Link
                                href="/tools/reading-plan"
                                className="text-green-600 hover:text-green-800 font-medium"
                            >
                                制定计划 →
                            </Link>
                        </div>

                        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <Star className="h-6 w-6 text-purple-600 mr-3" />
                                <h3 className="text-lg font-semibold text-gray-900">每日一言</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                每天一句智慧语录，在日常生活中感受传统文化的魅力
                            </p>
                            <Link
                                href="/tools/daily-quote"
                                className="text-purple-600 hover:text-purple-800 font-medium"
                            >
                                获取今日语录 →
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}