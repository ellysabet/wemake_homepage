import logo from '../assets/logo.png'

const InstitutionEdu = () => {
    const services = [
        {
            title: '교원 연수',
            desc: '최신 기술 동향과 실무 중심의 맞춤형 교원 연수 프로그램을 제공하여 교육 역량 강화를 지원합니다.',
            icon: 'school'
        },
        {
            title: '해커톤 운영 기획',
            desc: '창의적인 문제 해결 능력을 기르는 해커톤 및 아이디어톤 행사의 기획부터 운영까지 총괄 지원합니다.',
            icon: 'lightbulb'
        },
        {
            title: '교육 과정 개발',
            desc: '기관의 특성과 요구사항을 반영한 체계적이고 혁신적인 맞춤형 교육 커리큘럼을 설계합니다.',
            icon: 'menu_book'
        }
    ]

    const achievements = [
        { value: '1,500+', label: '연수 참여 교원 수', icon: 'groups' },
        { value: '50+', label: '운영 대회 수', icon: 'emoji_events' },
        { value: '120+', label: '협력 학교 및 기관', icon: 'handshake' }
    ]

    return (
        <div className="bg-white min-h-screen">
            {/* Authority Header */}
            <header className="pt-32 pb-24 data-node-bg relative overflow-hidden bg-slate-50/30">
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white pointer-events-none"></div>
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-navy/5 text-navy font-bold text-xs mb-6 border border-navy/10">
                        INSTITUTIONAL EDUCATION SOLUTIONS
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-navy mb-6 leading-tight">
                        교원 및 교육기관 대상 교육:<br/>
                        <span className="text-gradient">교육 현장의 혁신을 이끕니다</span>
                    </h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        미래 지향적인 교육 솔루션과 체계적인 연수 프로그램으로 <br className="hidden md:block" />
                        교육 현장의 실질적인 변화를 지원합니다.
                    </p>
                </div>
            </header>

            {/* Service Blocks */}
            <section className="py-24">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8 border-b border-slate-50 pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((item, index) => (
                            <div key={index} className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden group hover:-translate-y-3 transition-all duration-500 border-slate-50 bg-white">
                                <div className="absolute -right-8 -top-8 w-32 h-32 bg-wemake-green/5 rounded-full blur-2xl group-hover:bg-wemake-green/10 transition-colors"></div>
                                <div className="w-14 h-14 rounded-2xl border-2 border-wemake-green/20 flex items-center justify-center mb-8">
                                    <span className="material-symbols-outlined text-3xl text-gradient font-bold">{item.icon}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-4 italic">{item.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievement Dashboard */}
            <section className="bg-slate-50/50 py-24 border-y border-slate-100">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-navy">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                        {achievements.map((item, index) => (
                            <div key={index} className={`flex flex-col items-center ${index === 1 ? 'md:border-x md:border-slate-200' : ''}`}>
                                <div className="flex justify-center mb-6">
                                    <span className="material-symbols-outlined text-4xl text-navy opacity-40 font-filled">{item.icon}</span>
                                </div>
                                <div className="text-5xl font-black mb-3 italic tracking-tight">{item.value}</div>
                                <div className="text-xs font-black text-slate-300 uppercase tracking-widest">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTAs */}
            <section className="py-24 text-center">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-12 italic tracking-tight">함께 혁신을 만들어갈 파트너를 기다립니다</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button className="btn-gradient px-10 py-5 shadow-xl shadow-wemake-green/20 flex items-center justify-center gap-2 group">
                            연수 제안서 요청
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </button>
                        <button className="bg-white border-2 border-navy text-navy px-10 py-5 rounded-full font-bold hover:bg-navy hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                            운영 사례 보기
                            <span className="material-symbols-outlined">open_in_new</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default InstitutionEdu
