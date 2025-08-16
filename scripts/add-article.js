// 添加新文章的脚本工具
// 使用方法: node scripts/add-article.js

const fs = require('fs')
const path = require('path')

function addArticle(articleData) {
  const articlesPath = path.join(__dirname, '../data/articles.json')
  
  try {
    // 读取现有文章数据
    const existingData = fs.readFileSync(articlesPath, 'utf8')
    const articles = JSON.parse(existingData)
    
    // 添加新文章
    articles.push(articleData)
    
    // 写回文件
    fs.writeFileSync(articlesPath, JSON.stringify(articles, null, 2), 'utf8')
    
    console.log('文章添加成功！')
    console.log('文章ID:', articleData.id)
    console.log('文章标题:', articleData.title)
    
  } catch (error) {
    console.error('添加文章失败:', error.message)
  }
}

// 示例：添加新文章
// const newArticle = {
//   "id": "new-article-id",
//   "title": "新文章标题",
//   "subtitle": "文章副标题",
//   "author": "南怀瑾",
//   "category": "修持指导",
//   "tags": ["标签1", "标签2"],
//   "publishDate": "2024-01-20",
//   "readTime": "10分钟",
//   "summary": "文章摘要...",
//   "content": "文章内容文件名.txt",
//   "featured": false,
//   "difficulty": "中级",
//   "views": 0
// }

// addArticle(newArticle)

module.exports = { addArticle }