import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const AboutUs = () => {
    const coreValues = [
        { title: '전문성', eng: 'Professionalism', icon: 'verified' },
        { title: '협동', eng: 'Cooperation', icon: 'handshake' },
        { title: '혁신', eng: 'Innovation', icon: 'lightbulb' },
        { title: '나눔', eng: 'Contribution', icon: 'volunteer_activism' }
    ]

    const history = [
        { year: '2024', items: ['디지털 새싹 캠프 전국 확대 운영', 'AI 융합 교육 과정 특허 출원', '지역 교육 거점 센터 개소'], accent: 'border-l-navy' },
        { year: '2023', items: ['고용노동부 우수 사회적 기업 선정', '협력 파트너사 100개소 돌파', '청소년 코딩 경진대회 주관'], accent: 'border-r-navy', reverse: true },
        { year: '2021-22', items: ['WEMAKE 교육 협동조합 설립', '창의인재 양성 프로그램 론칭', '경기도 예비 사회적 기업 인증'], accent: 'border-l-navy' }
    ]

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-white dot-pattern border-b border-slate-50">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-navy/5 text-navy font-bold text-xs mb-8 border border-navy/10 uppercase tracking-widest">
                        Future of Education
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-navy mb-8 leading-tight italic tracking-tight">
                        미래를 만드는 교육 공동체, <br className="md:hidden" />
                        <span className="text-gradient">WEMAKE</span>
                    </h1>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl mb-12">
                        우리는 기술과 협력을 통해 교육의 미래를 설계합니다. <br/>
                        지역 사회의 교육 격차를 해소하고 모든 학습자가 가능성을 발견하는 세상을 꿈꿉니다.
                    </p>
                    <div className="flex gap-4 mb-16">
                        <Link to="/edu/basic" className="btn-gradient text-navy px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 transition-all flex items-center gap-2">
                            <span>프로그램 알아보기</span>
                            <span className="material-symbols-outlined text-xl">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhgQygsqV2N00Y--bAiJXBjo6Rz38PjtAgug4w5ObXdtX9bGFRlG8qP6M-sGY64YLFZK4y_vpwqDHR7BZucFkmEibMh7hTGZJafQNi59kB1sBxhTSbQT5_rg3vT8fmU1KpBIZvko5unAgk_bHOdRS3q3kFZzAe9dwS2yX45SyLtpInUGUjyoI23nOwT5CsBAJuNkAcFjrXGiSX-4j1bf22sjIPDlW_PpC3KGy5ldmGih8HbuxA7WunFg38dUlzQp99SwiJ_o-t_tg" 
                            alt="WEMAKE Team" 
                            className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-slate-50/50">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-navy italic tracking-tight">Mission & Vision</h2>
                        <p className="text-slate-500 font-medium italic mt-4">지속 가능한 교육 생태계를 구축하기 위한 우리의 발걸음</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: '활동 중심', desc: '이론을 넘어 실제적인 프로젝트와 체험을 통해 살아있는 지식을 습득하고 미래 역량을 강화합니다.', icon: 'rocket_launch' },
                            { title: '창의 융합', desc: '기술과 예술, 인문학을 융합하여 새로운 가치를 창출하는 창의적 문제 해결 능력을 지향합니다.', icon: 'psychology' },
                            { title: '교육 격차 해소', desc: '누구에게나 평등한 교육의 기회를 제공하여 지역 사회와 동반 성장하는 상생의 가치를 실현합니다.', icon: 'diversity_3' }
                        ].map((m, i) => (
                            <div key={i} className="glass-card rounded-[2.5rem] p-10 bg-white border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                                <div className="w-14 h-14 rounded-2xl bg-wemake-gradient flex items-center justify-center mb-8 shadow-lg text-white">
                                    <span className="material-symbols-outlined text-3xl font-filled">{m.icon}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-4 italic">{m.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-navy italic tracking-tight">Core Values</h2>
                            <p className="text-slate-500 font-medium italic mt-4">WEMAKE의 모든 결정은 4가지 핵심 가치를 바탕으로 합니다.</p>
                        </div>
                        <div className="h-1.5 w-32 bg-wemake-gradient rounded-full mb-4"></div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((v, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-8 rounded-[2rem] border border-slate-50 hover:border-wemake-green hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                                <div className="text-navy group-hover:scale-110 group-hover:text-wemake-green transition-all duration-500 mb-6">
                                    <span className="material-symbols-outlined text-5xl font-filled">{v.icon}</span>
                                </div>
                                <h4 className="text-xl font-bold text-navy mb-1 italic">{v.title}</h4>
                                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{v.eng}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* History */}
            <section className="py-24 bg-navy">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white italic tracking-tight">History</h2>
                        <p className="text-white/50 font-medium italic mt-4">신뢰로 쌓아온 WEMAKE의 주요 발자취</p>
                    </div>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/20"></div>
                        <div className="space-y-16">
                            {history.map((h, i) => (
                                <div key={i} className={`relative flex flex-col md:flex-row items-center md:justify-between w-full ${h.reverse ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-wemake-green rounded-full z-10 border-4 border-navy shadow-[0_0_0_4px_rgba(137,184,76,0.3)]"></div>
                                    <div className={`w-full md:w-5/12 ${h.reverse ? 'md:pl-16' : 'md:pr-16 text-right'}`}>
                                        <span className="text-4xl font-black text-white block mb-4 italic opacity-80">{h.year}</span>
                                        <div className={`glass-card p-8 rounded-3xl border-white/10 bg-white/5 backdrop-blur-md ${h.accent} border-t-0 border-b-0 border-r-0 border-l-[6px]`}>
                                            <ul className={`text-white/70 space-y-3 font-medium text-sm ${h.reverse ? 'text-left' : 'md:text-right'}`}>
                                                {h.items.map((item, j) => (
                                                    <li key={j}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="md:w-5/12 hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Organizations */}
            <section className="py-24">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-navy italic tracking-tight mb-8">조직 구성 및 파트너</h2>
                        <p className="text-slate-500 font-medium leading-relaxed mb-12">
                            WEMAKE는 다양한 전문가 그룹과 강력한 파트너십을 통해 신뢰할 수 있는 교육 서비스를 제공합니다. <br/>
                            학계, 산업계, 그리고 사회와 긴밀히 협력하여 교육의 미래를 혁신하고 있습니다.
                        </p>
                        <div className="space-y-8">
                            {[
                                { title: '교육 연구소', desc: '최신 에듀테크 기술을 접목한 커리큘럼 개발', icon: 'hub' },
                                { title: '운영 위원회', desc: '투명하고 효율적인 협동조합 의사결정', icon: 'groups' }
                            ].map((o, i) => (
                                <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all cursor-pointer">
                                    <div className="bg-navy p-3 rounded-2xl text-white">
                                        <span className="material-symbols-outlined text-2xl">{o.icon}</span>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-navy text-lg">{o.title}</h5>
                                        <p className="text-sm text-slate-400 font-medium">{o.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        {[1,2,3,4,5,6].map(p => (
                            <div key={p} className="bg-slate-50 h-32 rounded-[2rem] flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all border border-slate-100 cursor-pointer group">
                                <span className="font-black text-slate-200 group-hover:text-navy text-xs tracking-widest uppercase">Partner {p}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
