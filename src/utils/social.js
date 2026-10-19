export function getSocialLinks(social) {
  return [
    { platform: 'github', url: social.github, label: 'GitHub' },
    { platform: 'linkedin', url: social.linkedin, label: 'LinkedIn' },
    { platform: 'instagram', url: social.instagram, label: 'Instagram' },
    { platform: 'leetcode', url: social.leetcode, label: 'LeetCode' },
    { platform: 'mail', url: `mailto:${social.mail}`, label: 'Email' }
  ].filter((l) => l.url)
}

export function avatarForMode(mode) {
  return mode === 'curious'
    ? '/assets/profile/colorful-sketch.png'
    : '/assets/profile/sketch-photo.png'
}
