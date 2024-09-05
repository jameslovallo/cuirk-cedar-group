import { md } from 'cuirk'
import { contactForm, linkList } from '../src/components/index.js'
import contact from '../src/data/contact.js'

export const meta = {
	title: 'Contact Us',
}

export const body = md`
# ${meta.title}

${linkList(contact)}

## Leave a Message

${contactForm()}
`
