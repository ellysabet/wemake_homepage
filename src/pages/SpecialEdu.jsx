const SpecialEdu = () => {
  const principles = [
    {
      icon: '🖐️',
      title: '다중 감각 체험 (멀티센서리)',
      desc: '피지컬 컴퓨팅, 보조공학기기 및 센서를 활용하여 직관적으로 만지고 느끼는 메이킹 수업으로 학습 접근성을 높입니다.',
      color: 'border-t-[#29B6F6]',
    },
    {
      icon: '🎯',
      title: '맞춤형 난이도 (개별화)',
      desc: '느린 학습자와 장애 학생의 개인별 인지 속도를 절대적으로 존중하는 세밀한 커리큘럼을 제공합니다.',
      color: 'border-t-[#89B84C]',
    },
    {
      icon: '🏆',
      title: '성취감 부여 (작은 성공)',
      desc: '작은 단위의 반복 체험으로 \'나도 할 수 있다\'는 확실한 성공 경험과 자존감을 쌓아갑니다.',
      color: 'border-t-[#F2C12E]',
    },
  ]

  const targets = [
    { icon: '🌱', title: '특수학급', desc: '초·중·고 특수학급 맞춤형 SW·AI 수업' },
    { icon: '🏫', title: '특수학교', desc: '학교 전체 대상 프로그램 기획 및 운영' },
    { icon: '🤝', title: '장애인 복지관', desc: '성인 장애인 대상 디지털 역량 교육' },
    { icon: '👨‍👩‍👧', title: '통합학급 지원', desc: '일반학급 내 특수교육 대상자 지원' },
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
            특수교육
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            교육의 소외가 없는
            <br />
            <span className="bg-gradient-to-r from-[#29B6F6] via-[#43E97B] to-[#F9C12E] bg-clip-text text-transparent">
              UDL 기반 맞춤형 AI 수업
            </span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            보편적 학습 설계(UDL) 원칙을 바탕으로<br />
            모든 학습자가 SW·AI 교육에 참여할 수 있는 환경을 만듭니다.
          </p>
          <a
            href="mailto:arkim12345@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#29B6F6] to-[#43E97B] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            수업 문의하기
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9h14M9 3l7 6-7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>

      {/* UDL 소개 */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest mb-4 border border-navy/10">UDL 원칙</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">보편적 학습 설계 3원칙</h2>
            <p className="text-slate-500 font-medium">모든 학생이 각자의 방식으로 배우고 성장할 수 있도록 설계합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((p, i) => (
              <div key={i} className={`p-8 rounded-3xl border border-slate-100 border-t-4 ${p.color} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white`}>
                <div className="text-5xl mb-6">{p.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-4">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 교육 대상 */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest mb-4 border border-navy/10">Target</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">교육 대상</h2>
            <p className="text-slate-500 font-medium">다양한 환경의 특수교육 대상자를 지원합니다.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {targets.map((t, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{t.icon}</div>
                <h3 className="text-base font-bold text-navy mb-2">{t.title}</h3>
                <p className="text-slate-400 text-xs font-medium leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 교육 철학 배너 */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">단순한 코딩 교육을 넘어</h2>
            <p className="text-white/50 font-medium">현장 실무자의 고충을 완벽히 해결합니다</p>
          </div>
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
            특수학급, 특수학교, 복지관 등 다양한 환경에서 운영 가능합니다.<br />
            대상과 환경에 맞춘 맞춤형 프로그램을 제안해드립니다.
          </p>
          <a
            href="mailto:arkim12345@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
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

export default SpecialEdu
