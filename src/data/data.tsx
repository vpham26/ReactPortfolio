import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Portfolio',
  description: "Site built with react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Kevin Pham.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Orlando based <strong className="text-stone-100">Full Stack Software Developer</strong>, currently seeking
         <strong className="text-stone-100"> work</strong> to learn and to build modern website and software.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time away from the computer, you can catch me coaching <strong className="text-stone-100">Badminton</strong>, 
         reading <strong className="text-stone-100"> book</strong> while enjoying <strong className="text-stone-100"> coffee</strong>, or exploring great{' '}
        <strong className="text-stone-100"> food places</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Born and raised in Viet Nam, immigrated with my family to United States when I was young. Received my bachelor's degree in History and taught English overseas in Korea for a fewyears until I recently stumpled upon website and software development.`,
  aboutItems: [
    {label: 'Location', text: 'Orlando, FL', Icon: MapIcon},
    {label: 'Age', text: '33', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Vietnamese / Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'Badminton, Pickleball, Games', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Central Florida', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Actively Seeking', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Vietnamese',
        level: 10,
      },
      {
        name: 'Chinese',
        level: 2,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 3,
      },
      {
        name: 'Javascript',
        level: 3,
      },
      {
        name: 'HTML/CSS',
        level: 4,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 4,
      },
      {
        name: 'MongoDB',
        level: 4,
      },
      {
        name: 'SQL',
        level: 4,
      },
    ],
  },
  // {
  //   name: 'Mobile development',
  //   skills: [
  //     {
  //       name: '',
  //       level: ,
  //     },
  //     {
  //       name: '',
  //       level: ,
  //     },
  //     {
  //       name: '',
  //       level: ,
  //     },
  //   ],
  // },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: '.',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: '.',
    url: '',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: '.',
    url: '',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: '.',
    url: '',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: '.',
    url: '',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: '.',
    url: '',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: '.',
    url: '',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: '.',
    url: '',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: '.',
    url: '',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: '.',
    url: '',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: '.',
    url: '',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2022',
    location: '2U Education & UCF Bootcamp',
    title: 'Full Stack Flex Development',
    content: <p>This was my first ever exposure to coding, and it became something that I am really passionate about learning more. The program was rigorous and very fast-paced.</p>,
  },
  {
    date: 'April 2017',
    location: 'University of Central Florida',
    title: 'Bachelors in History',
    content: <p>My degree has very little to do with technology. However, it gave me a lot of tools to use on any frontiers. The ability to research and decipher, obtain necessary information, and apply it.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2021 - August 2022',
    location: 'GPCCert',
    title: 'Information Specialist',
    content: (
      <p>
        Worked as a core member that help put together website, handbook, and exams to certify crane operators. First time exposure to the industry, did researches and studies to put together comprehensive information. 
      </p>
    ),
  },
  {
    date: 'April 2017 - June 2021',
    location: 'Chungdahm English Academy',
    title: 'English Teacher',
    content: (
      <p>
        Worked overseas in South Korea as an English teacher. Taught and facilitated exams for students ranging from the age of four to fourteen. Exposed to some great education technologies.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: '',
      text: '',
      image: '',
    },
    {
      name: '',
      text: '',
      image: '',
    },
    {
      name: '',
      text: '',
      image: '',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Welcome to contact me via Email or Text Msg. But, best way to reach me is to send me a text message. Hope to hear from you soon.',
  items: [
    {
      type: ContactType.Email,
      text: 'kvn.01010000@gmail.com',
      href: 'mailto:kvn.01010000@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Orlando FL, United States',
      href: 'https://www.google.ca/maps/place/Orlando,+FL/@28.4814032,-81.4827468,11z/data=!3m1!4b1!4m5!3m4!1s0x88e773d8fecdbc77:0xac3b2063ca5bf9e!8m2!3d28.5383832!4d-81.3789269',
    },
    {
      type: ContactType.Phone,
      text: '(321) 948-5737',
      href: '',
    },
    {
      type: ContactType.Github,
      text: 'vpham26',
      href: 'https://github.com/vpham26',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/vpham26'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/'},
];
