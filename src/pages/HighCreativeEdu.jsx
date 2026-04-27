import logo from '../assets/logo.png'

const HighCreativeEdu = () => {
    const modules = [
        {
            title: 'AI Data Science',
            desc: '실무 데이터를 활용한 딥러닝 모델링과 통계적 분석을 통해 유의미한 가치를 창출합니다.',
            tags: ['Python', 'TensorFlow'],
            icon: 'database',
            color: 'bg-primary/5 text-primary'
        },
        {
            title: 'Smart Convergence Systems',
            desc: '임베디드 시스템과 클라우드 아키텍처를 결합한 지능형 서비스 프로토타입을 설계합니다.',
            tags: ['C++', 'AWS'],
            icon: 'memory',
            color: 'bg-secondary/5 text-secondary'
        },
        {
            title: 'Technical Engineering',
            desc: '소프트웨어 아키텍처 최적화 및 엔지니어링 방법론을 적용하여 고성능 시스템을 구축합니다.',
            tags: ['Architecture', 'DevOps'],
            icon: 'settings_suggest',
            color: 'bg-tertiary/5 text-tertiary'
        }
    ]

    const timeline = [
        {
            phase: 'Phase 01',
            title: 'Advanced Analytics',
            desc: '고난도 알고리즘과 수학적 모델링을 통해 논리적 해결 역량을 극대화합니다.',
            color: 'bg-secondary'
        },
        {
            phase: 'Phase 02',
            title: 'System Convergence',
            desc: '서로 다른 기술 도메인을 융합하여 새로운 가치를 만드는 실전 프로젝트를 수행합니다.',
            color: 'bg-primary'
        },
        {
            phase: 'Phase 03',
            title: 'Social Impact Project',
            desc: '사회의 문제를 기술로 해결하는 최종 결과물을 도출하고 실질적인 배포 과정을 경험합니다.',
            color: 'bg-tertiary'
        }
    ]

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-white data-pattern border-b border-slate-50">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-wemake-green/5 to-transparent pointer-events-none"></div>
                
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 flex flex-col space-y-6">
                        <span className="font-bold text-xs text-wemake-green tracking-widest uppercase">Advanced Creative Convergence SW</span>
                        {/* 폰트 사이즈 조정 및 제목 변경 */}
                        <h1 className="text-3xl md:text-[52px] font-extrabold text-navy leading-[1.2] tracking-tight">
                            고등 창의융합 심화교육: <br/>
                            <span className="text-gradient">기술로 세상을 혁신하다</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                            현업 수준의 AI 활용 능력과 융합적 문제 해결력을 기르는 프로젝트 중심 교육입니다. 
                            단순 코딩을 넘어 미래 기술의 깊이와 통찰을 배우는 고등부 최상위 과정입니다.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="btn-gradient px-8 py-4 shadow-lg shadow-wemake-green/20 flex items-center gap-2">
                                전형 안내
                                <span className="material-symbols-outlined text-xl">arrow_forward</span>
                            </button>
                            <button className="bg-slate-50 text-navy border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors flex items-center gap-2">
                                정보 가이드북
                                <span className="material-symbols-outlined text-xl">file_download</span>
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative h-[450px] w-full rounded-[2.5rem] overflow-hidden glass-card p-4 border-slate-100 shadow-2xl">
                        <div className="absolute inset-0 bg-navy/5 opacity-30"></div>
                        <div className="absolute inset-4 bg-white rounded-[2rem] shadow-sm border border-slate-50 flex flex-col overflow-hidden">
                            <div className="h-10 bg-slate-50 flex items-center px-6 border-b border-slate-100 gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            </div>
                            <div className="p-8 flex-1 bg-white font-mono text-[13px] text-slate-400 flex flex-col gap-4 overflow-hidden">
                                <div><span className="text-navy font-bold">import</span> torch</div>
                                <div><span className="text-navy font-bold">from</span> transformers <span className="text-navy font-bold">import</span> AutoModel</div>
                                <br/>
                                <div><span className="text-slate-300"># AI Convergence Model</span></div>
                                <div>model = AutoModel.from_pretrained(<span className="text-wemake-green">'wemake-bert'</span>)</div>
                                <div>output = model(input_ids, attention_mask)</div>
                                
                                <div className="w-full h-28 mt-auto rounded-3xl border border-slate-50 bg-slate-50/50 relative overflow-hidden">
                                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        <path d="M0,70 Q25,10 50,50 T100,20" fill="none" stroke="#89B84C" strokeWidth="2"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PBL Cards Section */}
            <section className="py-24">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-4 italic tracking-tight">Project PBL Modules</h2>
                        <p className="text-slate-500 font-medium italic">다양한 학문과 기술의 융합을 통해 실천적 대안을 제시합니다.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {modules.map((module, index) => (
                            <div key={index} className="glass-card rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden group hover:-translate-y-3 transition-all duration-500 border-slate-50 bg-white">
                                <div className="absolute -right-8 -top-8 w-32 h-32 bg-navy/5 rounded-full blur-2xl group-hover:bg-wemake-green/10 transition-colors"></div>
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${module.color}`}>
                                    <span className="material-symbols-outlined text-3xl font-filled">{module.icon}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-4 italic">{module.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed flex-1 mb-8 text-[15px]">{module.desc}</p>
                                <div className="flex gap-2 flex-wrap">
                                    {module.tags.map(tag => (
                                        <span key={tag} className="px-4 py-1.5 bg-slate-50 text-navy text-[11px] font-bold rounded-full uppercase tracking-wider">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Path Section */}
            <section className="py-24 bg-slate-50/30 relative">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-20 text-navy">
                        <h2 className="text-3xl md:text-5xl font-extrabold italic tracking-tight">Advanced Learning Path</h2>
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block"></div>
                        
                        <div className="space-y-24 relative">
                            {timeline.map((item, index) => (
                                <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="absolute left-1/2 w-4 h-4 rounded-full bg-white border-4 border-navy -translate-x-1/2 z-10 hidden md:block"></div>
                                    <div className={`md:w-5/12 w-full text-center md:text-left ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                                        <span className={`font-bold text-xs tracking-widest uppercase mb-3 block ${index === 0 ? 'text-wemake-green' : index === 1 ? 'text-navy' : 'text-wemake-yellow'}`}>{item.phase}</span>
                                        <h4 className="text-2xl font-bold text-navy mb-4 italic">{item.title}</h4>
                                        <p className="text-[15px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                    <div className="md:w-5/12 hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HighCreativeEdu
