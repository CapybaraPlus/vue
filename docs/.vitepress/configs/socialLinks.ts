type SocialLinkItem = {
  icon: string
  link: string
}

const useSocialLinks = (): SocialLinkItem[] => {
  return [
    { icon: 'github', link: 'https://github.com/Ranaran315/capybara-ui.git' },
  ]
}

export const socialLinks = useSocialLinks() as any
