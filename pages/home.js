import { md } from "cuirk";

export const meta = {
  title: "Home",
};

export const body = md`
![CedarGroup Technologies](/src/images/banner.svg)

# Services

## Supplies

We provide quality supplies for Government, Business, and Consumer needs. You give us your specifications and requirements and we will provide top quality products to meet your every needs.

## Project Management

We prepare complex reports concerning overall plans, activities, and performance levels for submission to C-level executives and Senior Project Managers. We will maintain up-to-date project status information and are responsible for updating all databases of completed jobs.

## Project Rollouts / Implementations

We oversee the implementation of selected contracts, monitor contract compliance and provide recommendation on contract renewals. Perform final inspection of system installations, enforce adherence to design plans and insure completion of all punch list items.

## Software Testing & Support

Responsible for the implementation, testing and support of software products.

## Niche Technical Services

Anything technical you don’t want to do yourself, including “Night Watch Services” (8:00pm to 6:00am)!

<style>
	p:has(img) {
		margin-bottom: 3rem;
	}

	p > img {
		border-bottom: 0.25rem solid var(--c-primary);
	}

	@media (min-width: 1200px) {
		p:has(img) {
			margin: 0 -3rem 3rem;
		}
	}
</style>
`;
