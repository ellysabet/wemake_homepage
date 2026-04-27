import logo from '../assets/logo.png'

const BasicSWEducation = () => {
    const curricula = [
        {
            title: '블록 코딩 기초',
            desc: '엔트리와 스크래치를 활용하여 프로그래밍의 기본 개념을 쉽고 재미있게 학습합니다.',
            icon: 'extension',
            color: 'bg-navy/5 text-navy',
        },
        {
            title: '언플러그드 활동',
            desc: '컴퓨터 없이 진행되는 놀이와 게임을 통해 컴퓨팅 사고력의 원리를 몸으로 체득합니다.',
            icon: 'power_off',
            color: 'bg-wemake-green/10 text-wemake-green',
        },
        {
            title: '로봇 코딩',
            desc: '오조봇, 햄스터 등 교육용 로봇을 직접 제어하며 하드웨어와 소프트웨어의 융합을 이해합니다.',
            icon: 'smart_toy',
            color: 'bg-wemake-yellow/10 text-wemake-yellow',
        },
        {
            title: '스크래치 프로젝트',
            desc: '나만의 애니메이션과 게임을 직접 기획하고 제작하는 창의적인 프로젝트를 수행합니다.',
            icon: 'integration_instructions',
            color: 'bg-slate-100 text-slate-600',
        }
    ]

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <header className="relative pt-32 pb-24 overflow-hidden bg-white">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-wemake-green rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-navy rounded-full blur-[100px]"></div>
                </div>
                
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-navy/5 text-navy font-bold text-xs mb-6">초/중등 과정</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-navy mb-6 leading-tight">
                        초/중등 기본 SW교육:<br/>
                        <span className="text-gradient">코딩의 즐거움을 배우다</span>
                    </h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        아이들의 상상력을 현실로 만드는 첫 걸음. <br className="hidden md:block" />
                        재미있는 게임과 실습을 통해 자연스럽게 논리적 사고력과 문제 해결 능력을 키웁니다.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="btn-gradient px-10 py-4 shadow-lg shadow-wemake-green/20">
                            수강 신청하기
                        </button>
                        <button className="bg-white border-2 border-navy text-navy px-8 py-4 rounded-full font-bold hover:bg-navy hover:text-white transition-all duration-300 flex items-center gap-2">
                            <span className="material-symbols-outlined text-xl">download</span>
                            커리큘럼 다운로드
                        </button>
                    </div>
                </div>
            </header>

            {/* Philosophy Section (Timeline UI) */}
            <section className="py-24 bg-slate-50/50">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 italic">WEMAKE 교육 철학</h2>
                        <p className="text-slate-500 font-medium italic">"이론은 10분 이내, 실습은 80분 이상!" 체험 중심의 몰입형 교육</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10 hidden md:block"></div>
                        
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
                            <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center mx-auto mb-6 font-bold text-xl">1</div>
                            <h3 className="text-xl font-bold text-navy mb-3">언플러그드</h3>
                            <p className="text-sm text-slate-500 font-medium">컴퓨터 없이 원리를 <br/>몸으로 직접 체험</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center scale-110 relative z-10 border-wemake-green/30">
                            <div className="w-12 h-12 rounded-full bg-wemake-green text-white flex items-center justify-center mx-auto mb-6 font-bold text-xl">2</div>
                            <h3 className="text-xl font-bold text-navy mb-3">블록 코딩</h3>
                            <p className="text-sm text-slate-500 font-medium">직관적인 블록으로 <br/>논리적 사고력 훈련</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
                            <div className="w-12 h-12 rounded-full bg-wemake-yellow text-white flex items-center justify-center mx-auto mb-6 font-bold text-xl">3</div>
                            <h3 className="text-xl font-bold text-navy mb-3">피지컬 컴퓨팅</h3>
                            <p className="text-sm text-slate-500 font-medium">로봇 등 하드웨어를 <br/>직접 제어하는 성취감</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Grid Section */}
            <section className="py-24">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 italic">핵심 커리큘럼</h2>
                        <p className="text-slate-500 font-medium tracking-wide">단계별 맞춤 학습으로 탄탄한 기초를 다집니다.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {curricula.map((item, index) => (
                            <div key={index} className="glass-card rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col h-full">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.color}`}>
                                    <span className="material-symbols-outlined text-2xl font-filled">{item.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                                <p className="text-sm text-slate-500 font-medium flex-grow">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Classroom Highlights */}
            <section className="py-24 bg-slate-50/30">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 flex items-center justify-center gap-3 italic">
                            생생한 클래스룸 <span className="text-gradient font-black tracking-widest">&lt;/&gt;</span>
                        </h2>
                        <p className="text-slate-500 font-medium">아이들의 열정과 웃음이 가득한 교육 현장입니다.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                        <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden group relative">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIRKpp8vq2psiSXSaKCCQ-5Pltcwf8vlyQbHmtHUCWuTy0qBm17M66ENeQmLnDq-sdOjWIrkpUhMnY1hHKyR6UTDjbo9df2OPlGyKoCOv1LR28G5U4bVyOOqg6Xry9KuiR4wpCryZKbz9TJyyFKi8buIobWNhBvfY5-oC_k6slJjj5tatwhdMDAbiAcn90fXUHYBVvofQKS_6haXPsXR8d9SFLintuz1jiJU5haBIpelyY0tPsfI6bu8CTZP1Dpq2QyHnzYJugJV8" alt="Classroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                <p className="text-white font-bold text-xl">함께 협력하며 문제를 해결합니다.</p>
                            </div>
                        </div>
                        <div className="rounded-3xl overflow-hidden group">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb40yn2aNZ_gvrEjPd87Kbh3QW2kfCLwzAenaPC2a94kXbzhooYYktQtZNO6QRf_QIrk9WJ3xl-nYfVL-FjmCc2HGS9jdSlUK8QiTjzCRVfoHMKqcUCFsdzFpWxbAMtjKDNqZj1jE7e8sSd9anCRg8AHL-2DoeIeaEIemzT1ou2d9lAe5jSrb5TQIQ_LarV7DxAFQvImRL_9gmuSQR7qPo5afsRFLPKwnUnEiRB19ImC5ffHFXQjGvKSOfKHbcWXD8Qv2lkTt8xJA" alt="Robot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="rounded-3xl overflow-hidden group">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQRolqCjuVtrFx34kvgfXPvWRRcIZKOB66xqQuiAdg5XbpVK-GwYMSV6AFBAYeP3RijMs1w5AiOwf0n0b1d85Upq1GkQeq_Yhfgjy0y0Hjq-3o4dukp5zb6t4ZMu0GFJIt_TQFyh4ZajBGqXjuEqbWJfAvICipcQ472M3NP3IpbSZsg8P8shg27YQt5Sr-v5txQ94N2CiHJNN10dBu3GP3Mf_-wo2QZxgUBNo0q-GGqYvAldoj3BIkX-IY4VCdiRSwTT_JSriCgJk" alt="Teacher" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BasicSWEducation
