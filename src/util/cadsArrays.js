 import adobe from '../assets/logos/adobe.svg'
 import asana from '../assets/logos/asana.svg'
 import github from '../assets/logos/github.svg'
 import stripe from '../assets/logos/stripe.svg'
 import hubspot from '../assets/logos/hubspot.svg'
 import gumroad from '../assets/logos/gumroad.svg'
 import falImage from '../assets/images/licensesImages/fal-image.png'
 import ejar from '../assets/images/licensesImages/ejar-image.png'
 import rega from '../assets/images/licensesImages/regar-image.png'
 import firstImage from '../assets/images/servirses-images/image 1.png'
 import secondImage from '../assets/images/servirses-images/image 2.png'
 import thirdImage from '../assets/images/servirses-images/image 3.png'
import { delay } from 'framer-motion'



 
 
 
 export const customersLogo = [{logo: gumroad}, {logo: asana},  {logo: github}, {logo: hubspot}, {logo: stripe}, {logo: adobe}]
 export const companies = [{title: 'رخصة فال للتسويق العقاري', img: falImage, variants: {initial:{z:-100, scale: 0.5,  opacity:0}, whileInView: {z:0, scale: 1, opacity: 1}, transition: {duration: 0.5, delay: 0.2, ease: 'easeOut', type: 'spring', stiffness: 50, damping:12},  }, viewport: {once: true, amount: 0.4} },{title: 'منصة اجار', img: ejar, variants: {initial:{x:100,  opacity:0}, whileInView: {x:0, opacity: 1}, transition: {duration: 0.5, delay: .2, ease: 'easeInOut', type: 'spring', stiffness: 50, damping:12},  }, viewport: {once: true, amount: 0.4} },{title: 'الهيئة العامة للعقار', img: rega, variants: {initial:{x:-100,  opacity:0}, whileInView: {x:0, opacity: 1}, transition: {duration: 0.5, delay: .2, ease: 'easeInOut', type: 'spring', stiffness: 50, damping:12}, },  viewport: {once: true, amount: 0.4} }] 
 export const servirses = [{
  headline: 'التطوير العقاري', paragraph: 'استثمار في المستقبل! حلول مبتكرة مشاريع متميزة ترتقي بأسلوب الحياة وتحقق عوائد استثنائية.', logoImage: firstImage , variants: {initial:{
    opacity: 0,
    rotateY: 90,
    x: -50,
    scale: 0.9
  },
  whileInView: {
    opacity: 1,
    rotateY: 0,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      ease: "easeInOut",
      stiffness: 60,
      damping: 12,
      duration: 0.6,
      delay : 0.3
    },
  }
 }, viewport: { once: true, amount: 0.4 }  },
     {headline:'إدارة الممتلكات', paragraph: 'إدارة الممتلكات باحترافية عالية! حلول شاملة تضمن الحفاظ على قيمتك الاستثمارية وتعزز راحتك.', logoImage: secondImage, variants: {initial:{
    opacity: 0,
    rotateY: 90,
    x: -50,
    scale: 0.9
  },
  whileInView: {
    opacity: 1,
    rotateY: 0,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      ease: "easeInOut",
      stiffness: 60,
      damping: 12,
      duration: 0.6,
      delay : 0.3
    },
  }
 }, viewport: { once: true, amount: 0.4 } }, 
     {headline:'تسويق  العقارات', paragraph: 'تسويق العقارات بفن وإبداع! استراتيجيات مبتكرة للوصول إلى العملاء المناسبين وتحقيق أفضل العوائد.', logoImage: thirdImage, variants: {initial:{
    opacity: 0,
    rotateY: 90,
    x: -50,
    scale: 0.9
  },
  whileInView: {
    opacity: 1,
    rotateY: 0,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      ease: "easeInOut",
      stiffness: 60,
      damping: 12,
      delay : 0.3,
      duration: 0.6,
    },
  }
 }, viewport: { once: true, amount: 0.4 } },
     
     ]


 

