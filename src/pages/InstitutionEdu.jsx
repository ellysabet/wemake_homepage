const InstitutionEdu = () => {
  const services = [
    {
      icon: '🏫',
      title: '교직원 연수',
      desc: 'SW·AI 교육 역량 강화를 위한 맞춤형 교직원 연수 프로그램을 제공합니다. 학교 현장의 상황과 수준에 맞춰 유연하게 설계합니다.',
      color: 'border-t-[#2E4A7B]',
    },
    {
      icon: '🏛️',
      title: '공공기관 수업 진행',
      desc: '도서관, 주민센터, 복지관 등 공공기관을 대상으로 SW·AI 교육 프로그램을 기획하고 직접 운영합니다.',
      color: 'border-t-[#89B84C]',
    },
    {
      icon: '📋',
      title: '맞춤형 커리큘럼 설계',
      desc: '기관의 특성과 교육 대상에 맞춘 커리큘럼을 설계하고, 수업 준비 부담을 줄이는 실무 교안을 함께 제공합니다.',
      color: 'border-t-[#F2C12E]',
    },
  ]

  const features = [
    { icon: '🎯', title: '실습 70% 이상', desc: '핸즈온 중심 수업으로 주입식 교육 탈피' },
    { icon: '🤝', title: '협업 기반 교육', desc: '수업 준비 부담을 덜어주는 맞춤형 커리큘럼 설계' },
    { icon: '🚀', title: '최신 기술 반영', desc: '학생별 수준을 고려한 개별화 및 창의 융합 수업' },
  ]

  const targets = [
    { icon: '👩‍🏫', title: '초·중·고 교직원', desc: 'SW·AI 수업 역량 강화 연수' },
    { icon: '📚', title: '도서관·복지관', desc: '지역 주민 대상 디지털 교육' },
    { icon: '🏢', title: '공공기관·지자체', desc: '기관 맞춤형 SW 교육 프로그램' },
    { icon: '🌱', title: '교육 기관·센터', desc: '방과후·특기 적성 교육 위탁 운영' },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(0,229,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,0.3) 1px,transparent 1px)`,
          backgroundSize: '50px 50px'
        }}/>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#2E4A7B]/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"/>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full border border-[#29B6F6]/40 text-[#29B6F6] font-bold text-xs mb-6 bg-[#29B6F6]/10">
            전문가 과정
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            교직원 연수 &<br />
            <span className="bg-gradient-to-r from-[#29B6F6] via-[#43E97B] to-[#F9C12E] bg-clip-text text-transparent">
              공공기관 수업 진행
            </span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            학교 현장의 교직원부터 지역 공공기관까지.<br />
            위메이크가 직접 찾아가는 맞춤형 SW·AI 교육을 제공합니다.
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

      {/* 주요 서비스 */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest mb-4 border border-navy/10">Services</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">주요 서비스</h2>
            <p className="text-slate-500 font-medium">기관과 환경에 맞춘 유연한 교육 서비스를 제공합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className={`p-8 rounded-3xl border border-slate-100 border-t-4 ${s.color} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white`}>
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{s.desc}</p>
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
            <p className="text-slate-500 font-medium">다양한 기관과 협력하여 교육 현장의 변화를 이끕니다.</p>
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

      {/* 특징 배너 */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {features.map((item, i) => (
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">교육 의뢰 및 문의</h2>
          <p className="text-slate-500 font-medium mb-8 leading-relaxed">
            연수 규모, 대상, 일정 등을 알려주시면<br />
            맞춤형 교육 프로그램을 제안해드립니다.
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

export default InstitutionEdu
