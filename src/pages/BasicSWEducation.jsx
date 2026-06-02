const AdvancedPhysicalEdu = () => {
  const features = [
    {
      icon: '💻',
      title: '텍스트 코딩',
      desc: '파이썬 등 실제 프로그래밍 언어를 활용하여 알고리즘적 사고와 문제 해결 능력을 심화합니다.',
      color: 'border-t-[#2E4A7B]',
    },
    {
      icon: '📊',
      title: '데이터 분석',
      desc: '실생활 데이터를 수집하고 분석하여 의미 있는 결과를 도출하는 데이터 리터러시를 키웁니다.',
      color: 'border-t-[#89B84C]',
    },
    {
      icon: '🧠',
      title: 'AI 활용',
      desc: '인공지능 도구를 직접 활용하고 원리를 이해하는 실습 중심 AI 교육을 제공합니다.',
      color: 'border-t-[#F2C12E]',
    },
    {
      icon: '⚡',
      title: '피지컬 컴퓨팅',
      desc: '마이크로비트, 아두이노 등을 활용하여 코드가 현실 세계와 연결되는 피지컬 컴퓨팅을 경험합니다.',
      color: 'border-t-[#2E4A7B]',
    },
    {
      icon: '🤖',
      title: '로봇 교구',
      desc: '다양한 로봇 교구를 활용한 심화 프로젝트로 하드웨어와 소프트웨어 융합 역량을 강화합니다. (교구는 수업 협의 후 결정)',
      color: 'border-t-[#89B84C]',
    },
  ]

  const process = [
    { step: '01', title: '문제 발견', desc: '실생활에서 해결할 문제를 스스로 찾고 정의합니다.' },
    { step: '02', title: '설계 & 코딩', desc: '텍스트 코딩과 하드웨어를 활용하여 솔루션을 설계하고 구현합니다.' },
    { step: '03', title: '테스트 & 개선', desc: '결과물을 테스트하고 피드백을 반영해 지속적으로 개선합니다.' },
    { step: '04', title: '발표 & 공유', desc: '완성된 프로젝트를 발표하고 동료 피드백을 통해 성장합니다.' },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(0,229,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,0.3) 1px,transparent 1px)`,
          backgroundSize: '50px 50px'
        }}/>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#F2C12E]/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"/>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full border border-[#F2C12E]/40 text-[#F2C12E] font-bold text-xs mb-6 bg-[#F2C12E]/10">
            초등 고학년 ~ 중학교
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            초/중등 심화 SW&Physical 교육
            <br />
            <span className="bg-gradient-to-r from-[#29B6F6] via-[#43E97B] to-[#F9C12E] bg-clip-text text-transparent">
              기술로 세상을 만들다
            </span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            블록 코딩을 넘어 텍스트 코딩, 데이터 분석, AI, 피지컬 컴퓨팅까지.<br />
            실제 문제를 기술로 해결하는 프로젝트 중심 심화 교육입니다.
          </p>
          <a
            href="mailto:arkim12345@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#89B84C] to-[#F2C12E] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300"
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
            <p className="text-slate-500 font-medium">학생의 수준과 학교 환경에 맞춰 유연하게 구성합니다.</p>
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

      {/* 프로젝트 프로세스 */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest mb-4 border border-navy/10">Project Process</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">프로젝트 중심 수업 방식</h2>
            <p className="text-slate-500 font-medium">단계별로 직접 만들고 발표하며 진짜 실력을 키웁니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={i} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-slate-100 z-0 -translate-x-1/2"/>
                )}
                <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all duration-300 relative z-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#2E4A7B] text-white flex items-center justify-center mx-auto mb-5 font-bold text-lg">{p.step}</div>
                  <h3 className="text-lg font-bold text-navy mb-3">{p.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{p.desc}</p>
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
            href="mailto:arkim12345@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#89B84C] to-[#F2C12E] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            이사장에게 문의하기
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9h14M9 3l7 6-7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>
    </div>
  )
}

export default AdvancedPhysicalEdu
