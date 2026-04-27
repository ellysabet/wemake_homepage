import ServiceCard from './ServiceCard'

const Services = () => {
    const services = [
        {
            title: '초/중등 기본 SW교육',
            desc: '컴퓨팅 사고력을 기르는 기초 코딩과 알고리즘 입문 과정. 블록 코딩부터 텍스트 코딩의 기초까지 재미있게 학습합니다.',
            icon: 'school',
            color: 'bg-navy/5 text-navy',
            link: '/edu/basic'
        },
        {
            title: '초/중등 심화 SW&Physical 교육',
            desc: '실생활 문제 해결을 위한 프로젝트 중심의 심화 프로그래밍 과정.',
            icon: 'integration_instructions',
            color: 'bg-wemake-green/10 text-wemake-green',
            link: '/edu/advanced-physical'
        },
        {
            title: '고등 창의융합 심화교육',
            desc: 'AI, 데이터 사이언스 등 최신 기술을 활용한 융합형 고급 프로젝트 과정.',
            icon: 'architecture',
            color: 'bg-wemake-yellow/10 text-wemake-yellow',
            link: '/edu/high-creative'
        },
        {
            title: '강사 양성 과정',
            desc: '전문적인 SW 교육 역량을 갖춘 차세대 핵심 강사진 육성 프로그램.',
            icon: 'co_present',
            color: 'bg-slate-100 text-slate-600',
            link: '/pro/instructor'
        },
        {
            title: '교원 및 교육기관 교육',
            desc: '학교 교사 및 공공/민간 교육기관 종사자를 위한 맞춤형 SW/AI 교육 연수.',
            icon: 'local_library',
            color: 'bg-navy/5 text-navy',
            link: '/pro/institution'
        },
        {
            title: '해커톤 / SW캠프 기획&운영',
            desc: '창의적인 아이디어를 실험하는 해커톤과 몰입형 SW 캠프의 기획부터 현장 운영까지 총괄 대행합니다.',
            icon: 'emoji_events',
            color: 'bg-wemake-gradient text-white',
            isGradient: true,
            link: '/event/hackathon'
        },
        {
            title: '교육 아카이브',
            desc: 'WEMAKE의 축적된 교육 자료, 우수 프로젝트 사례 및 학습 리소스 보관소.',
            icon: 'inventory_2',
            color: 'bg-slate-100 text-slate-600',
            link: '/archive'
        },
        {
            title: '조합 소개',
            desc: '함께 성장하고 나누는 WEMAKE 교육 협동조합의 미션과 비전을 소개합니다.',
            icon: 'diversity_3',
            color: 'bg-navy/5 text-navy',
            link: '/about'
        }
    ]

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-navy mb-4 italic">WEMAKE 교육 서비스</h2>
                    <p className="text-slate-500 font-medium tracking-wide">대상과 목적에 맞춘 체계적인 교육 과정을 제공합니다.</p>
                </div>

                {/* Grid 고정: 모든 카드가 동일한 너비를 가짐 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
