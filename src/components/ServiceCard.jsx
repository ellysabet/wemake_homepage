import { Link } from 'react-router-dom'

const ServiceCard = ({ title, desc, icon, color, isGradient, link }) => {
    return (
        <Link 
            to={link || '#'}
            className="w-full h-full flex flex-col justify-between glass-card rounded-3xl p-8 group cursor-pointer overflow-hidden relative transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl border border-slate-100 bg-white"
        >
            <div className="relative z-10 flex flex-col h-full">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${color}`}>
                    <span className={`material-symbols-outlined text-2xl ${isGradient ? 'text-white' : ''}`}>
                        {icon}
                    </span>
                </div>
                
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-wemake-green transition-colors">
                    {title}
                </h3>
                
                <p className="text-sm text-slate-500 leading-relaxed font-medium mb-8">
                    {desc}
                </p>
                
                <div className="flex items-center gap-2 text-xs font-bold text-navy group-hover:text-wemake-green transition-colors mt-auto pt-4 border-t border-slate-50">
                    <span>자세히 보기</span>
                    <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                </div>
            </div>

            {/* 배경 아이콘 장식 */}
            <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-navy/5 text-[150px] pointer-events-none group-hover:text-wemake-green/10 transition-all duration-500">
                {icon}
            </span>
        </Link>
    )
}

export default ServiceCard
