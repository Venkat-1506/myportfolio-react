import { useEffect, useRef } from 'react'

const CONNECTION_DIST = 180

const COLORS = {
  engineering: {
    accent: { r: 201, g: 168, b: 124 },
    neutral: { r: 140, g: 136, b: 127 }
  },
  curious: [
    { r: 212, g: 119, b: 74 },
    { r: 242, g: 169, b: 59 },
    { r: 255, g: 107, b: 91 },
    { r: 107, g: 78, b: 142 },
    { r: 232, g: 160, b: 160 },
    { r: 74, g: 158, b: 138 }
  ]
}

export default function useBackgroundCanvas(canvasRef) {
  const instanceRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W
    let H
    let nodes = []
    let animId = null
    let running = true

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    const getMode = () => document.documentElement.getAttribute('data-mode') || 'engineering'

    const createNodes = () => {
      const count = Math.min(50, Math.floor((W * H) / 60000))
      nodes = []
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: 1.5 + Math.random() * 2.5,
          phase: Math.random() * Math.PI * 2,
          type: Math.floor(Math.random() * 4),
          size: 10 + Math.random() * 18
        })
      }
    }

    const drawEngineering = () => {
      const acc = COLORS.engineering

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist >= CONNECTION_DIST) continue

          const alpha = 1 - dist / CONNECTION_DIST

          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = `rgba(${acc.neutral.r}, ${acc.neutral.g}, ${acc.neutral.b}, ${alpha * 0.03})`
          ctx.lineWidth = 0.3
          ctx.stroke()
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${acc.neutral.r}, ${acc.neutral.g}, ${acc.neutral.b}, 0.06)`
        ctx.fill()
      }
    }

    const drawCurious = () => {
      const pal = COLORS.curious
      const time = Date.now()

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        const c = pal[i % 6]

        const pulse = n.size * (0.8 + 0.4 * Math.sin(time / 3000 + n.phase))

        ctx.save()
        ctx.translate(n.x, n.y)
        ctx.rotate(n.phase + time / 5000)
        ctx.globalAlpha = 0.4
        ctx.strokeStyle = `rgba(${c.r}, ${c.g}, ${c.b}, 0.4)`
        ctx.lineWidth = 1.2

        const s = pulse / 2
        const t = n.type % 4
        ctx.beginPath()
        if (t === 0) {
          ctx.arc(0, 0, s, 0, Math.PI * 2)
        } else if (t === 1) {
          ctx.strokeRect(-s, -s, pulse, pulse)
          ctx.restore()
          continue
        } else if (t === 2) {
          ctx.moveTo(0, -s)
          ctx.lineTo(-s, s)
          ctx.lineTo(s, s)
          ctx.closePath()
        } else {
          ctx.moveTo(-s, 0)
          ctx.lineTo(s, 0)
          ctx.moveTo(0, -s)
          ctx.lineTo(0, s)
        }
        ctx.stroke()
        ctx.restore()
      }
    }

    const draw = () => {
      if (!running) return
      ctx.clearRect(0, 0, W, H)

      const mode = getMode()
      const time = Date.now()

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        n.x += n.vx + Math.sin(time / 4000 + n.phase) * 0.08
        n.y += n.vy + Math.cos(time / 5000 + n.phase) * 0.08

        if (n.x < -60) n.x = W + 60
        if (n.x > W + 60) n.x = -60
        if (n.y < -60) n.y = H + 60
        if (n.y > H + 60) n.y = -60
      }

      if (mode === 'engineering') {
        drawEngineering()
      } else {
        drawCurious()
      }

      animId = requestAnimationFrame(draw)
    }

    const onResize = () => {
      resize()
      createNodes()
    }

    resize()
    createNodes()
    draw()

    window.addEventListener('resize', onResize)

    instanceRef.current = () => {
      running = false
      if (animId) {
        cancelAnimationFrame(animId)
        animId = null
      }
      window.removeEventListener('resize', onResize)
    }

    return instanceRef.current
  }, [canvasRef])

  return instanceRef
}
