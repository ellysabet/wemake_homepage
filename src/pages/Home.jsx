import { Link } from 'react-router-dom'

// ─── 1. HERO ────────────────────────────────────────────────────────────────
const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D1B3E] pt-20">
    {/* 회로 기판 느낌 배경 패턴 */}
    <div className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `
          linear-gradient(rgba(137,184,76,0.4) 1px, transparent 1px),
          linear-gradient(90deg, rgba(137,184,76,0.4) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}
    />

    {/* 그라디언트 블러 장식 */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wemake-green/20 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-wemake-yellow/15 rounded-full blur-[100px] pointer-events-none" />

    <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
      {/* 태그 */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-wemake-green/40 text-wemake-green font-bold text-xs mb-10 bg-wemake-green/10">
        <span className="w-2 h-2 rounded-full bg-wemake-green animate-pulse" />
        CODING & EDUTECH COOPERATIVE
      </div>

      {/* 메인 슬로건 */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
        We Make<br />
        <span className="bg-wemake-gradient bg-clip-text text-transparent">the Future</span>
      </h1>

      <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-12 leading-relaxed font-medium">
        함께 만들고, 함께 배우며,<br />
        미래를 함께 설계합니다.
      </p>

      {/* 키워드 태그 */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {['AI', 'SW', 'IoT', 'DATA', 'EDUTECH'].map((tag) => (
          <span
            key={tag}
            className="px-4 py-1.5 rounded-full border border-white/20 text-white/70 text-xs font-bold uppercase tracking-widest bg-white/5 hover:border-wemake-green/60 hover:text-wemake-green transition-all cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA 버튼 */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/edu/basic"
          className="bg-wemake-gradient text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-wemake-green/30 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
        >
          서비스 알아보기
        </Link>
        <Link
          to="/about"
          className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:border-wemake-green hover:text-wemake-green transition-all duration-300 bg-white/5"
        >
          조합 소개
        </Link>
      </div>
    </div>

    {/* 아래 스크롤 유도 */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs font-bold tracking-widest animate-bounce">
      <span>SCROLL</span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </section>
)

// ─── 2. 우리가 하는 일 ────────────────────────────────────────────────────────
const WhatWeDo = () => {
  const services = [
    {
      icon: '🎓',
      title: '학생 교육',
      desc: '초등부터 고등까지, 블록 코딩에서 AI·데이터 사이언스까지 수준별 맞춤 SW 교육을 제공합니다.',
      link: '/edu/basic',
      accent: 'border-t-wemake-green',
    },
    {
      icon: '🏫',
      title: '교원 · 기관 연수',
      desc: '학교 교사와 교육 기관을 위한 SW·AI 연수 프로그램 및 맞춤형 커리큘럼을 설계합니다.',
      link: '/pro/institution',
      accent: 'border-t-navy',
    },
    {
      icon: '🚀',
      title: '캠프 · 해커톤',
      desc: '창의적 아이디어가 발산되는 해커톤과 몰입형 SW 캠프를 기획부터 현장 운영까지 총괄합니다.',
      link: '/event/hackathon',
      accent: 'border-t-wemake-yellow',
    },
  ]

  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest mb-4 border border-navy/10">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight">
            위메이크가 할 수 있는 것들
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.link}
              className={`group block p-10 rounded-3xl border border-slate-100 border-t-4 ${s.accent} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white`}
            >
              <div className="text-4xl mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-wemake-green transition-colors">
                {s.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{s.desc}</p>
              <div className="mt-8 flex items-center gap-1 text-xs font-bold text-slate-300 group-hover:text-wemake-green transition-colors uppercase tracking-widest">
                자세히 보기
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 3. 최근 활동 (블로그 연동 예정 자리) ──────────────────────────────────────
const RecentActivity = () => (
  <section className="py-28 bg-slate-50/50">
    <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest mb-4 border border-navy/10">
            Activity
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy">최근 활동</h2>
        </div>
        <a
          href="https://blog.naver.com/wemake26"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-bold text-navy hover:text-wemake-green transition-colors group"
        >
          블로그에서 더 보기
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* 블로그 연동 전 플레이스홀더 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <a
            key={i}
            href="https://blog.naver.com/wemake26"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-3xl overflow-hidden border border-slate-100 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
              <span className="text-slate-200 font-black text-sm uppercase tracking-widest">Coming Soon</span>
            </div>
            <div className="p-6">
              <div className="h-3 bg-slate-100 rounded-full mb-3 w-3/4" />
              <div className="h-3 bg-slate-100 rounded-full mb-2 w-full" />
              <div className="h-3 bg-slate-100 rounded-full w-2/3" />
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-slate-300 group-hover:text-wemake-green transition-colors uppercase tracking-widest">
                블로그에서 보기
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
)

// ─── 4. CTA ──────────────────────────────────────────────────────────────────
const CallToAction = () => (
  <section className="py-28 bg-[#0D1B3E] relative overflow-hidden">
    <div className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `
          linear-gradient(rgba(137,184,76,0.4) 1px, transparent 1px),
          linear-gradient(90deg, rgba(137,184,76,0.4) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}
    />
    <div className="absolute top-0 right-0 w-96 h-96 bg-wemake-green/10 rounded-full blur-[120px] pointer-events-none" />

    <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
        함께 미래를 만들어갈<br />
        <span className="bg-wemake-gradient bg-clip-text text-transparent">파트너를 기다립니다</span>
      </h2>
      <p className="text-white/50 font-medium mb-12 max-w-lg mx-auto leading-relaxed">
        수업 의뢰, 캠프 기획, 강사 연수 등<br />어떤 협업이든 편하게 연락 주세요.
      </p>
      <a
        href="mailto:arkim12345@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-wemake-gradient text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl shadow-wemake-green/30 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
      >
        문의하기
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 10h14M10 4l7 6-7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  </section>
)

// ─── EXPORT ──────────────────────────────────────────────────────────────────
const Home = () => (
  <>
    <Hero />
    <WhatWeDo />
    <RecentActivity />
    <CallToAction />
  </>
)

export default Home
