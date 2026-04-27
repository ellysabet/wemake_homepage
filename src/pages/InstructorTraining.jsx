import logo from '../assets/logo.png'

const InstructorTraining = () => {
    const steps = [
        { title: '기초 역량', desc: 'SW 기본 개념 및 프로그래밍 기초 학습', icon: 'menu_book', opacity: 'opacity-20' },
        { title: '실무 역량', desc: '심화 프로젝트 및 현업 스택 마스터', icon: 'terminal', opacity: 'opacity-40' },
        { title: '강의 교수법', desc: '효과적인 전달력 및 학습자 관리 기법', icon: 'psychology', opacity: 'opacity-70' },
        { title: '전문 강사 인증', desc: '최종 평가 및 WEMAKE 공식 인증 부여', icon: 'verified', opacity: 'opacity-100', filled: true }
    ]

    const badges = [
        { level: 'Lv.1', name: 'Associate', icon: 'code', color: 'text-slate-400' },
        { level: 'Lv.2', name: 'Professional', icon: 'code_blocks', color: 'text-wemake-green' },
        { level: 'Lv.3', name: 'Master', icon: 'data_object', color: 'text-white', isMaster: true }
    ]

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <header className="relative pt-32 pb-24 overflow-hidden bg-white dot-pattern">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-navy/5 text-navy font-bold text-xs mb-6 border border-navy/10">
                        SW INSTRUCTOR PROGRAM
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-8 leading-tight">
                        강사 양성 과정: <br/>
                        <span className="text-gradient">최고의 SW 교육 전문가로 성장하세요</span>
                    </h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        위메이크 협동조합의 체계적인 커리큘럼과 현업 전문가의 멘토링을 통해, <br className="hidden md:block" />
                        미래 기술 인재를 길러내는 핵심 교육 전문가로 발돋움하십시오.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="btn-gradient px-10 py-4 shadow-lg shadow-wemake-green/20">
                            교육 신청하기
                        </button>
                        <button className="bg-white border-2 border-navy text-navy px-8 py-4 rounded-full font-bold hover:bg-navy hover:text-white transition-all duration-300">
                            커리큘럼 상세 보기
                        </button>
                    </div>
                </div>
            </header>

            {/* Career Roadmap */}
            <section className="py-24 bg-slate-50/50">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16 underline-offset-8 decoration-wemake-green/30">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 italic">강사 성장 로드맵</h2>
                        <p className="text-slate-500 font-medium italic">체계적인 4단계 과정을 통해 전문 강사로 완성됩니다.</p>
                    </div>

                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden md:block z-0"></div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {steps.map((step, index) => (
                                <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                                    <div className="w-20 h-20 rounded-full bg-white shadow-xl border-4 border-white flex items-center justify-center mb-6 relative transition-transform hover:scale-110">
                                        <div className={`absolute inset-0 rounded-full bg-wemake-green ${step.opacity}`}></div>
                                        <span className={`material-symbols-outlined text-3xl text-navy relative z-10 ${step.filled ? 'font-filled transition-colors group-hover:text-white' : ''}`}>
                                            {step.icon}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                                    <p className="text-sm text-slate-500 font-medium leading-tight">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: '현업 멘토링', desc: '풍부한 경험을 가진 현업 개발자 및 수석 강사진의 1:1 밀착 피드백을 제공합니다.', icon: 'group' },
                        { title: '실무 교안 제공', desc: '현장에서 즉시 활용 가능한 검증된 수준별 교육 자료와 실습 코드를 지원합니다.', icon: 'library_books' },
                        { title: '출강 기회 제공', desc: '우수 수료자에게는 WEMAKE 협력 기관 및 학교로의 실제 출강 기회를 우선 부여합니다.', icon: 'podium' }
                    ].map((feature, index) => (
                        <div key={index} className="glass-card p-10 rounded-3xl border border-slate-100 hover:shadow-2xl transition-all duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center mb-8 text-navy">
                                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-4 italic">{feature.title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Badges Section */}
            <section className="py-24 bg-white border-y border-slate-50">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-navy/5 rounded-full text-xs font-bold text-navy tracking-widest mb-4">RECOGNITION</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-navy italic tracking-tight">Professional Instructor Badges</h2>
                        <p className="text-slate-500 font-medium italic mt-4">과정 수료 시 부여되는 공식 인증 뱃지</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-16">
                        {badges.map((badge, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className={`w-36 h-36 rounded-full flex items-center justify-center mb-6 relative shadow-2xl transition-transform hover:scale-110 ${badge.isMaster ? 'bg-wemake-gradient' : 'bg-white border border-slate-100'}`}>
                                    <div className="absolute inset-2.5 rounded-full border border-dashed border-slate-200/50"></div>
                                    <div className="text-center group">
                                        <span className={`material-symbols-outlined text-5xl mb-2 font-filled ${badge.color}`}>{badge.icon}</span>
                                        <div className={`text-[10px] font-black tracking-widest ${badge.isMaster ? 'text-white' : 'text-slate-400 opacity-60'}`}>{badge.level}</div>
                                    </div>
                                </div>
                                <span className="text-xl font-bold text-navy italic">{badge.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default InstructorTraining
