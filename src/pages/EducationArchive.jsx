import logo from '../assets/logo.png'

const EducationArchive = () => {
    const categories = ['All Resources', '초등 교안', '중/고등 심화 자료', '소스 코드', '해커톤 가이드']
    
    const topDownloads = [
        { title: '2024 AI 윤리 교육 가이드라인', info: 'PDF • 2.4 MB', icon: 'description' },
        { title: '초등 코딩 워크샵 예제 모음', info: 'ZIP • 15.1 MB', icon: 'folder_zip' },
        { title: 'IoT 스마트팜 기초 소스', info: 'CODE • 840 KB', icon: 'code' }
    ]

    const resources = [
        {
            title: '블록 코딩 기초 강사 매뉴얼 (개정판)',
            desc: '스크래치와 엔트리를 활용한 8주차 커리큘럼 세부 진행 가이드 및 학생 평가 기준표 포함.',
            tag: '초등 교안',
            info: 'PDF • 4.2 MB',
            icon: 'description',
            accent: 'border-t-navy'
        },
        {
            title: '데이터 분석 웹 대시보드 템플릿',
            desc: 'Python 및 Flask 기반의 교육용 데이터 시각화 보일러플레이트 코드. 중/고등 심화반 활용 권장.',
            tag: '소스 코드',
            info: 'CODE • 1.8 MB',
            icon: 'code',
            accent: 'border-t-wemake-green'
        },
        {
            title: '2024 창의 융합 해커톤 운영 키트',
            desc: '포스터 템플릿, 기획서 양식, 심사 위원 가이드라인 및 현장 운영 체크리스트 일체.',
            tag: '해커톤 가이드',
            info: 'ZIP • 28.5 MB',
            icon: 'folder_zip',
            accent: 'border-t-wemake-yellow'
        },
        {
            title: '인공지능 모델링과 사회적 영향력 분석',
            desc: '머신러닝 기초 이론과 윤리적 AI 개발을 주제로 한 토론 및 실습 중심의 심화 교재.',
            tag: '중/고등 심화 자료',
            info: 'PDF • 6.7 MB',
            icon: 'description',
            accent: 'border-t-navy'
        }
    ]

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <header className="pt-32 pb-16 bg-white dot-pattern border-b border-slate-50 text-center">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 italic tracking-tight">
                        교육 아카이브: <br className="md:hidden" />
                        <span className="text-gradient">미래 교육을 위한 지식 공유의 장</span>
                    </h1>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto mb-12">
                        WEMAKE Cooperative의 디지털 리소스 저장소입니다. <br/>
                        최신 교육 자료, 소스 코드 및 가이드라인을 자유롭게 탐색하세요.
                    </p>
                    
                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto p-1.5 bg-wemake-gradient rounded-full shadow-2xl">
                        <div className="flex bg-white rounded-full items-center px-6 py-3">
                            <span className="material-symbols-outlined text-slate-300 mr-3">search</span>
                            <input 
                                type="text" 
                                placeholder="자료 검색 (예: 파이썬 기초, 로봇 공학)"
                                className="w-full bg-transparent border-none focus:ring-0 font-medium text-navy outline-none placeholder:text-slate-300"
                            />
                            <button className="btn-gradient px-8 py-2.5 rounded-full text-sm font-bold shadow-lg">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="py-16">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    {/* Category Filters */}
                    <section className="flex flex-wrap justify-center gap-3 mb-16">
                        {categories.map((cat, i) => (
                            <button 
                                key={cat}
                                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest border transition-all ${
                                    i === 1 ? 'bg-navy text-white border-navy shadow-lg' : 'bg-white text-slate-400 border-slate-100 hover:border-navy hover:text-navy'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </section>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Sidebar: Top Downloads */}
                        <aside className="lg:col-span-4 h-fit">
                            <div className="glass-card rounded-[2.5rem] p-8 border-slate-50 bg-slate-50/30 sticky top-32">
                                <h2 className="text-xl font-bold text-navy mb-8 flex items-center gap-3 italic">
                                    <span className="material-symbols-outlined text-wemake-green font-filled">star</span>
                                    Top Downloads
                                </h2>
                                <ul className="space-y-6">
                                    {topDownloads.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 p-4 rounded-3xl bg-white border border-slate-50 shadow-sm group hover:scale-105 transition-transform cursor-pointer">
                                            <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center text-navy shrink-0">
                                                <span className="material-symbols-outlined">{item.icon}</span>
                                            </div>
                                            <div className="overflow-hidden">
                                                <h3 className="text-sm font-bold text-navy truncate group-hover:text-wemake-green transition-colors">{item.title}</h3>
                                                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-1">{item.info}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>

                        {/* Resource Grid */}
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {resources.map((item, i) => (
                                    <div key={i} className={`glass-card rounded-[2.5rem] p-8 flex flex-col justify-between border-slate-50 hover:shadow-2xl transition-all duration-500 bg-white border-t-8 ${item.accent}`}>
                                        <div>
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-navy shadow-inner">
                                                    <span className="material-symbols-outlined font-filled">{item.icon}</span>
                                                </div>
                                                <span className="px-3 py-1 bg-navy/5 text-navy text-[10px] font-black rounded-full uppercase">{item.tag}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-navy mb-3 italic">{item.title}</h3>
                                            <p className="text-[14px] text-slate-500 font-medium leading-relaxed mb-6">{item.desc}</p>
                                        </div>
                                        <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{item.info}</span>
                                            <button className="flex items-center gap-2 text-navy hover:text-wemake-green font-bold text-sm transition-colors group">
                                                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-y-0.5">download</span>
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default EducationArchive
