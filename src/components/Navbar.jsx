import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

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
        { name: '교직원 연수 및 공공기관 수업', to: '/pro/institution' },
      ]
    },
    { name: '특수교육', to: '/special' },
    { name: '해커톤/행사', to: '/event/hackathon' },
    { name: '조합 소개', to: '/about' },
  ]

  return (
    <header className="bg-white/90 backdrop-blur-lg fixed top-0 w-full z-50 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-20 px-6 lg:px-8">
        {/* 로고 */}
        <Link className="flex items-center hover:opacity-80 transition-opacity" to="/">
          <img src={logo} alt="WEMAKE Logo" className="h-10 w-auto object-contain" />
          <span className="ml-3 text-[22px] font-black text-[#2E4A7B] tracking-tighter uppercase">WEMAKE</span>
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.isDropdown ? (
                <>
                  <button className="text-[15px] font-bold text-[#2E4A7B] hover:text-wemake-green transition-all flex items-center gap-1 py-4">
                    {item.name}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-0.5">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {/* 드롭다운 — 왼쪽 정렬 */}
                  <div className="absolute top-full left-0 w-64 bg-white border border-slate-100 shadow-2xl rounded-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                    {item.subItems.map((sub, sIndex) => (
                      <Link
                        key={sIndex}
                        to={sub.to}
                        className={`block px-4 py-3 text-[14px] font-bold rounded-xl transition-all ${
                          location.pathname === sub.to
                            ? 'text-wemake-green bg-slate-50'
                            : 'text-[#2E4A7B] hover:text-wemake-green hover:bg-slate-50'
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.to}
                  className={`text-[15px] font-bold transition-all py-4 ${
                    location.pathname === item.to
                      ? 'text-wemake-green border-b-2 border-wemake-green'
                      : 'text-[#2E4A7B] hover:text-wemake-green hover:border-b-2 hover:border-wemake-green'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="mailto:arkim12345@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2E4A7B] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 active:scale-95 transition-transform shadow-md"
          >
            문의하기
          </a>
        </div>

        {/* 모바일 햄버거 */}
        <button className="md:hidden text-[#2E4A7B] p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {isMenuOpen
              ? <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              : <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            }
          </svg>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`fixed inset-0 bg-[#2E4A7B]/20 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 h-full w-72 bg-white shadow-xl transition-transform duration-300 ease-in-out p-8 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-6 mt-12">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.isDropdown ? (
                  <>
                    <div className="text-xs font-black text-slate-300 mb-2 uppercase tracking-widest">{item.name}</div>
                    <div className="flex flex-col gap-2 pl-3">
                      {item.subItems.map((sub, sIndex) => (
                        <Link
                          key={sIndex}
                          to={sub.to}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-base font-bold text-[#2E4A7B] hover:text-wemake-green transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-bold text-[#2E4A7B] hover:text-wemake-green transition-colors"
                  >
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
