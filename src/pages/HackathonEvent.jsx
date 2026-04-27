import logo from '../assets/logo.png'
import hackathonHero from '../assets/hackathon_hero.png'

const HackathonEvent = () => {
    const processes = [
        { step: '단계 01', title: '컨셉 디자인 (Concepting)', desc: '행사의 목적과 캠프 테마에 부합하는 최적의 커리큘럼 및 챌린지 시나리오 설계', icon: 'architecture' },
        { step: '단계 02', title: '학습자 모집 (Engagement)', desc: '타겟 맞춤형 홍보 전략 수립 및 몰입형 학습 환경 조성을 위한 사전 지원 시스템 구축', icon: 'inventory_2' },
        { step: '단계 03', title: '토털 운영 (Full Ops)', desc: '전문 퍼실리테이터 투입, 실시간 멘토링 매칭 및 안전한 캠프 현장 관리 총괄', icon: 'settings_b_roll' },
        { step: '단계 04', title: '포스트 케어 (Post-care)', desc: '참가자 중심의 심층 결과 분석 및 후속 프로젝트 연계 지원 시스템 제공', icon: 'monitoring' }
    ]

    const portfolio = [
        { 
            title: '중고등 몰입형 SW 겨울캠프', 
            desc: '미래 원천 기술 고도화를 테마로 한 3박 4일 집중 교육 캠프 운영', 
            tag: 'SW CAMP', 
            size: 'lg',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbwq1HiiIe3L4dwDw-Q7_HotjKqWmTLT3kXzLFoXI2UceAoYnVoJuEvjcWmTTSOMrW3HyGLnQEAMwwv-BxWsru7q6A7wISQ6ywevni9frJDRGdJ2tEyNHn8HfDYv8j1EkvzNzA2SAkfEWLQ-tu5PzNmyPUMQqba1hSOxnDR3QmBb0cFYa0dCMjaMJZoHLyR5VZuwbRUe5D6-S9wi0v7GqW6sATI4YkzSsAxtcZk2ki_VOnk6QVulAB-7mYUWn_3AhN8dm2giMouoU' 
        },
        { 
            title: '청소년 AI 아이디어톤', 
            desc: '실생활 문제 해결을 위한 창의적 알고리즘 설계 챌린지', 
            tag: 'HACKATHON', 
            size: 'sm',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwWj5LaeutvmcMwQRe-wrKsNJ2Lfv2omxSREOqhDj3t2y2uJA2zc-OrMG7f2CeSaY-hcCEh-brZQ3DIBZA4bonDFpQiNqb52ODLziTYhas2VutrfW52MNDl34AQJGEnAUrQZCGdTGdiJ2dW-XKAy-M5y1U1sNdrE0LPhIbr7ZJsZBoMu_uWTI9uB37N3L_HEn8hfi4gvxReZpnP-bst3ao79QRr394Otqz_Z_WNwqSL9vN0FqKfdDf2yx8qex6n9adkwa9n-SeLlM' 
        },
        { 
            title: '창의융합 성과 공유회', 
            desc: '지역 교육 공동체 성과 전시 및 네트워킹 이벤트', 
            tag: 'EVENT', 
            size: 'sm',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW0RSjWt-HBhwP6N3cVQvd4aFOzioT7DCq9Ne0F9ypfL9uxGdbsn0XYObxohZv50TLgbvR1J6crDW6LHVYVKxUK1GTNGpx3fml3ziJkT5lyq4fU4qLaOhvrLvkjo3TtfTYFSomBcwYbprNmgHVnu0o5xrAKMb_n2_NrcCTZbQkuIperNWIsViwtLHNA2P0N-oeb8vlIafE_bTU-DIIgXW0-btznqNR3612jtAZvJ2-j9laDYYQJOfGZK-hIDjXhO-CQMJ49gqGDxA' 
        },
        { 
            title: '영재 교육 코딩 부트캠프', 
            desc: '단시간 내에 핵심 개발 역량을 끌어올리는 몰입형 코딩 교육', 
            tag: 'BOOTCAMP', 
            size: 'lg',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqwePV9XBAfZBT3tfIFgECVmnB59UHOVB76LN0L2EWsO8joGnR6ToTy562PJ8tvg7bqeaOOobUepojcJQ1nwGlBndeNMPUcQi1BaJa2BhUhZ96RdBS4fXLcH4sLywW-2oSGoRrjdQDxV9lkqkCB0c7TySlJOUtoZn44dLlhGE_eF7nHu85Ot3IjfLbbyMjyODEHsxT5TtW_R9J8Zl0jqsReqyFEk_CrfrWFV1b5AkpiNEN7BqCFUk9DDkkETQysKQw3X4KcuWOEVY' 
        }
    ]

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-white node-pattern border-b border-slate-50">
                <div className="absolute top-20 left-10 w-72 h-72 bg-wemake-green/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-20 w-96 h-96 bg-wemake-yellow/5 rounded-full blur-3xl"></div>
                
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 flex flex-col space-y-6">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-navy/5 text-navy font-bold text-[11px] mb-2 border border-navy/10 w-fit">
                            SPECIALIZED EVENT & CAMP
                        </span>
                        <h1 className="text-3xl md:text-[50px] font-extrabold text-navy mb-4 leading-[1.2] tracking-tight">
                            해커톤 / SW캠프 기획&운영: <br/>
                            <span className="text-gradient">몰입과 혁신의 무대를 만듭니다</span>
                        </h1>
                        <p className="text-base md:text-[17px] text-slate-500 font-medium leading-relaxed max-w-xl">
                            창의적인 아이디어가 발산되는 해커톤부터 압축적 성장을 이끄는 SW 캠프까지, 
                            교육과 재미를 동시에 잡는 차별화된 행사 기획을 통해 참가자들의 잠재력을 깨웁니다.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="btn-gradient px-8 py-4 shadow-lg shadow-wemake-green/20">
                                캠프/행사 문의하기
                            </button>
                            <button className="bg-white border-2 border-navy text-navy px-8 py-4 rounded-full font-bold hover:bg-navy hover:text-white transition-all duration-300">
                                포트폴리오 보기
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative group">
                        <div className="glass-card rounded-[2.5rem] overflow-hidden p-3 border-slate-50 shadow-2xl">
                            <img src={hackathonHero} alt="Student Hackathon Collaboration" className="rounded-[2rem] w-full h-[380px] object-cover" />
                        </div>
                        {/* Floating Stats */}
                        <div className="absolute -bottom-6 -left-6 glass-card rounded-3xl p-6 flex items-center gap-4 border-slate-100 shadow-xl z-20">
                            <div className="w-12 h-12 rounded-2xl bg-navy flex items-center justify-center text-white">
                                <span className="material-symbols-outlined">stars</span>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Experience</p>
                                <p className="text-xl font-bold text-navy italic">150+ Camps</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-slate-50/50">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-navy italic tracking-tight">전문적인 관리 프로세스</h2>
                        <p className="text-slate-500 font-medium italic mt-4">단순한 행사 운영을 넘어 최적의 학습 성과를 도출합니다.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {processes.map((p, index) => (
                            <div key={index} className="glass-card rounded-[2.5rem] p-8 flex flex-col items-center text-center bg-white border-slate-100 hover:shadow-xl transition-all duration-500 group">
                                <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mb-6 text-navy group-hover:bg-navy group-hover:text-white transition-colors duration-500">
                                    <span className="material-symbols-outlined text-3xl">{p.icon}</span>
                                </div>
                                <span className="px-4 py-1.5 bg-wemake-green/10 text-wemake-green text-[10px] font-black rounded-full uppercase mb-4">{p.step}</span>
                                <h3 className="text-xl font-bold text-navy mb-3">{p.title}</h3>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-navy italic tracking-tight">주요 포트폴리오</h2>
                            <p className="text-slate-500 font-medium italic mt-4 max-w-xl">해커톤과 몰입형 캠프를 통해 검증된 WEMAKE의 운영 노하우입니다.</p>
                        </div>
                        <button className="text-navy font-bold flex items-center gap-2 group">
                            전체 보기
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolio.map((item, index) => (
                            <div key={index} className={`group relative overflow-hidden rounded-[2.5rem] bg-navy ${item.size === 'lg' ? 'lg:col-span-2' : ''} h-[400px] shadow-2xl`}>
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent p-10 flex flex-col justify-end">
                                    <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-[10px] font-black rounded-full w-fit mb-4 border border-white/30 uppercase tracking-widest">{item.tag}</span>
                                    <h3 className={`text-navy-50 font-bold mb-2 italic ${item.size === 'lg' ? 'text-3xl' : 'text-2xl'}`}>{item.title}</h3>
                                    <p className="text-white/70 font-medium">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HackathonEvent
