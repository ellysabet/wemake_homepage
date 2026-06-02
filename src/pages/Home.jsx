import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return
    const ctx = cv.getContext('2d')

    const setSize = () => {
      cv.width = cv.offsetWidth
      cv.height = cv.offsetHeight
    }
    setSize()
    window.addEventListener('resize', setSize)

    const W = () => cv.width
    const H = () => cv.height
    const sx = () => cv.width / 800
    const sy = () => cv.height / 500

    const CYAN = '#00E5FF', YELLOW = '#F9C12E'

    const getNodes = () => [
      {x:76,y:20,c:CYAN},{x:200,y:20,c:CYAN},{x:400,y:8,c:CYAN},
      {x:600,y:20,c:CYAN},{x:724,y:8,c:CYAN},
      {x:82,y:32,c:YELLOW},{x:400,y:22,c:YELLOW},{x:718,y:32,c:YELLOW},
      {x:20,y:100,c:CYAN},{x:8,y:250,c:CYAN},{x:20,y:380,c:CYAN},
      {x:32,y:106,c:YELLOW},{x:22,y:250,c:YELLOW},{x:32,y:374,c:YELLOW},
      {x:780,y:100,c:CYAN},{x:792,y:250,c:CYAN},{x:780,y:380,c:CYAN},
      {x:768,y:106,c:YELLOW},{x:778,y:250,c:YELLOW},{x:768,y:374,c:YELLOW},
      {x:76,y:480,c:CYAN},{x:400,y:492,c:CYAN},{x:724,y:480,c:CYAN},
      {x:82,y:468,c:YELLOW},{x:400,y:478,c:YELLOW},{x:718,y:468,c:YELLOW},
    ]

    const getPCBLines = () => [
      {pts:[{x:8,y:8},{x:60,y:8},{x:76,y:20},{x:200,y:20},{x:390,y:20},{x:400,y:8},{x:600,y:8},{x:614,y:20},{x:724,y:8},{x:792,y:8}],c:CYAN,w:1.3,op:0.75},
      {pts:[{x:8,y:8},{x:8,y:90},{x:20,y:100},{x:20,y:250},{x:20,y:370},{x:8,y:380},{x:8,y:492}],c:CYAN,w:1.3,op:0.75},
      {pts:[{x:792,y:8},{x:792,y:90},{x:780,y:100},{x:780,y:250},{x:780,y:370},{x:792,y:380},{x:792,y:492}],c:CYAN,w:1.3,op:0.7},
      {pts:[{x:8,y:492},{x:60,y:492},{x:76,y:480},{x:200,y:480},{x:390,y:480},{x:400,y:492},{x:600,y:492},{x:614,y:480},{x:724,y:480},{x:792,y:492}],c:CYAN,w:1.3,op:0.75},
      {pts:[{x:20,y:20},{x:66,y:20},{x:82,y:32},{x:200,y:32},{x:388,y:32},{x:400,y:22},{x:600,y:22},{x:612,y:32},{x:718,y:32},{x:780,y:20}],c:YELLOW,w:1.0,op:0.6},
      {pts:[{x:20,y:20},{x:20,y:96},{x:32,y:106},{x:32,y:250},{x:32,y:364},{x:20,y:374},{x:20,y:480}],c:YELLOW,w:1.0,op:0.6},
      {pts:[{x:780,y:20},{x:780,y:96},{x:768,y:106},{x:768,y:250},{x:768,y:364},{x:780,y:374},{x:780,y:480}],c:YELLOW,w:1.0,op:0.55},
      {pts:[{x:20,y:480},{x:66,y:480},{x:82,y:468},{x:200,y:468},{x:388,y:468},{x:400,y:478},{x:600,y:478},{x:612,y:468},{x:718,y:468},{x:780,y:480}],c:YELLOW,w:1.0,op:0.6},
    ]

    let nodes = getNodes()
    let pcbLines = getPCBLines()
    let visNodes = [], visNodeSet = new Set()
    let lineProgress = new Array(8).fill(0)
    // phase: 0=노드, 1=선, 2=배지타이핑, 3=타이틀등장, 4=그라데이션, 5=타이틀→로고전환, 6=서브, 7=태그
    let phase = 0
    let nodeTimer = 0, badgeTimer = 0
    let badgeText = '', badgeIdx = 0
    const BADGE = 'CODING & EDUTECH COOPERATIVE'
    let titleAlpha = 0, gradP = 0
    let crossfade = 0  // 0=타이틀, 1=로고
    let subAlpha = 0, tagsAlpha = 0
    let lastT = null

    const logoImg = new Image()
    logoImg.crossOrigin = 'anonymous'
    logoImg.src = 'https://raw.githubusercontent.com/ellysabet/wemake_homepage/main/src/assets/logo.png'

    function drawBg() {
      ctx.fillStyle = '#0A1628'
      ctx.fillRect(0, 0, W(), H())
      const g = ctx.createRadialGradient(W()/2, H()/2, 0, W()/2, H()/2, W()*0.45)
      g.addColorStop(0, 'rgba(29,233,182,0.06)')
      g.addColorStop(1, 'rgba(10,22,40,0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, W(), H())
    }

    function drawNode(n) {
      ctx.save()
      ctx.shadowBlur = 10; ctx.shadowColor = n.c
      ctx.beginPath()
      ctx.arc(n.x * sx(), n.y * sy(), 3, 0, Math.PI * 2)
      ctx.fillStyle = n.c; ctx.fill()
      ctx.restore()
    }

    function drawLine(line, progress) {
      if (progress <= 0) return
      const pts = line.pts
      let segs = [], total = 0
      for (let i = 1; i < pts.length; i++) {
        const d = Math.hypot(pts[i].x - pts[i-1].x, pts[i].y - pts[i-1].y)
        segs.push(d); total += d
      }
      const drawn = total * progress
      let acc = 0
      ctx.save()
      ctx.strokeStyle = line.c; ctx.lineWidth = line.w
      ctx.globalAlpha = line.op
      ctx.shadowBlur = 5; ctx.shadowColor = line.c
      ctx.beginPath()
      ctx.moveTo(pts[0].x * sx(), pts[0].y * sy())
      for (let i = 1; i < pts.length; i++) {
        if (acc + segs[i-1] <= drawn) {
          ctx.lineTo(pts[i].x * sx(), pts[i].y * sy())
          acc += segs[i-1]
        } else {
          const t = (drawn - acc) / segs[i-1]
          ctx.lineTo((pts[i-1].x + (pts[i].x - pts[i-1].x) * t) * sx(),
                     (pts[i-1].y + (pts[i].y - pts[i-1].y) * t) * sy())
          break
        }
      }
      ctx.stroke(); ctx.restore()
    }

    function drawBadge(text, alpha) {
      if (!text || alpha <= 0) return
      const bw = 310, bh = 26
      const bx = W()/2 - bw/2, by = H() * 0.10
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.strokeStyle = '#1DE9B6'; ctx.lineWidth = 1
      ctx.fillStyle = 'rgba(29,233,182,0.08)'
      ctx.beginPath(); ctx.roundRect(bx, by, bw, bh, 13)
      ctx.fill(); ctx.stroke()
      ctx.shadowBlur = 6; ctx.shadowColor = '#1DE9B6'
      ctx.beginPath(); ctx.arc(bx + 15, by + bh/2, 3, 0, Math.PI * 2)
      ctx.fillStyle = '#1DE9B6'; ctx.fill()
      ctx.shadowBlur = 0
      ctx.font = 'bold 10px sans-serif'
      ctx.fillStyle = '#1DE9B6'
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
      ctx.fillText(text, bx + bw/2 + 8, by + bh/2)
      ctx.restore()
    }

    function makeGrad(y) {
      const g = ctx.createLinearGradient(W()/2 - 260, y, W()/2 + 260, y)
      g.addColorStop(0,    '#1565C0')
      g.addColorStop(0.25, '#29B6F6')
      g.addColorStop(0.5,  '#43E97B')
      g.addColorStop(0.75, '#A8E063')
      g.addColorStop(1,    '#F9C12E')
      return g
    }

    function drawTitle(alpha, gp) {
      if (alpha <= 0) return
      const fs = Math.round(72 * sx())
      const y1 = H() * 0.40, y2 = H() * 0.58
      ctx.save()
      ctx.font = `900 ${fs}px sans-serif`
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic'

      // We Make
      ctx.globalAlpha = alpha
      ctx.fillStyle = gp > 0 ? makeGrad(y1) : 'white'
      ctx.fillText('We Make', W()/2, y1)

      // the Future
      ctx.fillStyle = gp > 0 ? makeGrad(y2) : 'white'
      ctx.fillText('the Future', W()/2, y2)
      ctx.restore()
    }

    function drawLogo(alpha) {
      if (alpha <= 0 || !logoImg.complete || !logoImg.naturalWidth) return
      const lw = 340 * sx()
      const lh = lw * (logoImg.naturalHeight / logoImg.naturalWidth)
      const lx = W()/2 - lw/2
      const ly = H() * 0.22
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.drawImage(logoImg, lx, ly, lw, lh)
      // WEMAKE 텍스트
      const fs = Math.round(38 * sx())
      ctx.font = `900 ${fs}px sans-serif`
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic'
      ctx.fillStyle = 'white'
      ctx.shadowBlur = 8; ctx.shadowColor = 'rgba(255,255,255,0.3)'
      ctx.fillText('WEMAKE', W()/2, ly + lh + Math.round(44 * sy()))
      ctx.restore()
    }

    function drawSub(alpha) {
      if (alpha <= 0) return
      ctx.save()
      ctx.globalAlpha = alpha * 0.6
      ctx.fillStyle = 'white'
      ctx.font = `400 ${Math.round(16 * sx())}px sans-serif`
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic'
      ctx.fillText('함께 만들고, 함께 배우며, 함께 미래를 설계합니다.', W()/2, H() * 0.80)
      ctx.restore()
    }

    function drawTags(alpha) {
      if (alpha <= 0) return
      const tags = ['AI', 'SW', 'IoT', 'DATA', 'EDUTECH', 'Physical']
      const tw = 62, th = 22, gap = 8
      const total = tags.length * (tw + gap) - gap
      let tx = W()/2 - total/2
      // PCB 하단 라인(y≈480) 위쪽 안전 위치
      const ty = H() * 0.865
      ctx.save()
      ctx.globalAlpha = alpha
      tags.forEach(tag => {
        ctx.strokeStyle = 'rgba(255,255,255,0.25)'; ctx.lineWidth = 1
        ctx.fillStyle = 'rgba(255,255,255,0.07)'
        ctx.beginPath(); ctx.roundRect(tx, ty, tw, th, 11)
        ctx.fill(); ctx.stroke()
        ctx.fillStyle = 'rgba(255,255,255,0.75)'
        ctx.font = 'bold 9px sans-serif'
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
        ctx.fillText(tag, tx + tw/2, ty + th/2)
        tx += tw + gap
      })
      ctx.restore()
    }

    let rafId
    function frame(ts) {
      if (!lastT) lastT = ts
      const dt = Math.min(ts - lastT, 50)
      lastT = ts

      drawBg()
      visNodes.forEach(i => drawNode(nodes[i]))
      pcbLines.forEach((l, i) => drawLine(l, lineProgress[i]))

      if (phase === 0) {
        nodeTimer += dt
        if (nodeTimer > 80) {
          nodeTimer = 0
          const rem = nodes.map((_,i)=>i).filter(i => !visNodeSet.has(i))
          if (rem.length > 0) {
            const pick = rem[Math.floor(Math.random() * rem.length)]
            visNodes.push(pick); visNodeSet.add(pick)
          } else { phase = 1 }
        }

      } else if (phase === 1) {
        let done = true
        lineProgress = lineProgress.map((p, i) => {
          const sp = i < 4 ? 0.007 : 0.006
          const np = Math.min(1, p + sp * (dt/16))
          if (np < 1) done = false
          return np
        })
        if (done) phase = 2

      } else if (phase === 2) {
        badgeTimer += dt
        if (badgeTimer > 85) {
          badgeTimer = 0
          if (badgeIdx < BADGE.length) {
            badgeIdx++; badgeText = BADGE.slice(0, badgeIdx)
          } else { phase = 3 }
        }
        drawBadge(badgeText, 1)

      } else if (phase === 3) {
        drawBadge(BADGE, 1)
        titleAlpha = Math.min(1, titleAlpha + 0.012 * (dt/16))
        drawTitle(titleAlpha, 0)
        if (titleAlpha >= 1) phase = 4

      } else if (phase === 4) {
        // 그라데이션 서서히 입혀짐
        drawBadge(BADGE, 1)
        gradP = Math.min(1, gradP + 0.008 * (dt/16))
        drawTitle(1, gradP)
        if (gradP >= 1) phase = 5

      } else if (phase === 5) {
        // 타이틀 → 로고 크로스페이드 (매우 천천히)
        drawBadge(BADGE, 1)
        crossfade = Math.min(1, crossfade + 0.006 * (dt/16))
        drawTitle(1 - crossfade, 1)
        drawLogo(crossfade)
        if (crossfade >= 1) phase = 6

      } else if (phase === 6) {
        drawBadge(BADGE, 1)
        drawLogo(1)
        subAlpha = Math.min(1, subAlpha + 0.010 * (dt/16))
        drawSub(subAlpha)
        if (subAlpha >= 1) phase = 7

      } else if (phase === 7) {
        drawBadge(BADGE, 1)
        drawLogo(1)
        drawSub(1)
        tagsAlpha = Math.min(1, tagsAlpha + 0.012 * (dt/16))
        drawTags(tagsAlpha)
      }

      rafId = requestAnimationFrame(frame)
    }

    rafId = requestAnimationFrame(frame)
    return () => {
      window.removeEventListener('resize', setSize)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className="relative w-full overflow-hidden" style={{height:'100vh', minHeight:'600px'}}>
      <canvas ref={canvasRef} style={{width:'100%', height:'100%', display:'block'}} />
      {/* 버튼 — 태그(86.5%) 아래, PCB 라인(96%) 위 */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-4 z-10"
           style={{bottom: '3.5%'}}>
        <Link to="/edu/basic"
          className="bg-wemake-gradient text-white px-10 py-4 rounded-full font-bold shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 text-center whitespace-nowrap">
          서비스 알아보기
        </Link>
        <Link to="/about"
          className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:border-wemake-green hover:text-wemake-green transition-all duration-300 bg-white/5 text-center whitespace-nowrap">
          조합 소개
        </Link>
      </div>
    </section>
  )
}

// ─── 우리가 하는 일 ───────────────────────────────────────────────────────────
const WhatWeDo = () => {
  const services = [
    { icon:'🎓', title:'학생 교육', desc:'초등부터 고등까지, 블록 코딩에서 AI·데이터 사이언스까지 수준별 맞춤 SW 교육을 제공합니다.', link:'/edu/basic', accent:'border-t-[#89B84C]' },
    { icon:'🏫', title:'교원 · 기관 연수', desc:'학교 교사와 교육 기관을 위한 SW·AI 연수 프로그램 및 맞춤형 커리큘럼을 설계합니다.', link:'/pro/institution', accent:'border-t-[#2E4A7B]' },
    { icon:'🚀', title:'캠프 · 해커톤', desc:'창의적 아이디어가 발산되는 해커톤과 몰입형 SW 캠프를 기획부터 현장 운영까지 총괄합니다.', link:'/event/hackathon', accent:'border-t-[#F2C12E]' },
  ]
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest mb-4 border border-navy/10">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight">위메이크가 할 수 있는 것들</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(s => (
            <Link key={s.title} to={s.link}
              className={`group block p-10 rounded-3xl border border-slate-100 border-t-4 ${s.accent} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white`}>
              <div className="text-4xl mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-wemake-green transition-colors">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{s.desc}</p>
              <div className="mt-8 flex items-center gap-1 text-xs font-bold text-slate-300 group-hover:text-wemake-green transition-colors uppercase tracking-widest">
                자세히 보기
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 최근 활동 ────────────────────────────────────────────────────────────────
const RecentActivity = () => (
  <section className="py-28 bg-slate-50/50">
    <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-widest mb-4 border border-navy/10">Activity</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy">최근 활동</h2>
        </div>
        <a href="https://blog.naver.com/wemake26" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-bold text-navy hover:text-wemake-green transition-colors group">
          블로그에서 더 보기
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1,2,3].map(i => (
          <a key={i} href="https://blog.naver.com/wemake26" target="_blank" rel="noopener noreferrer"
            className="group block rounded-3xl overflow-hidden border border-slate-100 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
              <span className="text-slate-200 font-black text-sm uppercase tracking-widest">Coming Soon</span>
            </div>
            <div className="p-6">
              <div className="h-3 bg-slate-100 rounded-full mb-3 w-3/4" />
              <div className="h-3 bg-slate-100 rounded-full mb-2 w-full" />
              <div className="h-3 bg-slate-100 rounded-full w-2/3" />
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-slate-300 group-hover:text-wemake-green transition-colors uppercase tracking-widest">
                블로그에서 보기
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
)

// ─── CTA ─────────────────────────────────────────────────────────────────────
const CallToAction = () => (
  <section className="py-28 bg-[#0A1628] relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage:`linear-gradient(rgba(0,229,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,0.3) 1px,transparent 1px)`,
      backgroundSize:'50px 50px'
    }}/>
    <div className="absolute top-0 right-0 w-96 h-96 bg-wemake-green/10 rounded-full blur-[120px] pointer-events-none"/>
    <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
        함께 미래를 만들어갈<br/>
        <span className="bg-wemake-gradient bg-clip-text text-transparent">파트너를 기다립니다</span>
      </h2>
      <p className="text-white/50 font-medium mb-12 max-w-lg mx-auto leading-relaxed">
        수업 의뢰, 캠프 기획, 강사 연수 등<br/>어떤 협업이든 편하게 연락 주세요.
      </p>
      <a href="mailto:arkim12345@gmail.com" target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-wemake-gradient text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
        문의하기
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 10h14M10 4l7 6-7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  </section>
)

const Home = () => (
  <>
    <Hero />
    <WhatWeDo />
    <RecentActivity />
    <CallToAction />
  </>
)

export default Home
