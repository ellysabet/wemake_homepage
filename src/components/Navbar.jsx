import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    // GNB 데이터 강제 고정 (Hard-coding)
    const menuItems = [
        { 
            name: '학생 교육', 
            isDropdown: true,
            subItems: [
                { name: '초/중등 기본 SW교육', to: '/edu/basic' },
                { name: '초/중등 심화 SW&Physical 교육', to: '/edu/advanced-physical' },
                { name: '고등 창의융합 심화교육', to: '/edu/high-creative' },
            ]
        },
        { 
            name: '전문가 과정', 
            isDropdown: true,
            subItems: [
                { name: '강사 양성 과정', to: '/pro/instructor' },
                { name: '교원 및 교육기관 교육', to: '/pro/institution' },
            ]
        },
        { name: '해커톤/행사', to: '/event/hackathon' },
        { name: '교육 아카이브', to: '/archive' },
        { name: '조합 소개', to: '/about' },
    ]

    return (
        <header className="bg-white/90 backdrop-blur-lg fixed top-0 w-full z-50 border-b border-gray-100 transition-all duration-300">
            <div className="max-w-[1200px] mx-auto flex justify-between items-center h-20 px-6 lg:px-8">
                {/* 브랜드 로고 및 이름 - 클릭 시 메인(/) 이동 */}
                <Link className="flex items-center hover:opacity-80 transition-opacity" to="/">
                    <img 
                        src={logo} 
                        alt="WEMAKE Logo" 
                        className="h-10 w-auto object-contain" 
                    />
                    <span className="ml-3 text-[22px] font-black text-[#2E4A7B] tracking-tighter uppercase font-manrope">WEMAKE</span>
                </Link>

                {/* 데스크탑 메뉴 */}
                <nav className="hidden md:flex items-center gap-8">
                    {menuItems.map((item, index) => (
                        <div key={index} className="relative group">
                            {item.isDropdown ? (
                                <button className={`text-[15px] font-bold text-[#2E4A7B] hover:text-wemake-green transition-all flex items-center gap-1 py-4`}>
                                    {item.name}
                                    <span className="material-symbols-outlined text-xs">keyboard_arrow_down</span>
                                </button>
                            ) : (
                                <Link 
                                    className={`text-[15px] font-bold text-[#2E4A7B] hover:text-wemake-green transition-all py-4 ${
                                        location.pathname === item.to ? 'border-b-2 border-[#2E4A7B]' : 'hover:border-b-2 hover:border-wemake-green'
                                    }`}
                                    to={item.to}
                                >
                                    {item.name}
                                </Link>
                            )}

                            {/* Dropdown Menu */}
                            {item.isDropdown && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white border border-slate-100 shadow-2xl rounded-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {item.subItems.map((sub, sIndex) => (
                                        <Link 
                                            key={sIndex}
                                            to={sub.to}
                                            className="block px-4 py-3 text-[14px] font-bold text-[#2E4A7B] hover:text-wemake-green hover:bg-slate-50 rounded-xl transition-all"
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <button className="bg-[#2E4A7B] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 active:scale-95 transition-transform shadow-md">
                        시작하기
                    </button>
                </div>

                <button className="md:hidden text-[#2E4A7B] p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
                </button>
            </div>
            
            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-[#2E4A7B]/20 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
                isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`} onClick={() => setIsMenuOpen(false)}>
                <div 
                    className={`fixed right-0 top-0 h-full w-64 bg-white shadow-xl transition-transform duration-300 ease-in-out p-8 ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col gap-6 mt-12">
                        {menuItems.map((item, index) => (
                            <div key={index}>
                                <div className="text-sm font-black text-slate-300 mb-2 uppercase tracking-widest">{item.name}</div>
                                {item.isDropdown ? (
                                    <div className="flex flex-col gap-3 pl-4">
                                        {item.subItems.map((sub, sIndex) => (
                                            <Link key={sIndex} to={sub.to} onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-[#2E4A7B]">
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <Link to={item.to} onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-[#2E4A7B]">
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
