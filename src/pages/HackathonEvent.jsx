const HackathonEvent = () => {
  const processes = [
    { step: '01', title: '기획 & 설계', desc: '행사 목적과 대상에 맞는 커리큘럼, 챌린지 시나리오, 운영 계획을 함께 설계합니다.', icon: '🗺️' },
    { step: '02', title: '홍보 & 모집', desc: '타겟에 맞는 홍보 전략을 수립하고 참가자 모집부터 사전 안내까지 지원합니다.', icon: '📣' },
    { step: '03', title: '현장 운영', desc: '전문 퍼실리테이터와 멘토가 투입되어 행사 전 과정을 안전하게 총괄합니다.', icon: '🎯' },
    { step: '04', title: '결과 정리', desc: '참가자 피드백 수집, 결과 보고서 작성, 후속 연계 프로그램까지 지원합니다.', icon: '📋' },
  ]

  const events = [
    { icon: '💻', title: '해커톤', desc: '주어진 주제를 팀 협업으로 해결하는 창의적 문제 해결 대회. 기획부터 발표까지 전 과정을 지원합니다.' },
    { icon: '🏕️', title: 'SW 캠프', desc: '1일~수박 형태의 몰입형 SW 교육 캠프. 학교·기관 수요에 맞춘 다양한 테마로 기획합니다.' },
    { icon: '💡', title: '아이디어톤', desc: '기술이 아닌 아이디어로 겨루는 창의 발상 대회. 초등부터 고등까지 참여 가능합니다.' },
    { icon: '🏆', title: '코딩 대회', desc: '알고리즘, 블록코딩, 앱 제작 등 다양한 형태의 코딩 경진대회를 기획하고 운영합니다.' },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(0,229,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,0.3) 1px,transparent 1px)`,
          backgroundSize: '50px 50px'
        }}/>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#F2C12E]/15 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"/>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#89B84C]/15 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"/>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full border border-[#F2C12E]/40 text-[#F2C12E] font-bold text-xs mb-6 bg-[#F2C12E]/10">
            해커톤 / 행사
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            해커톤 & SW캠프
            <br />
            <span className="bg-gradient-to-r from-[#29B6F6] via-[#43E97B] to-[#F9C12E] bg-clip-text text-transparent">
              몰입과 혁신의 무대를 만듭니다
            </span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            창의적 아이디어가 발산되는 해커톤부터 몰입형 SW 캠프까지.<br />
            기획, 모집, 현장 운영, 결과 정리까지 전 과정을 함께합니다.
          </p>
          <a
            href="mailto:arkim12345@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#89B84C] to-[#F2C12E] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            행사 문의하기
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9h14M9 3l7 6-7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>

      {/* 행사 종류 */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest mb-4 border border-navy/10">Event Types</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">운영 가능한 행사 유형</h2>
            <p className="text-slate-500 font-medium">학교·기관의 목적과 대상에 맞춰 다양한 형태로 기획합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((e, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white flex gap-6">
                <div className="text-4xl shrink-0">{e.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">{e.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 운영 프로세스 */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest mb-4 border border-navy/10">Process</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">운영 프로세스</h2>
            <p className="text-slate-500 font-medium">기획부터 마무리까지 체계적으로 지원합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processes.map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{p.icon}</div>
                <div className="inline-block px-3 py-1 bg-[#89B84C]/10 text-[#89B84C] text-xs font-bold rounded-full mb-4">STEP {p.step}</div>
                <h3 className="text-lg font-bold text-navy mb-3">{p.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">행사 기획 & 운영 문의</h2>
          <p className="text-white/50 font-medium mb-8 leading-relaxed">
            행사 규모, 대상, 예산 등을 알려주시면<br />
            최적의 프로그램을 제안해드립니다.
          </p>
          <a
            href="mailto:arkim12345@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#89B84C] to-[#F2C12E] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            행사 문의하기
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9h14M9 3l7 6-7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>
    </div>
  )
}

export default HackathonEvent
