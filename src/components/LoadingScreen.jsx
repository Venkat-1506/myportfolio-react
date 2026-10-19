import { useEffect, useRef, useState } from 'react'

const LOADING_TEXTS = [
  'Initializing workspace...',
  'Loading assets...',
  'Preparing workspace...',
  'Almost ready...'
]

const ENG_WORDS = [
  'Python', 'Data Engineering', 'Full Stack', 'Machine Learning',
  'SQL', 'React', 'Node.js', 'ETL Pipelines', 'PostgreSQL',
  'JavaScript', 'TypeScript', 'Data Science'
]

const CUR_WORDS = [
  'Explore', 'Create', 'Imagine', 'Design',
  'Sketch', 'Wonder', 'Play', 'Dream',
  'Discover', 'Innovate', 'Build', 'Inspire'
]

const TERMINAL_MSGS = [
  '> system: boot sequence initiated',
  '> kernel: loading modules...',
  '> network: establishing connection...',
  '> display: initializing composer...',
  '> workspace: ready'
]

function generateCodeRain(container) {
  if (!container) return
  const chars = '01'
  for (let c = 0; c < 20; c++) {
    const col = document.createElement('div')
    col.className = 'rain-col'
    let text = ''
    for (let r = 0; r < 30; r++) {
      text += chars[Math.floor(Math.random() * chars.length)] + '\n'
    }
    col.textContent = text
    col.style.animationDelay = `-${Math.random() * 6}s`
    container.appendChild(col)
  }
}

function generateNodeGrid(container) {
  if (!container) return
  const count = 25
  const nodes = []
  for (let i = 0; i < count; i++) {
    const node = document.createElement('div')
    node.className = 'ng-node'
    node.style.left = `${Math.random() * 100}%`
    node.style.top = `${Math.random() * 100}%`
    node.style.animationDelay = `${Math.random() * 3}s`
    node.style.animationDuration = `${2 + Math.random() * 2}s`
    container.appendChild(node)
    nodes.push({ el: node, x: parseFloat(node.style.left), y: parseFloat(node.style.top) })
  }
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x
      const dy = nodes[i].y - nodes[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 30) {
        const line = document.createElement('div')
        line.className = 'ng-line'
        const x1 = nodes[i].x
        const y1 = nodes[i].y
        const x2 = nodes[j].x
        const y2 = nodes[j].y
        const length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))
        line.style.left = `${x1}%`
        line.style.top = `${y1}%`
        line.style.width = `${length}%`
        line.style.transform = `rotate(${(Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI}deg)`
        line.style.animationDelay = `${Math.random() * 3}s`
        line.style.animationDuration = `${2 + Math.random() * 2}s`
        container.appendChild(line)
      }
    }
  }
}

function generateBubbles(container) {
  if (!container) return
  for (let i = 0; i < 6; i++) {
    const bubble = document.createElement('div')
    bubble.className = 'cbubble'
    container.appendChild(bubble)
  }
}

function generateDoodleDots(container) {
  if (!container) return
  for (let i = 0; i < 8; i++) {
    const dot = document.createElement('div')
    dot.className = 'ddot'
    container.appendChild(dot)
  }
}

function generateTerminalBoot(container) {
  if (!container) return
  TERMINAL_MSGS.forEach((msg) => {
    const line = document.createElement('div')
    line.className = 'tline'
    line.textContent = msg
    container.appendChild(line)
  })
}

function generateHexStream(container) {
  if (!container) return
  const hex = '0123456789ABCDEF'
  for (let r = 0; r < 8; r++) {
    const line = document.createElement('div')
    line.className = 'hline'
    let txt = ''
    for (let c = 0; c < 8; c++) {
      txt += hex[Math.floor(Math.random() * 16)] + hex[Math.floor(Math.random() * 16)] + ' '
    }
    line.textContent = txt
    line.style.animationDelay = `${Math.random() * 2}s`
    container.appendChild(line)
  }
}

function generateConfetti(container) {
  if (!container) return
  for (let i = 0; i < 6; i++) {
    const piece = document.createElement('div')
    piece.className = 'cpiece'
    container.appendChild(piece)
  }
}

function generateInkSplash(container) {
  if (!container) return
  const needed = 3 - container.children.length
  for (let i = 0; i < needed; i++) {
    const drop = document.createElement('div')
    drop.className = 'ink-drop'
    container.appendChild(drop)
  }
}

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false)
  const screenRef = useRef(null)

  const codeRainRef = useRef(null)
  const nodeGridRef = useRef(null)
  const terminalBootRef = useRef(null)
  const hexStreamRef = useRef(null)
  const bubblesRef = useRef(null)
  const doodleDotsRef = useRef(null)
  const confettiRef = useRef(null)
  const inkSplashRef = useRef(null)
  const techWordRef = useRef(null)
  const loadingTextRef = useRef(null)
  const pctRef = useRef(null)

  useEffect(() => {
    if (sessionStorage.getItem('visited') === 'true') {
      setHidden(true)
      return
    }

    const mode = document.documentElement.getAttribute('data-mode') || 'engineering'

    const generatedContainers = [
      codeRainRef, nodeGridRef, terminalBootRef, hexStreamRef,
      bubblesRef, doodleDotsRef, confettiRef, inkSplashRef
    ]
    generatedContainers.forEach((r) => {
      if (r.current) r.current.innerHTML = ''
    })

    generateCodeRain(codeRainRef.current)
    if (mode === 'engineering') {
      generateNodeGrid(nodeGridRef.current)
      generateTerminalBoot(terminalBootRef.current)
      generateHexStream(hexStreamRef.current)
    } else {
      generateBubbles(bubblesRef.current)
      generateDoodleDots(doodleDotsRef.current)
      generateConfetti(confettiRef.current)
      generateInkSplash(inkSplashRef.current)
    }

    let val = 0
    const pctInterval = setInterval(() => {
      val += Math.floor(Math.random() * 8) + 2
      if (val > 99) {
        val = 100
        clearInterval(pctInterval)
      }
      if (pctRef.current) pctRef.current.textContent = `${val}%`
    }, 180)

    let textIndex = 0
    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % LOADING_TEXTS.length
      if (loadingTextRef.current) loadingTextRef.current.textContent = LOADING_TEXTS[textIndex]
    }, 500)

    const words = mode === 'curious' ? CUR_WORDS : ENG_WORDS
    let wordIdx = 0
    let charIdx = 0
    let isDeleting = false
    let typeTimer = null
    const type = () => {
      const word = words[wordIdx]
      if (!isDeleting) {
        if (techWordRef.current) techWordRef.current.textContent = word.slice(0, charIdx + 1) + '_'
        charIdx++
        if (charIdx === word.length) {
          isDeleting = true
          typeTimer = setTimeout(type, 1200)
          return
        }
        typeTimer = setTimeout(type, 60 + Math.random() * 80)
      } else {
        if (techWordRef.current) techWordRef.current.textContent = word.slice(0, charIdx) + '_'
        charIdx--
        if (charIdx < 0) {
          isDeleting = false
          charIdx = 0
          wordIdx = (wordIdx + 1) % words.length
          typeTimer = setTimeout(type, 400)
          return
        }
        typeTimer = setTimeout(type, 30 + Math.random() * 40)
      }
    }
    type()

    const finish = setTimeout(() => {
      clearInterval(textInterval)
      clearInterval(pctInterval)
      setHidden(true)
      sessionStorage.setItem('visited', 'true')
    }, 2200)

    return () => {
      clearTimeout(finish)
      clearInterval(textInterval)
      clearInterval(pctInterval)
      if (typeTimer) clearTimeout(typeTimer)
    }
  }, [])

  return (
    <div className={`loading-screen${hidden ? ' hidden' : ''}`} id="loadingScreen" ref={screenRef}>
      <div className="load-bg-grid"></div>
      <div className="load-bg-aurora"></div>
      <div className="load-orb load-orb-1"></div>
      <div className="load-orb load-orb-2"></div>
      <div className="load-code-rain" id="loadCodeRain" ref={codeRainRef}></div>
      <div className="load-scanline"></div>
      <div className="load-eng-elements" id="loadEngElements">
        <div className="load-node-grid" id="loadNodeGrid" ref={nodeGridRef}></div>
        <div className="load-scanner-bar"></div>
        <div className="load-terminal-boot" id="loadTerminalBoot" ref={terminalBootRef}></div>
        <div className="load-hex-stream" id="loadHexStream" ref={hexStreamRef}></div>
        <div className="load-circuit-traces"><span></span><span></span><span></span></div>
      </div>
      <div className="load-curious-elements" id="loadCuriousElements">
        <div className="load-bubbles" id="loadBubbles" ref={bubblesRef}></div>
        <div className="load-doodle-dots" id="loadDoodleDots" ref={doodleDotsRef}></div>
        <div className="load-confetti" id="loadConfetti" ref={confettiRef}></div>
        <div className="load-ink-splash" id="loadInkSplash" ref={inkSplashRef}></div>
      </div>
      <div className="loading-inner">
        <div className="load-logo-wrap">
          <div className="load-logo">&lt;/&gt;</div>
        </div>
        <div className="loading-letters">
          <span className="load-letter">V</span><span className="load-letter">E</span>
          <span className="load-letter">N</span><span className="load-letter">K</span>
          <span className="load-letter">A</span><span className="load-letter">T</span>
        </div>
        <div className="loading-subtitle">Venkatasaarathy <span>R</span></div>
        <div className="load-tech-typewriter">
          <span className="load-tech-prefix">&gt;</span>
          <span className="load-tech-word" id="loadTechWord" ref={techWordRef}>_</span>
        </div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <p className="loading-text" id="loadingText" ref={loadingTextRef}>Initializing workspace...</p>
        <div className="load-pct" id="loadPct" ref={pctRef}></div>
      </div>
    </div>
  )
}
