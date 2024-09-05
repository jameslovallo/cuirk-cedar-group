import { html, loop, md } from 'cuirk'
import { card, cardBody, grid, linkList } from '../src/components/index.js'
import education from '../src/data/education.js'
import naicsCodes from '../src/data/naics-codes.js'

export const meta = {
	title: 'About Us',
}

export const body = md`
# ${meta.title}

Anthony Franklin, M.S. creator of CedarGroup is a Supplier / Technologist / IT professional with over 20 years of industry experience (Telecommunications, Customer Service, Sales, IT and Automotive Test Driving). Franklin is a member of Global Empowerment where he is actively being mentored and trained as a Diverse Supplier. This program’s mission is designed to develop and train entrepreneurs to be national and international suppliers.

Franklin has a strong background in implementation of multiple network infrastructure projects (Wide and Local Area Networking). Franklin’s Technical Energy summary includes Power Management, Solar, Wind and Batteries. Franklin has a strong background collaborating between users, management, vendors, suppliers, and technologists to determine needs and requirements.

Franklin attended Ohio Institute of Technology where he graduated with a Bachelor of Science degree in Electronic Engineering Technology. He then graduated from The University of Detroit with a Master of Science degree in Computer Information Systems. In addition, Franklin received a Graduate Certificate in Alternative Energy Technology and a Master of Science in Engineering Technology from Wayne State University.

Franklin was chosen to participate in the Experience IT Detroit initiative where he completed the Software Development in Test/Java program.

## CedarGroup Facts

We are proud to provide a host of services to our valued customers. A list of NAICS and Product & Service Codes provided in the table below for your convenience and reference. If you are interested in partnering with us in the future, please contact us at cedargroup@comcast.net.

**Cage Code:** 8H2H3

**Duns Number:** 117394488

## NAICS Codes

${linkList(naicsCodes)}

## Education and Certification

${grid({
	children: loop(
		education,
		({ title, img }) => html`
			<a href="${img}" target="_blank">
				${card({
					children: [html`<img src="${img}" />`, cardBody({ subtitle: title })],
					href: img,
				})}
			</a>
		`
	),
})}

<style>
	a:has(.card) {
		text-decoration: none;
	}
</style>
`
