import logo from '../assets/logo.png'

const AdvancedPhysicalEdu = () => {
    const projects = [
        {
            title: '로보틱스 & 피지컬 컴퓨팅',
            desc: '아두이노와 다양한 센서를 활용하여 실생활 문제를 해결하는 지능형 로봇 프로토타이핑 설계 및 제어',
            tags: ['HARDWARE', 'ROBOTICS'],
            code: 'void loop() {\n  int distance = sonar.ping_cm();\n  if (distance < 20) {\n    stopMotors();\n  } else {\n    moveForward();\n  }\n}',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkLoRYDMh4P4d8rWj1bZVvr1BaYtYulTvwB0RZeqjK_bXC4n0DqtQotxnf4n2AAk8WXn3jykDp-8OTZjCr-LUUZm6EpnW7mxYIELuNqDXmrB9c7nXLRrqH75DfGIbba-3L0l4g438FIX5l9jHPVUWFzllLwO01Bxby2EiDEwIsQw52Ub2mbK61PTye8RDYG9rRcizZiHNCZsPxt5RADpr10r6zwUEcs6AqZqFZZWLGCNRGxgOH1UhU4PRe3mhIctBiu96YoT6-wko'
        },
        {
            title: '파이썬 데이터 분석 & 알고리즘',
            desc: '객체 지향 프로그래밍과 데이터 구조를 기반으로 한 복잡한 문제 해결 알고리즘 설계 및 가상 환경 시뮬레이션',
            tags: ['PYTHON', 'ALGORITHM'],
            code: 'import matplotlib.pyplot as plt\nimport pandas as pd\n\ndata = pd.read_csv("sensor_data.csv")\ndata.plot(kind="line")\nplt.show()',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4IA6HlWL6fQPkcVDXd0vv939r7fQP9Mgy7fRpIvKAz43O5zazRttDCRbfLS9cs-auCaWDQFzRwQoV1SoHFANsciubUcYt9qtltC-QvPEaDNNLj6CsWM4bx6IQS_baz4hVOQxXjW2M41HRhnUdYfQ5xLTPGEluTFTuGGAgbhut4OmU5j-2Q1PnLD_uDDDvb9uqM7_ff3hO1mRnvTlXKKPJsBx1U8YLvdKIPmM0dU5ZBOEBePfOUO61Gai1i1FWlhU76NP8Nsr0zKg'
        },
        {
            title: 'IoT 스마트 시스템 개발',
            desc: '웹과 하드웨어를 연결하는 풀스택 IoT 프로젝트. 데이터 가시화와 원격 제어 시스템 구축',
            tags: ['IOT', 'FULL-STACK'],
            code: 'fetch("https://api.wemake/v1/control", {\n  method: "POST",\n  body: JSON.stringify({ power: "ON" })\n});',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU1oGk1uYSSTpNuuAVuzuI6RLAmDi2z0LmZ6e60tQ_7Ggk1Y7LOyWJrVtmXTdK8afbkKzYNl19L8L8AenEDnIzVgfYGfKlkD07-09or0SNn468uYHEATCHJWC47Athbzq3C_675jyWNqQo99M_kyRLpJmaViF_sq_4vCiWhzu5x7lnlJXAtH4zLcHr0TkdDuNHPupF5gzNLxbPtiI0URK_M3wmvf0JiLxFNSySWYeL_C2a6wscHlhN3uYJznObT8Et2bNskssRjsc'
        }
    ]

    return (
        <div className="bg-white min-h-screen">
            {/* Academic Header */}
            <header className="relative pt-32 pb-24 overflow-hidden bg-slate-50/50 dot-pattern">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-navy/5 text-navy font-bold text-xs mb-6 border border-navy/10">
                        ADVANCED EDUCATION PROGRAM
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-navy mb-6 leading-tight">
                        초/중등 심화 SW&Physical 교육:<br/>
                        <span className="text-gradient">기술의 한계를 뛰어넘다</span>
                    </h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        단순한 코딩 프로젝트를 넘어 하드웨어와 소프트웨어의 경계를 허무는 <br className="hidden md:block" />
                        피지컬 컴퓨팅 심화 과정입니다. 미래의 엔지니어를 위한 실전 역량을 강화합니다.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="btn-gradient px-10 py-4 shadow-lg shadow-wemake-green/20">
                            커리큘럼 다운로드
                        </button>
                        <button className="bg-white border-2 border-navy text-navy px-8 py-4 rounded-full font-bold hover:bg-navy hover:text-white transition-all duration-300">
                            상담 신청하기
                        </button>
                    </div>
                </div>
            </header>

            {/* Project Gallery Section */}
            <section className="py-24">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 italic">심화 프로젝트 포트폴리오</h2>
                        <p className="text-slate-500 font-medium italic">SW와 HW의 융합을 통해 완성된 고난도 프로젝트 결과물입니다.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="glass-card rounded-3xl overflow-hidden group border border-slate-100 bg-white shadow-xl shadow-slate-200/20">
                                <div className="h-48 bg-[#1e1e1e] p-6 relative overflow-hidden font-mono text-[11px] leading-tight text-white/40">
                                    <div className="flex gap-1.5 mb-4 opacity-50">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                    </div>
                                    <pre><code>{project.code}</code></pre>
                                    <img src={project.img} alt={project.title} className="absolute -bottom-4 -right-4 w-32 h-32 object-cover rounded-2xl shadow-2xl border-4 border-white/10 group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-navy/5 text-navy font-bold text-[10px] uppercase tracking-wider">{tag}</span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-wemake-green transition-colors">{project.title}</h3>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{project.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdvancedPhysicalEdu
