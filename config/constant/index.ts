import type { Metadata } from 'next'

// * --------------- 以下配置您可以自定义 ---------------

export const ADMIN_EMAILS = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(',')

// * 元数据，SEO，网页关键字。。。
export const metadata: Metadata = {
  title: `Ciao的技术小站`,
  description: '分享技术',
  keywords: [
    '技术分享',
    'Ciao',
    'Ciao的个人博客',
    'Ciao的技术小站',
  ],
  authors: [{ name: 'Ciao', url: 'https://cia011.online' }],
  creator: 'Ciao',
}

// * 首页动画加载的文字，建议不要超过 5 个字，不然长度太长，当然，你也可以去修改样式~
export const INITIAL_WELCOME_TEXT = 'Ciao的技术小站'

// * 配置评论系统的官方文档 https://giscus.app/zh-CN
export const COMMENT_CARD_REPO = 'NeilYeTAT/yeyu-blog-comment'

export const COMMENT_CARD_REPO_ID = 'R_kgDOOiAAJA'

// ! --------------- 以下配置不建议修改 ---------------

// *  -- prisma 长度限制 --
// ! prisma 中的数据大小限制并不是自动同步到这里，需要手动同步，这里抽取成常量只是为了表单验证的时候方便
// * Blog
export const BLOG_TITLE_MAX_LENGTH = 50

// * Note
export const NOTE_TITLE_MAX_LENGTH = 50

// * Tags
export const TAG_NAME_MAX_LENGTH = 20

// * Echo
export const ECHO_REFERENCE_MAX_LENGTH = 20
export const ECHO_CONTENT_MAX_LENGTH = 100

// * Article, 一般 Blog 和 Note 其实是共用的这个
export const ARTICLE_TITLE_MAX_LENGTH = 50
