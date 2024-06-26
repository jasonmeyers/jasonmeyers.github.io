import religionLogo from '../../public/work/marks/religion-logo.svg';
import religionMark from '../../public/work/marks/religion-studio-logo.svg';
import religionImage from '../../public/work/religion-studio-1.png';
import religionContact from '../../public/work/religion-contact.png';

import anzenLogo from '../../public/work/marks/anzen-logo.png';
import anzenDashboard from '../../public/work/screenshots/anzen-dashboard.png';
import anzenMarketing from '../../public/work/screenshots/anzen-marketing-screen.png';
import anzenMarketingTwo from '../../public/work/screenshots/anzen-marketing.png';

import ssncLogo from '../../public/work/marks/ssnc-logo.png';
import appleLogo from '../../public/work/marks/apple-logo.png';

import stateFarmLogo from '../../public/work/marks/state-farm-logo.png';
import hiRoadLogo from '../../public/work/marks/hiroad-logo.svg';

import hiRoadOne from '../../public/work/screenshots/hiroad-brand-essence.png';
import hiRoadTwo from '../../public/work/screenshots/hiroad-brand-identity.png';
import hiRoadThree from '../../public/work/screenshots/hiroad-brand-language.png';
import hiRoadFour from '../../public/work/screenshots/hiroad-marketing-version2.png';

import ellucianLogo from '../../public/work/marks/ellucian-logo.svg';
import ellucianTwo from '../../public/work/screenshots/ellucian.jpeg';
import ellucianThree from '../../public/work/screenshots/ellucian-four.jpg';

import businessWireLogo from '../../public/work/marks/business-wire-logo.png';
import businessWire from '../../public/work/screenshots/business-wire.png';

import adventOne from '../../public/work/screenshots/advent-small.png';
import adventTwo from '../../public/work/screenshots/advent-medium.png';
import adventThree from '../../public/work/screenshots/advent-large.png';
import adventFour from '../../public/work/screenshots/advent-xlarge.png';

import appleOne from '../../public/work/screenshots/apple-one.png';
import appleTwo from '../../public/work/screenshots/apple-one-two.png';
import appleThree from '../../public/work/screenshots/apple-tv.png';
import appleFour from '../../public/work/screenshots/apple-tv-two.png';
import appleFive from '../../public/work/screenshots/apple-tv-tw.png';
import appleSix from '../../public/work/screenshots/apple-tv-ru.png';

import tolleson from '../../public/work/marks/tolleson.png';
import clockFour from '../../public/work/marks/clockfour.jpg';

export const fullName = 'Jason Meyers';

export const experience = [
  {
    company: 'SS&C/Advent',
    logo: ssncLogo,
    year: '2022-2023',
    role: 'UI Engineer',
    products: ['Advent Genesis', 'Advent Design System'],
    description:
      'I built a comprehensive design system, for a rollout to a portfolio of 20+ standalone applications, in Lit+Web Components to support React/Angular/Lit',

    url: 'https://www.advent.com/solutions/advent-genesis/',
    keywords: [
      'Advent Genesis Portfolio Management Tool',
      'design system',
      'engineering',
      'react',
      'web components'
    ],
    work: [
      {
        imagedescription:
          'Smallest large-screen capture of dashboard, ideally small-desktop',
        image: adventOne
      },
      {
        imagedescription:
          'Medium-small, data-dense, large-screen capture of dashboard, ideally for average desktop',
        image: adventTwo
      },
      {
        imagedescription:
          'Large large-screen capture of dashboard, ideally for desktop',
        image: adventThree
      },
      {
        imagedescription:
          'Extra-large screen capture of Genesis X dashboard, for widest screens',
        image: adventFour
      }
    ]
  },
  {
    company: 'Religion Studio',
    logo: religionMark,
    role: 'React Developer',
    products: ['Studio Website'],
    description:
      'I was approached by Religion to create a boutique interactive experience, which highlights their cutting-edge approach to design. ',
    year: '2022-2023',
    url: 'https://www.religion.studio/',
    keywords: ['marketing', 'UX', 'React JS', 'product management'],
    work: [
      {
        imagedescription: '',
        image: religionImage
      },
      {
        imagedescription: '',
        image: religionContact
      }
    ]
  },
  {
    company: 'Anzen Professional Insurance',
    logo: anzenLogo,
    year: '2021-2022',
    products: [],
    role: 'UI Engineer',
    description: [
      'Developed a design system, dashboard, onboarding checklist, customer acquisition flows, and marketing site in NextJS/React/Redux/Emotion, both as a developer and as a producer.'
    ],
    url: 'https://www.anzen.com/',
    keywords: ['marketing', 'e-commerce', 'design system'],
    work: [
      {
        imagedescription: '',
        image: anzenDashboard
      },
      {
        imagedescription: '',
        image: anzenMarketing
      },
      {
        imagedescription: '',
        image: anzenMarketingTwo
      }
    ]
  },
  {
    company: 'Apple + Rosewood Creative',
    logo: appleLogo,
    role: 'Frontend Dev',
    products: ['Apple TV+', 'Apple One'],
    description: `Built responsive website for AppleTV+, in 34 languages.
      Built and tested a responsive templating engine for Apple One.
       (partner: Rosewood Creative)`,
    year: '2021',
    url: 'https://tv.apple.com/',
    keywords: ['marketing', 'e-commerce'],
    work: [
      {
        imagedescription: '',
        image: appleOne
      },
      {
        imagedescription: '',
        image: appleTwo
      },
      {
        imagedescription: '',
        image: appleThree
      },
      {
        imagedescription: '',
        image: appleFour
      },
      {
        imagedescription: '',
        image: appleFive
      },
      {
        imagedescription: '',
        image: appleSix
      }
    ]
  },
  {
    company: 'HiRoad + State Farm',
    logo: hiRoadLogo,
    role: 'Design Engineer',
    products: [
      'HiRoad insurance platform',
      'HiRoad Brand Portal',
      'Quote and Onboarding flows',
      'Customer Care Portal',
      'Landing Pages'
    ],
    description:
      'Built responsive website for AppleTV+, in 34 languages, for Apple (via Rosewood Creative)',
    year: '2016-2020',
    url: 'https://www.hiroad.com/',
    keywords: ['marketing', 'e-commerce'],
    work: [
      {
        imagedescription: '',
        image: hiRoadOne
      },
      {
        imagedescription: '',
        image: hiRoadTwo
      },
      {
        imagedescription: '',
        image: hiRoadThree
      },
      {
        imagedescription: '',
        image: hiRoadFour
      }
    ]
  },
  {
    company: 'Ellucian',
    role: 'FE Developer',
    logo: ellucianLogo,
    products: ['Brainstorm LMS'],
    description: 'Built product features with PM, CSS',
    year: '2015',
    url: 'https://www.ellucian.com/',
    keywords: ['education', 'LMS'],
    work: [
      {
        imagedescription: '',
        image: ellucianTwo
      },
      {
        imagedescription: '',
        image: ellucianThree
      }
    ]
  },
  {
    company: 'Business Wire',
    url: 'https://www.businesswire.com/',
    work: [
      {
        imagedescription: '',
        image: businessWire
      }
    ],
    role: 'FE Developer',
    logo: businessWireLogo,
    products: [
      'Marketing Site',
      'Registration flow',
      'Press Release product',
      'Onboarding tools and flow',
      'Press Release Authoring tooling and UI'
    ],
    description:
      'Built and optimized templates/views used by 2.4M documents @ 3.1M views/month. Built and optimized responsive templates on top of Business Wire’s J2EE order-entry stack. Led product feature ideation and prototyping for order-entry flows. Set site and institutional standards for markup, design and CSS.',
    year: '2013-2015',
    keywords: ['marketing', 'publishing']
  },
  {
    company: 'Tolleson',
    url: 'https://www.tolleson.com/',
    role: 'FE Developer',
    logo: tolleson,
    products: ['Velvetwire'],
    description:
      'Built a dynamic, video-based frontend for a consumer electronics brand on top of Drupal',
    year: '2013',
    keywords: ['marketing', 'publishing']
  },
  {
    company: 'Clock Four',
    url: 'https://www.tolleson.com/',
    role: 'FE Developer',
    logo: clockFour,
    products: ['Corona', 'Atmel', 'Capital One'],
    description:
      'Built a dynamic, video-based frontend for a consumer electronics brand on top of Drupal',
    year: '2010-2011',
    keywords: ['marketing', 'publishing']
  }
];
