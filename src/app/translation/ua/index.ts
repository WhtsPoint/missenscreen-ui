import contactUsModal from './contact-us-modal'
import privacyPolicy from './privacy-policy'
import contactUs from './contact-us'
import services from './services'
import pages from './pages'
import blogs from './blogs'
import footer from './footer'
import header from './header'
import main from './main'
import terms from './terms'
import enTranslation from '../en'

const translation = {
    ...pages,
    ...blogs,
    ...contactUs,
    ...contactUsModal,
    ...footer,
    ...header,
    ...main,
    ...privacyPolicy,
    ...services,
    ...terms
} satisfies typeof enTranslation


export default translation