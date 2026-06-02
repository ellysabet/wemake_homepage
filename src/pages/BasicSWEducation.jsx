const BasicSWEducation = () => {
  const features = [
    {
      icon: '🧩',
      title: '언플러그드 활동',
      desc: '컴퓨터 없이 활동지와 앱을 활용한 놀이로 컴퓨팅 사고력의 원리를 몸으로 체득합니다.',
      color: 'border-t-[#89B84C]',
    },
    {
      icon: '🐱',
      title: '블록 코딩',
      desc: '엔트리, 스크래치를 활용하여 프로그래밍의 기본 개념을 직관적이고 재미있게 학습합니다.',
      color: 'border-t-[#2E4A7B]',
    },
    {
      icon: '🌐',
      title: '메타버스',
      desc: 'Delightex, ZEP, Roblox 등 메타버스 플랫폼을 활용한 창의적 공간 제작과 협업 활동을 경험합니다.',
      color: 'border-t-[#F2C12E]',
    },
    {
      icon: '📱',
      title: '앱인벤터',
      desc: '나만의 모바일 앱을 직접 기획하고 만들어보는 창작 중심 수업으로 문제 해결력을 키웁니다.',
      color: 'border-t-[#89B84C]',
    },
    {
      icon: '🤖',
      title: '로봇 교구',
      desc: '교육용 로봇을 직접 제어하며 하드웨어와 소프트웨어의 융합을 자연스럽게 이해합니다. (교구는 수업 협의 후 결정)',
      color: 'border-t-[#2E4A7B]',
    },
  ]

  const philosophy = [
    { step: '01', title: '언플러그드', desc: '컴퓨터 없이 원리를 몸으로 직접 체험', color: 'bg-[#2E4A7B]' },
    { step: '02', title: '블록 코딩', desc: '직관적인 블록으로 논리적 사고력 훈련', color: 'bg-[#89B84C]' },
    { step: '03', title: '만들기 & 공유', desc: '나만의 작품을 완성하고 친구들과 나누는 성취 경험', color: 'bg-[#F2C12E]' },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(0,229,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,0.3) 1px,transparent 1px)`,
          backgroundSize: '50px 50px'
        }}/>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#89B84C]/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"/>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full border border-[#89B84C]/40 text-[#89B84C] font-bold text-xs mb-6 bg-[#89B84C]/10">
            초등 1학년 ~ 중학교
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            초/중등 기본 SW교육
            <br />
            <span className="bg-gradient-to-r from-[#29B6F6] via-[#43E97B] to-[#F9C12E] bg-clip-text text-transparent">
              코딩의 즐거움을 배우다
            </span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            아이들의 상상력을 현실로 만드는 첫 걸음.<br />
            놀이처럼 즐거운 실습으로 자연스럽게 논리적 사고력과 문제 해결 능력을 키웁니다.
          </p>
          <a
            href="mailto:arkim12345@gmail.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#89B84C] to-[#F2C12E] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            수업 문의하기
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9h14M9 3l7 6-7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>

      {/* 교육 철학 */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest mb-4 border border-navy/10">교육 철학</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">실습 중심의 몰입형 교육</h2>
            <p className="text-slate-500 font-medium">이론은 최소화, 실습은 최대화 — 직접 만들고 느끼는 수업</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10 -translate-y-1/2"/>
            {philosophy.map((p, i) => (
              <div key={i} className={`bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center ${i === 1 ? 'scale-105 shadow-lg' : ''}`}>
                <div className={`w-12 h-12 rounded-full ${p.color} text-white flex items-center justify-center mx-auto mb-6 font-bold text-lg`}>{p.step}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{p.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 교육 내용 */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest mb-4 border border-navy/10">What We Teach</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">주요 교육 내용</h2>
            <p className="text-slate-500 font-medium">학생의 수준과 학교 상황에 맞춰 유연하게 구성합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className={`p-8 rounded-3xl border border-slate-100 border-t-4 ${f.color} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white`}>
                <div className="text-4xl mb-5">{f.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 특징 배너 */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: '🎯', title: '실습 70% 이상', desc: '핸즈온 중심 수업으로 주입식 교육 탈피' },
              { icon: '🤝', title: '협업 기반 교육', desc: '수업 준비 부담을 덜어주는 맞춤형 커리큘럼 설계' },
              { icon: '🚀', title: '최신 기술 반영', desc: '학생별 수준을 고려한 개별화 및 창의 융합 수업' },
            ].map((item, i) => (
              <div key={i} className="text-white">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">수업 의뢰 및 문의</h2>
          <p className="text-slate-500 font-medium mb-8 leading-relaxed">
            학교, 기관, 방과후 수업 등 다양한 형태로 운영 가능합니다.<br />
            대상과 환경에 맞춘 맞춤형 커리큘럼을 제안해드립니다.
          </p>
          <a
            href="mailto:arkim12345@gmail.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#89B84C] to-[#F2C12E] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            수업 문의하기
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9h14M9 3l7 6-7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>
    </div>
  )
}

export default BasicSWEducation
