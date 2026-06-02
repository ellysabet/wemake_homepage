import { Link } from 'react-router-dom'

const AboutUs = () => {
  const coreValues = [
    { icon: '🎯', title: '전문성', desc: '정교사, 개발자, 현장 강사 등 다양한 배경의 전문가로 구성된 교육 협동조합' },
    { icon: '🤝', title: '협동', desc: '조합원이 함께 만들고 함께 나누는 수평적 협력 구조' },
    { icon: '💡', title: '혁신', desc: '최신 SW·AI 기술을 교육 현장에 빠르게 접목하는 에듀테크 지향' },
    { icon: '🌱', title: '나눔', desc: '교육 소외 없이 모든 학습자에게 평등한 기회를 제공' },
  ]

  const instructorFeatures = [
    '정교사 자격증을 보유한 강사',
    '개발자 출신의 교육 경험을 갖춘 강사',
    '고등 대상 강의 경험을 다수 보유한 강사',
    '교직원 대상 연수 진행 경험을 보유한 강사',
    '한국창의재단 디지털새싹/AI동행 SWAI 교육강사',
    '대학생 및 청년 대상 AI 활용 수업 교육 강사',
    '해커톤 기획 및 진행 경험을 보유한 강사',
  ]

  const activities = [
    { year: '2026', items: [
      '고양 백석고(AI 교육과정 거점학교) 2026 AI캠프 수행기관',
      '서울시 AI와 함께 지역사회 문제해결 프로젝트 수행기관',
      '서울시 시립구로청소년센터 4차산업체험관 체험수업 수행기관',
    ]},
  ]

  const missions = [
    { icon: '🚀', title: '활동 중심', desc: '이론을 넘어 실제 프로젝트와 체험을 통해 살아있는 지식을 습득합니다.' },
    { icon: '🧩', title: '창의 융합', desc: 'SW·AI와 다양한 분야를 융합하여 창의적 문제 해결 능력을 키웁니다.' },
    { icon: '🌍', title: '교육 격차 해소', desc: '누구에게나 평등한 교육 기회를 제공하여 지역 사회와 함께 성장합니다.' },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(0,229,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,0.3) 1px,transparent 1px)`,
          backgroundSize: '50px 50px'
        }}/>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[400px] bg-[#2E4A7B]/40 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"/>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full border border-white/20 text-white/70 font-bold text-xs mb-6">
            설립 2026 · 교육 협동조합
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            미래를 만드는 교육 공동체,
            <br />
            <span className="bg-gradient-to-r from-[#29B6F6] via-[#43E97B] to-[#F9C12E] bg-clip-text text-transparent">
              WEMAKE
            </span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            함께 만들고, 함께 배우며, 함께 미래를 설계합니다.<br />
            SW·AI 교육 전문가들이 모인 협동조합으로, 모든 학습자가 가능성을 발견하는 세상을 만들어갑니다.
          </p>
          <Link
            to="/edu/basic"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#89B84C] to-[#F2C12E] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            프로그램 알아보기
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9h14M9 3l7 6-7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>

      {/* 미션 & 비전 */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest mb-4 border border-navy/10">Mission & Vision</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">위메이크가 추구하는 가치</h2>
            <p className="text-slate-500 font-medium">지속 가능한 교육 생태계를 구축하기 위한 우리의 방향</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missions.map((m, i) => (
              <div key={i} className="p-10 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white text-center">
                <div className="text-5xl mb-6">{m.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-4">{m.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest mb-4 border border-navy/10">Core Values</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">4가지 핵심 가치</h2>
            <p className="text-slate-500 font-medium">위메이크의 모든 활동은 이 4가지 가치를 바탕으로 합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold text-navy mb-3">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 강사 구성 */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest mb-6 border border-navy/10">Instructors</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">강사 구성 특징</h2>
              <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                위메이크 협동조합은 다양한 현장 경험을 가진 전문 강사진으로 구성되어 있습니다.
              </p>
              <div className="space-y-3">
                {instructorFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#89B84C]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="#89B84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">{f}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0A1628] rounded-3xl p-10">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-white mb-2">대표자</h3>
                <p className="text-white/60 text-sm">김애린</p>
              </div>
              <div className="border-t border-white/10 pt-8">
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4 text-center">Contact</p>
                <a
                  href="mailto:arkim12345@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-6 py-4 transition-all duration-300"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 4h12a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="white" strokeOpacity="0.6" strokeWidth="1.2"/>
                    <path d="M2 5l7 5 7-5" stroke="white" strokeOpacity="0.6" strokeWidth="1.2"/>
                  </svg>
                  <span className="text-white/60 text-sm font-medium">arkim12345@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 조합 활동 내역 */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-white/60 text-xs font-bold uppercase tracking-widest mb-4">History</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">조합 활동 내역</h2>
            <p className="text-white/40 font-medium">위메이크가 함께한 주요 사업들</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {activities.map((a, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-[#89B84C]/40">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#89B84C] border-4 border-[#0A1628]"/>
                <div className="mb-2">
                  <span className="text-3xl font-black text-white/80">{a.year}</span>
                </div>
                <div className="bg-white/5 rounded-3xl border border-white/10 p-8 mb-12">
                  <ul className="space-y-4">
                    {a.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#89B84C] shrink-0 mt-2"/>
                        <p className="text-white/70 text-sm font-medium leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 파트너 */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest mb-4 border border-navy/10">Partners</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">함께하는 파트너</h2>
            <p className="text-slate-500 font-medium">신뢰할 수 있는 기관과 함께 교육 현장을 만들어갑니다.</p>
          </div>
          <div className="flex justify-center">
            <div className="bg-slate-50 rounded-3xl border border-slate-100 px-16 py-10 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-lg font-bold text-navy mb-2">경기 SW미래채움</h3>
              <p className="text-slate-400 text-sm font-medium">경기도 SW 교육 거점 기관</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">함께 미래를 만들어갈 파트너를 기다립니다</h2>
          <p className="text-slate-500 font-medium mb-8 leading-relaxed">
            수업 의뢰, 캠프 기획, 강사 연수 등<br />
            어떤 협업이든 편하게 연락 주세요.
          </p>
          <a
            href="mailto:arkim12345@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#89B84C] to-[#F2C12E] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            문의하기
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9h14M9 3l7 6-7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
