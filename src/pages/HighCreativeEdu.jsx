const HighCreativeEdu = () => {
  const features = [
    {
      icon: '🧠',
      title: 'AI 활용 심화',
      desc: '다양한 AI 도구를 직접 활용하고 원리를 이해하며, 실생활 문제 해결에 적용하는 심화 AI 교육을 제공합니다.',
      color: 'border-t-[#2E4A7B]',
    },
    {
      icon: '📊',
      title: '데이터 분석',
      desc: '실제 데이터를 수집·분석·시각화하여 의미 있는 인사이트를 도출하는 데이터 사이언스 기초를 경험합니다.',
      color: 'border-t-[#89B84C]',
    },
    {
      icon: '⚡',
      title: '피지컬 융합 프로젝트',
      desc: '마이크로비트, 아두이노 등 피지컬 컴퓨팅과 AI·데이터를 융합한 창의적 프로젝트를 기획하고 완성합니다.',
      color: 'border-t-[#F2C12E]',
    },
    {
      icon: '💡',
      title: '창의 융합 설계',
      desc: '사회 문제를 기술로 해결하는 창의적 아이디어를 발굴하고, 팀 협업으로 실제 구현까지 이끌어냅니다.',
      color: 'border-t-[#2E4A7B]',
    },
  ]

  const phases = [
    {
      phase: 'Phase 01',
      title: '문제 탐색',
      desc: '사회·환경·기술 분야에서 해결할 가치 있는 문제를 발견하고 데이터로 검증합니다.',
      color: 'bg-[#2E4A7B]',
    },
    {
      phase: 'Phase 02',
      title: '기술 융합 설계',
      desc: 'AI, 데이터 분석, 피지컬 컴퓨팅을 융합하여 솔루션을 설계하고 프로토타입을 구현합니다.',
      color: 'bg-[#89B84C]',
    },
    {
      phase: 'Phase 03',
      title: '발표 & 피드백',
      desc: '완성된 프로젝트를 발표하고 현장 전문가의 피드백을 반영해 결과물을 고도화합니다.',
      color: 'bg-[#F2C12E]',
    },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(0,229,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,0.3) 1px,transparent 1px)`,
          backgroundSize: '50px 50px'
        }}/>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#29B6F6]/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"/>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full border border-[#29B6F6]/40 text-[#29B6F6] font-bold text-xs mb-6 bg-[#29B6F6]/10">
            고등학교
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            고등 창의융합 심화교육
            <br />
            <span className="bg-gradient-to-r from-[#29B6F6] via-[#43E97B] to-[#F9C12E] bg-clip-text text-transparent">
              기술로 세상을 혁신하다
            </span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            AI·데이터·피지컬 컴퓨팅을 융합한 고등부 최상위 과정.<br />
            단순 코딩을 넘어 기술로 사회 문제를 해결하는 창의 융합 인재를 키웁니다.
          </p>
          <a
            href="mailto:arkim12345@gmail.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#29B6F6] to-[#43E97B] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            수업 문의하기
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9h14M9 3l7 6-7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>

      {/* 주요 교육 내용 */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest mb-4 border border-navy/10">What We Teach</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">주요 교육 내용</h2>
            <p className="text-slate-500 font-medium">학교 및 학생 수준에 맞춰 유연하게 설계합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className={`p-8 rounded-3xl border border-slate-100 border-t-4 ${f.color} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white flex gap-6`}>
                <div className="text-4xl shrink-0">{f.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 학습 흐름 */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest mb-4 border border-navy/10">Learning Path</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">프로젝트 중심 학습 흐름</h2>
            <p className="text-slate-500 font-medium">발견에서 완성까지, 직접 만들며 성장하는 3단계 여정</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phases.map((p, i) => (
              <div key={i} className="bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className={`${p.color} px-8 py-5`}>
                  <span className="text-white/70 text-xs font-bold uppercase tracking-widest">{p.phase}</span>
                  <h3 className="text-white text-xl font-bold mt-1">{p.title}</h3>
                </div>
                <div className="p-8">
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{p.desc}</p>
                </div>
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#29B6F6] to-[#43E97B] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            수업 문의하기
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9h14M9 3l7 6-7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>
    </div>
  )
}

export default HighCreativeEdu
