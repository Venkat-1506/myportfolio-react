const symbols = [
  {
    id: 'database',
    body: <path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3M4 6v12c0 1.657 3.582 3 8 3s8-1.343 8-3V6M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3" stroke="currentColor" strokeWidth="1.8" fill="none" />
  },
  {
    id: 'code',
    body: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" fill="none" />
  },
  {
    id: 'brain',
    body: (
      <>
        <path d="M12 4a4 4 0 014 4c0 1.5-.5 2.8-1.5 3.8A4 4 0 0112 20a4 4 0 01-2.5-8.2A4 4 0 0112 4z" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M12 4v16" stroke="currentColor" strokeWidth="1.8" />
      </>
    )
  },
  {
    id: 'pencil',
    body: <path d="M17 3l4 4-13 13H4v-4L17 3z" stroke="currentColor" strokeWidth="1.8" fill="none" />
  },
  {
    id: 'typewriter',
    body: (
      <>
        <rect x="3" y="8" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M8 12h8M6 16h12" stroke="currentColor" strokeWidth="1.8" />
      </>
    )
  },
  {
    id: 'book',
    body: (
      <>
        <path d="M4 6v14a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2z" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M12 4v12" stroke="currentColor" strokeWidth="1.8" />
      </>
    )
  },
  {
    id: 'github',
    body: <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .26.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z" stroke="currentColor" strokeWidth="1.8" fill="none" />
  },
  {
    id: 'linkedin',
    body: (
      <>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.8" fill="none" />
      </>
    )
  },
  {
    id: 'instagram',
    body: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <circle cx="17.5" cy="6.5" r="1.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
      </>
    )
  },
  {
    id: 'mail',
    body: <path d="M4 6l8 5 8-5M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6" stroke="currentColor" strokeWidth="1.8" fill="none" />
  },
  {
    id: 'leetcode',
    body: <path d="M16.102 16.892c-.165 0-.33-.042-.473-.126l-5.491-3.382c-.217-.133-.356-.367-.356-.618v-2.576c0-.251.139-.485.356-.618l5.491-3.382c.142-.084.307-.126.473-.126.163 0 .327.041.471.125.287.169.461.478.461.81v1.434c0 .251-.138.485-.356.618l-3.178 1.956c-.217.134-.356.367-.356.62s.139.485.356.62l3.178 1.958c.218.133.356.366.356.618v1.434c0 .332-.174.641-.461.81-.144.084-.308.126-.471.126zm5.345-4.892c0 .551-.195 1.092-.578 1.525l-5.686 6.469c-.699.795-1.717 1.276-2.829 1.276h-3.843c-.44 0-.797-.357-.797-.798 0-.44.357-.798.797-.798h3.843c.592 0 1.148-.301 1.488-.805l5.686-6.469c.195-.221.299-.503.299-.799 0-.296-.104-.578-.299-.8l-5.686-6.468c-.34-.504-.896-.806-1.488-.806h-3.843c-.44 0-.797-.358-.797-.799 0-.44.357-.798.797-.798h3.843c1.112 0 2.13.481 2.829 1.276l5.686 6.469c.382.433.578.974.578 1.524z" stroke="currentColor" strokeWidth="1.8" fill="none" />
  },
  {
    id: 'compass',
    body: (
      <>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </>
    )
  }
]

export default function SvgSprite() {
  return (
    <div id="ui-svg-sprite" style={{ display: 'none' }} aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg">
        {symbols.map((s) => (
          <symbol key={s.id} id={s.id} viewBox="0 0 24 24">
            {s.body}
          </symbol>
        ))}
      </svg>
    </div>
  )
}
