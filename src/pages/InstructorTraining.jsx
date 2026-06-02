const InstructorTraining = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#0A1628]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(0,229,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,0.3) 1px,transparent 1px)`,
          backgroundSize: '50px 50px'
        }}/>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#89B84C]/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"/>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full border border-[#89B84C]/40 text-[#89B84C] font-bold text-xs mb-6 bg-[#89B84C]/10">
            전문가 과정
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            강사 양성 과정
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto leading-relaxed font-medium">
            SW·AI 교육 전문 강사를 양성하는 위메이크 공식 과정입니다.
          </p>
        </div>
      </section>

      {/* 준비중 */}
      <section className="py-40 bg-white">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <div className="text-7xl mb-8">🛠️</div>
          <h2 className="text-3xl font-extrabold text-navy mb-6">준비 중입니다</h2>
          <p className="text-slate-500 font-medium leading-relaxed mb-10">
            강사 양성 과정은 현재 커리큘럼을 정비 중입니다.<br />
            빠른 시일 내에 자세한 내용을 안내드리겠습니다.<br />
            문의 사항이 있으시면 아래 버튼을 통해 연락해주세요.
          </p>
          <a
            href="mailto:arkim12345@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
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

export default InstructorTraining
