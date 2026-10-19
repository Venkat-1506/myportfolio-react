import data, { EMAIL } from '../data/portfolioData'
import { IconGithub, IconLinkedin, IconLeetCode, IconMail } from './icons'

const ITEMS = [
  { platform: 'github', url: data.social.github, label: 'GitHub', Icon: IconGithub },
  { platform: 'linkedin', url: data.social.linkedin, label: 'LinkedIn', Icon: IconLinkedin },
  { platform: 'leetcode', url: data.social.leetcode, label: 'LeetCode', Icon: IconLeetCode },
  { platform: 'mail', url: `mailto:${EMAIL}`, label: 'Email', Icon: IconMail }
]

export default function MobileSocialStrip() {
  return (
    <div className="mobile-social-strip" id="mobileSocialStrip">
      {ITEMS.map(({ platform, url, label, Icon }) => (
        <a key={platform} href={url} target={platform === 'mail' ? undefined : '_blank'} rel="noopener" aria-label={label}>
          <Icon size={20} />
        </a>
      ))}
    </div>
  )
}
