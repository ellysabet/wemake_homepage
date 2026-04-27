import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-white py-16 px-6 lg:px-8 border-t border-gray-100">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-navy text-sm">
                <div>
                    <span className="text-2xl font-black mb-4 block tracking-tighter uppercase font-bold text-navy">WEMAKE</span>
                    <p className="text-slate-400 font-medium">
                        © 2026 WEMAKE Cooperative. All rights reserved. <br />
                        미래 인재 양성을 위한 최고의 협동조합 교육 플랫폼.
                    </p>
                </div>
                
                <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end items-center font-bold">
                    <Link 
                        className="hover:text-wemake-green transition-colors underline underline-offset-8 decoration-slate-200" 
                        to="/archive"
                    >
                        교육 자료실
                    </Link>
                    <a className="hover:text-wemake-green transition-colors underline underline-offset-8 decoration-slate-200" href="#">테크 리포트</a>
                    <a className="hover:text-wemake-green transition-colors underline underline-offset-8 decoration-slate-200" href="#">이용약관</a>
                    <a className="hover:text-wemake-green transition-colors underline underline-offset-8 decoration-wemake-green/30" href="#">개인정보처리방침</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
