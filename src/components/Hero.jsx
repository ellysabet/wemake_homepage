import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-20 right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-wemake-green to-wemake-yellow blur-[120px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-navy to-transparent blur-[100px]"></div>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-navy font-bold text-xs mb-8">
          <span className="w-2 h-2 rounded-full bg-wemake-green animate-pulse"></span>
          EMPOWERING FUTURE INNOVATORS
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-navy mb-6 max-w-4xl mx-auto leading-tight md:leading-[1.1]">
          미래를 코딩하다, <br />
          함께 성장하는 <span className="text-gradient">WEMAKE</span>
        </h1>
        
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed transition-all hover:text-navy">
          신뢰할 수 있는 협동조합 모델과 최첨단 기술 교육의 만남. <br className="hidden md:block" />
          WEMAKE는 체계적인 커리큘럼과 전문 강사진을 통해 <br className="hidden md:block" />
          미래 인재를 양성하는 프리미엄 교육 플랫폼입니다.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/edu/basic" className="btn-gradient px-10 py-4 shadow-lg shadow-wemake-green/20">
            교육 과정 알아보기
          </Link>
          <Link to="/about" className="bg-white border-2 border-navy text-navy px-10 py-4 rounded-full font-bold hover:bg-navy hover:text-white transition-all duration-300">
            조합 소개
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
