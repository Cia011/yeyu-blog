export default function BioSection() {
  return (
    <section className="flex flex-col gap-4 text-center px-4">
      <h1>
        你好! 我是
        {' '}
        <span className="font-bold text-purple-400">Ciao</span>
        ,
      </h1>
      <p>欢迎来到我的小屋, 我会在这里记录一些技术笔记和生活趣事, 感谢你的到来~</p>

      <small className="text-xs md:text-sm">
        话说敲两下头像可以切换主题来着
        {' '}
        <span className="text-fuchsia-500">( ´◔ ‸◔`)</span>
      </small>
    </section>
  )
}
