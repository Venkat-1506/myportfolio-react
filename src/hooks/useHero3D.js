import { useEffect } from 'react'

const GOLD = {
  bright: { r: 255, g: 215, b: 0 },
  warm: { r: 244, g: 164, b: 96 },
  rich: { r: 218, g: 165, b: 32 },
  soft: { r: 201, g: 168, b: 124 },
  glow: { r: 255, g: 228, b: 77 }
}

const CURIOUS_COLORS = [
  { r: 212, g: 119, b: 74 },
  { r: 242, g: 169, b: 59 },
  { r: 255, g: 107, b: 91 },
  { r: 107, g: 78, b: 142 },
  { r: 232, g: 160, b: 160 },
  { r: 74, g: 158, b: 138 }
]

const CURIOUS_DARK = [
  { r: 100, g: 80, b: 60 },
  { r: 120, g: 90, b: 70 },
  { r: 80, g: 70, b: 60 }
]

export default function useHero3D(canvasRef, mode) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W = window.innerWidth
    let H = window.innerHeight
    let mouseX = -1000
    let mouseY = -1000
    let mouseInCanvas = false
    let animId = null
    let running = true
    let time = 0

    let stars = []
    let goldParticles = []

    class Star {
      constructor() {
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.size = 0.5 + Math.random() * 1.5
        this.speedX = (Math.random() - 0.5) * 0.1
        this.speedY = (Math.random() - 0.5) * 0.1
        this.opacity = 0.2 + Math.random() * 0.5
        this.twinkleSpeed = 0.5 + Math.random() * 2
        this.twinklePhase = Math.random() * Math.PI * 2
        if (mode === 'curious') {
          this.color = CURIOUS_DARK[Math.floor(Math.random() * CURIOUS_DARK.length)]
        }
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x < 0) this.x += W
        if (this.x > W) this.x -= W
        if (this.y < 0) this.y += H
        if (this.y > H) this.y -= H
      }

      draw() {
        const twinkle = 0.5 + 0.5 * Math.sin(time * this.twinkleSpeed + this.twinklePhase)
        const alpha = this.opacity * twinkle
        if (mode === 'engineering') {
          ctx.fillStyle = 'rgba(255,255,255,' + alpha + ')'
        } else {
          ctx.fillStyle = 'rgba(' + this.color.r + ',' + this.color.g + ',' + this.color.b + ',' + alpha * 0.6 + ')'
        }
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    class GoldParticle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.size = 1.5 + Math.random() * 1.5
        this.glowSize = this.size * 2.5
        this.opacity = 0.2 + Math.random() * 0.25
        this.phase = Math.random() * Math.PI * 2
        this.color =
          mode === 'engineering'
            ? this.randomGold()
            : CURIOUS_COLORS[Math.floor(Math.random() * CURIOUS_COLORS.length)]
        this.driftX = (Math.random() - 0.5) * 0.02
        this.driftY = (Math.random() - 0.5) * 0.02
      }

      randomGold() {
        const golds = [GOLD.bright, GOLD.warm, GOLD.rich, GOLD.soft, GOLD.glow]
        return golds[Math.floor(Math.random() * golds.length)]
      }

      update() {
        this.x += this.vx + Math.sin(time * 0.001 + this.phase) * this.driftX * 10
        this.y += this.vy + Math.cos(time * 0.0012 + this.phase * 1.2) * this.driftY * 10
        if (mouseInCanvas) {
          const dx = this.x - mouseX
          const dy = this.y - mouseY
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 80 && dist > 0) {
            const force = ((80 - dist) / 80) * 1.5
            this.x += (dx / dist) * force
            this.y += (dy / dist) * force
          }
        }
        if (this.x < -50) this.x += W + 100
        if (this.x > W + 50) this.x -= W + 100
        if (this.y < -50) this.y += H + 100
        if (this.y > H + 50) this.y -= H + 100
      }

      getBrightness() {
        if (!mouseInCanvas) return 1
        const dx = this.x - mouseX
        const dy = this.y - mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) return 1 + (1 - dist / 200) * 0.3
        return 1
      }

      draw() {
        const brightness = this.getBrightness()
        const alpha = Math.min(1, this.opacity * brightness)
        const c = this.color
        if (mode === 'engineering') {
          const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.glowSize)
          grad.addColorStop(0, 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + alpha * 0.2 + ')')
          grad.addColorStop(1, 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',0)')
          ctx.fillStyle = grad
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.glowSize, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillStyle = 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + alpha * 0.7 + ')'
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillStyle = 'rgba(255,255,255,' + alpha * 0.2 + ')'
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size * 0.4, 0, Math.PI * 2)
          ctx.fill()
        } else {
          const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.glowSize)
          grad.addColorStop(0, 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + alpha * 0.25 + ')')
          grad.addColorStop(1, 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',0)')
          ctx.fillStyle = grad
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.glowSize, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillStyle = 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + alpha * 0.8 + ')'
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    function initScene() {
      stars = []
      goldParticles = []
      for (let i = 0; i < 120; i++) stars.push(new Star())
      const count = mode === 'engineering' ? 75 : 55
      for (let i = 0; i < count; i++) goldParticles.push(new GoldParticle())
    }

    function drawConnections() {
      if (mode === 'engineering') {
        for (let i = 0; i < goldParticles.length; i++) {
          for (let j = i + 1; j < goldParticles.length; j++) {
            const a = goldParticles[i]
            const b = goldParticles[j]
            const dx = a.x - b.x
            const dy = a.y - b.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist > 180) continue
            let mouseBoost = 1
            if (mouseInCanvas) {
              const midX = (a.x + b.x) / 2
              const midY = (a.y + b.y) / 2
              const mdx = midX - mouseX
              const mdy = midY - mouseY
              const mDist = Math.sqrt(mdx * mdx + mdy * mdy)
              if (mDist < 200) mouseBoost = 1 + (1 - mDist / 200) * 0.8
            }
            const alpha = (1 - dist / 180) * 0.15 * mouseBoost
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = 'rgba(255,215,0,' + alpha + ')'
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      } else {
        for (let i = 0; i < goldParticles.length; i++) {
          for (let j = i + 1; j < goldParticles.length; j++) {
            const a = goldParticles[i]
            const b = goldParticles[j]
            const dx = a.x - b.x
            const dy = a.y - b.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist > 150) continue
            const alpha = (1 - dist / 150) * 0.08
            const mixedR = Math.round((a.color.r + b.color.r) / 2)
            const mixedG = Math.round((a.color.g + b.color.g) / 2)
            const mixedB = Math.round((a.color.b + b.color.b) / 2)
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = 'rgba(' + mixedR + ',' + mixedG + ',' + mixedB + ',' + alpha + ')'
            ctx.lineWidth = 0.4
            ctx.stroke()
          }
        }
      }
    }

    function drawMouseGlow() {
      if (!mouseInCanvas) return
      if (mode === 'engineering') {
        const grad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 250)
        grad.addColorStop(0, 'rgba(255,215,0,0.015)')
        grad.addColorStop(0.3, 'rgba(255,215,0,0.008)')
        grad.addColorStop(1, 'rgba(255,215,0,0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, 250, 0, Math.PI * 2)
        ctx.fill()
      } else {
        const grad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 200)
        grad.addColorStop(0, 'rgba(212,119,74,0.012)')
        grad.addColorStop(1, 'rgba(212,119,74,0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, 200, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function render(timestamp) {
      if (!running) return
      time = timestamp / 1000
      ctx.clearRect(0, 0, W, H)
      for (let i = 0; i < stars.length; i++) {
        stars[i].update()
        stars[i].draw()
      }
      drawConnections()
      for (let i = 0; i < goldParticles.length; i++) {
        goldParticles[i].update()
        goldParticles[i].draw()
      }
      drawMouseGlow()
      animId = requestAnimationFrame(render)
    }

    function resize() {
      const hero = document.getElementById('hero')
      if (hero) {
        const rect = hero.getBoundingClientRect()
        W = rect.width || window.innerWidth
        H = rect.height || window.innerHeight
      } else {
        W = window.innerWidth
        H = window.innerHeight
      }
      if (W < 10 || H < 10) {
        W = window.innerWidth
        H = window.innerHeight
      }
      canvas.width = W
      canvas.height = H
    }

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
      mouseInCanvas = true
    }
    const onMouseLeave = () => {
      mouseInCanvas = false
      mouseX = -1000
      mouseY = -1000
    }
    const onMouseEnter = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
      mouseInCanvas = true
    }
    const onTouchMove = (e) => {
      const touch = e.touches[0]
      const rect = canvas.getBoundingClientRect()
      mouseX = touch.clientX - rect.left
      mouseY = touch.clientY - rect.top
      mouseInCanvas = true
    }
    const onTouchEnd = () => {
      mouseInCanvas = false
    }

    let resizeTimer
    const onWindowResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(resize, 150)
    }

    let resizeObserver = null
    const heroEl = document.getElementById('hero')
    if (heroEl && window.ResizeObserver) {
      resizeObserver = new ResizeObserver(resize)
      resizeObserver.observe(heroEl)
    }

    resize()
    initScene()
    render(0)

    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)
    canvas.addEventListener('mouseenter', onMouseEnter)
    canvas.addEventListener('touchmove', onTouchMove, { passive: true })
    canvas.addEventListener('touchend', onTouchEnd)
    window.addEventListener('resize', onWindowResize)

    return () => {
      running = false
      if (animId) cancelAnimationFrame(animId)
      if (resizeObserver) resizeObserver.disconnect()
      clearTimeout(resizeTimer)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
      canvas.removeEventListener('mouseenter', onMouseEnter)
      canvas.removeEventListener('touchmove', onTouchMove)
      canvas.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('resize', onWindowResize)
    }
  }, [canvasRef, mode])
}
