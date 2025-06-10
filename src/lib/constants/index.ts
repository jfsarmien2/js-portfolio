import LinkedinIcon from '@/components/ui/icons/linkedin.astro'
import GithubIcon from '@/components/ui/icons/github.astro'

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'Github',
    icon: GithubIcon,
    url: "https://github.com/jfsarmien2",
  },
  {
    name: 'Linkedin',
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/john-sarmiento-192476345/",
  },
];