import { html, loop, scss } from 'cuirk'
import footerImages from '../data/footer.js'
import meta from '../data/meta.js'
import nav from '../data/nav.js'
import { card, cardBody, grid } from './index.js'

const date = new Date().getFullYear()

export const footer = () => html`
	<footer>
		<div class="top">
			${grid({
				children: loop(footerImages, ({ img, subtitle }) =>
					card({
						children: [html`<img src="${img}" />`, cardBody({ subtitle })],
					})
				),
			})}
		</div>
		<div class="bottom">
			<div>
				${loop(nav, ({ href, title }) => html`<a href="${href}">${title}</a>`)}
			</div>
			<small>© ${date} ${meta.title}. All Rights Reserved.</small>
		</div>
	</footer>
`

footer.style = scss`
	footer {
		position: sticky;
		text-align: center;
		top: 100vh;

		.top {
			background: #ddd;
			padding: 1rem;

			.grid {
				margin: 0 auto;
				max-width: 70ch;

				.card {
					img {
						aspect-ratio: 4/3;
						margin: 0 auto;
						object-fit: contain;
						object-position: center;
						width: 90%;
					}
				}
			}
		}
		
		.bottom {
			background: var(--c-primary);
			color: var(--footer-color, white);
			display: grid;
			flex-wrap: wrap;
			gap: 1.5rem;
			justify-content: center;
			padding: 2rem 1rem;

			> div {
				display: flex;
				flex-wrap: wrap;
				gap: 1rem;
				justify-content: center;

				a {
					color: inherit;
					text-decoration: none;

					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}
`
