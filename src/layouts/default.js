import { componentScripts, componentStyles, html } from 'cuirk'
import * as components from '../components/index.js'
import navLinks from '../data/nav.js'
import { linkList } from 'cuirk/components/index.js'
import contact from '../data/contact.js'

const { footer, pageMeta, nav } = components

export default ({ meta, children }) => {
	return html`
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<!-- component styles -->
				${componentStyles(components)}
				<!-- page meta -->
				${pageMeta(meta)}
			</head>
			<body>
				${nav({ links: navLinks })}
				<div class="split">
					<aside>
						<div class="sticky">
							<h3>Striving to Achieve a New Standard of Technical Excellence</h3>
							<p>CedarGroup is a professional services and supply company comprised of business and technology experts. Our mission is to provide quality, state-of-the art solutions and supplies for Government, Business and Consumer needs.</p>
							${linkList(contact)}
						</div>
					</aside>
					<main>
						<div class="container">
							${children}
						</div>
					</main>
				</div>
				${footer({ links: navLinks })}
				<!-- component scripts -->
				${componentScripts(components)}
			</body>
		</html>
	`
}
