interface StructuredDataProps {
  data: Record<string, any>
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  )
}

// 预定义的结构化数据模板
export const websiteSchema = {
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
  }
}

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "南怀瑾",
  "alternateName": "南常铿",
  "description": "当代著名国学大师、教育家、文化传播者",
  "birthDate": "1918-03-18",
  "deathDate": "2012-09-29",
  "birthPlace": {
    "@type": "Place",
    "name": "浙江省乐清县"
  },
  "nationality": "中国",
  "occupation": ["国学大师", "教育家", "文化传播者"],
  "knowsAbout": ["儒学", "佛学", "道学", "传统文化", "修行"],
  "alumniOf": {
    "@type": "Organization",
    "name": "浙江国术馆"
  }
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "南怀瑾文化传承网",
  "url": "https://nanhuaijin-culture.vercel.app",
  "description": "专业的南怀瑾文化传承平台",
  "foundingDate": "2024",
  "areaServed": "全球",
  "knowsAbout": ["南怀瑾", "传统文化", "国学", "修行", "儒释道"],
  "sameAs": [
    "https://nanhuaijin-culture.vercel.app"
  ]
}