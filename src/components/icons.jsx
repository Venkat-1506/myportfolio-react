const S = {
  stroke: 'currentColor',
  strokeWidth: 1.8,
  fill: 'none',
  viewBox: '0 0 24 24'
}

export function IconGithub({ size }) {
  return (
    <svg viewBox={S.viewBox} width={size} height={size}>
      <path
        d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .26.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"
        stroke={S.stroke}
        strokeWidth={S.strokeWidth}
        fill={S.fill}
      />
    </svg>
  )
}

export function IconLinkedin({ size }) {
  return (
    <svg viewBox={S.viewBox} width={size} height={size}>
      <path
        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"
        stroke={S.stroke}
        strokeWidth={S.strokeWidth}
        fill={S.fill}
      />
      <rect x="2" y="9" width="4" height="12" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
      <circle cx="4" cy="4" r="2" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
    </svg>
  )
}

export function IconLeetCode({ size }) {
  return (
    <svg viewBox={S.viewBox} width={size} height={size}>
      <path
        d="M16.102 16.892c-.165 0-.33-.042-.473-.126l-5.491-3.382c-.217-.133-.356-.367-.356-.618v-2.576c0-.251.139-.485.356-.618l5.491-3.382c.142-.084.307-.126.473-.126.163 0 .327.041.471.125.287.169.461.478.461.81v1.434c0 .251-.138.485-.356.618l-3.178 1.956c-.217.134-.356.367-.356.62s.139.485.356.62l3.178 1.958c.218.133.356.366.356.618v1.434c0 .332-.174.641-.461.81-.144.084-.308.126-.471.126zm5.345-4.892c0 .551-.195 1.092-.578 1.525l-5.686 6.469c-.699.795-1.717 1.276-2.829 1.276h-3.843c-.44 0-.797-.357-.797-.798 0-.44.357-.798.797-.798h3.843c.592 0 1.148-.301 1.488-.805l5.686-6.469c.195-.221.299-.503.299-.799 0-.296-.104-.578-.299-.8l-5.686-6.468c-.34-.504-.896-.806-1.488-.806h-3.843c-.44 0-.797-.358-.797-.799 0-.44.357-.798.797-.798h3.843c1.112 0 2.13.481 2.829 1.276l5.686 6.469c.382.433.578.974.578 1.524z"
        stroke={S.stroke}
        strokeWidth={S.strokeWidth}
        fill={S.fill}
      />
    </svg>
  )
}

export function IconMail({ size }) {
  return (
    <svg viewBox={S.viewBox} width={size} height={size}>
      <path d="M4 6l8 5 8-5M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
    </svg>
  )
}

export function IconInstagram({ size }) {
  return (
    <svg viewBox={S.viewBox} width={size} height={size}>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
      <circle cx="12" cy="12" r="4" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
      <circle cx="17.5" cy="6.5" r="1.5" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
    </svg>
  )
}

export function IconHome({ size }) {
  return (
    <svg viewBox={S.viewBox} width={size} height={size}>
      <path d="M3 12l9-9 9 9" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
      <path d="M5 10v8a2 2 0 002 2h10a2 2 0 002-2v-8" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
    </svg>
  )
}

export function IconAbout({ size }) {
  return (
    <svg viewBox={S.viewBox} width={size} height={size}>
      <circle cx="12" cy="12" r="9" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
      <path d="M12 7v5l3 3" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
    </svg>
  )
}

export function IconProjects({ size }) {
  return (
    <svg viewBox={S.viewBox} width={size} height={size}>
      <rect x="3" y="3" width="7" height="7" rx="1" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
      <rect x="14" y="3" width="7" height="7" rx="1" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
      <rect x="3" y="14" width="7" height="7" rx="1" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
      <rect x="14" y="14" width="7" height="7" rx="1" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
    </svg>
  )
}

export function IconCerts({ size }) {
  return (
    <svg viewBox={S.viewBox} width={size} height={size}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
      <path d="M2 17l10 5 10-5" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
      <path d="M2 12l10 5 10-5" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
    </svg>
  )
}

export function IconResume({ size }) {
  return (
    <svg viewBox={S.viewBox} width={size} height={size}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
      <path d="M14 2v6h6M10 13h4M10 17h4" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
    </svg>
  )
}

export function IconContact({ size }) {
  return (
    <svg viewBox={S.viewBox} width={size} height={size}>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
    </svg>
  )
}

export function IconDownload({ size }) {
  return (
    <svg viewBox={S.viewBox} width={size} height={size}>
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
    </svg>
  )
}

export function IconEye({ size }) {
  return (
    <svg viewBox={S.viewBox} width={size} height={size}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
      <circle cx="12" cy="12" r="3" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
    </svg>
  )
}

export function IconArrowLeft({ size }) {
  return (
    <svg viewBox={S.viewBox} width={size} height={size}>
      <path d="M19 12H5M12 19l-7-7 7-7" stroke={S.stroke} strokeWidth="2" fill={S.fill} />
    </svg>
  )
}

export function IconChevronLeft({ size }) {
  return (
    <svg viewBox={S.viewBox} width={size} height={size}>
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill={S.fill} />
    </svg>
  )
}

export function IconChevronRight({ size }) {
  return (
    <svg viewBox={S.viewBox} width={size} height={size}>
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill={S.fill} />
    </svg>
  )
}

export function IconArrowUp({ size }) {
  return (
    <svg viewBox="0 0 24 24" width={size || 20} height={size || 20}>
      <path d="M18 15l-6-6-6 6" stroke="currentColor" strokeWidth="2" fill={S.fill} />
    </svg>
  )
}

export function IconLocation({ size }) {
  return (
    <svg viewBox={S.viewBox} width={size} height={size}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
      <circle cx="12" cy="10" r="3" stroke={S.stroke} strokeWidth={S.strokeWidth} fill={S.fill} />
    </svg>
  )
}

export function IconPhone({ size }) {
  return (
    <svg viewBox={S.viewBox} width={size} height={size}>
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
        stroke={S.stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={S.fill}
      />
    </svg>
  )
}

export function IconGlobe({ size }) {
  return (
    <svg viewBox={S.viewBox} width={size} height={size}>
      <circle cx="12" cy="12" r="10" stroke={S.stroke} strokeWidth="2" fill={S.fill} />
      <line x1="2" y1="12" x2="22" y2="12" stroke={S.stroke} strokeWidth="2" fill={S.fill} />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke={S.stroke} strokeWidth="2" fill={S.fill} />
    </svg>
  )
}

export function IconInfo() {
  return (
    <svg viewBox={S.viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}

export function IconBarChart() {
  return (
    <svg viewBox={S.viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20V10" />
      <path d="M18 20V4" />
      <path d="M6 20v-4" />
    </svg>
  )
}

export function IconCheck() {
  return (
    <svg viewBox={S.viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

export function IconList() {
  return (
    <svg viewBox={S.viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  )
}

export function IconLayers() {
  return (
    <svg viewBox={S.viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  )
}

export function IconExternal({ size }) {
  return (
    <svg viewBox={S.viewBox} width={size} height={size}>
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="1.8" fill="none" />
    </svg>
  )
}

export const GitHubLogo = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
)
