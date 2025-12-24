"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Variants, motion} from "framer-motion";

const deals = [
	{
		title: "Matcha Madness",
		price: "₱199",
		image: "/images/deals/image38.png",
		id: "matcha-madness",
	},
	{
		title: "Matcha Lovers Pack (2 Drinks)",
		price: "₱250",
		image: "/images/deals/image39.png",
		id: "matcha-pack",
	},
	{
		title: "New Caramel Coffee",
		price: "₱120",
		image: "/images/deals/image40.png",
		id: "caramel-coffee",
	},
]

export default function DealsPanel( {} ) {
	return (
		<motion.section
			initial={{ opacity : 0 , y : 100}}
			whileInView={{ opacity : 1 , y : 0}}
			transition={{ duration : 1 , ease : "easeInOut" }}
			viewport={{ once: true, amount : 0.5 }}
    >
			<section className="deals-panel w-full max-w-6xl px-6">
				<div className="deals-header">
					<h3>Our Deals</h3>
					<p className="deals-sub">
						Limited-time offers crafted for night owls — grab them while they&apos;re hot.
					</p>
				</div>

				<div className="deals-grid">
					{deals.map((d) => (
						<article key={d.id} className="deal-card">
							<div className="deal-media">
								<Image
									src={d.image}
									alt={d.title}
									fill
									style={{ objectFit: "cover" }}
								/>
								<div className="media-gradient" />
							</div>

							<div className="deal-body">
								<div className="deal-info">
									<h4 className="deal-name">{d.title}</h4>
									<span className="deal-price">{d.price}</span>
								</div>

								<div className="deal-actions">
									<Link href={`/deals/${d.id}`} className="deal-cta" style={{ color : "var(--color-coffee-medium)"}}>
										Details
									</Link>
									<button
										className="deal-add"
										aria-label={`Add ${d.title} to cart`}
										style={{ color : "var(--color-text)" }}
									>
										Add to Cart
									</button>
								</div>
							</div>
						</article>
					))}
				</div>

				<style jsx>{`
					.deals-header {
						display: flex;
						flex-direction: column;
						align-items: center;
						gap: 6px;
						margin-bottom: 18px;
						text-align: center;
					}
					.deals-header h3 {
						font-family: var(--font-Cinzel);
						color: var(--color-coffee-medium);
						font-size: 4rem;
						margin: 0;
					}
					.deals-sub {
						color: rgba(235, 230, 223, 0.75);
						font-size: 0.95rem;
						margin: 0;
						max-width: 820px;
					}

					.deals-grid {
						display: grid;
						grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
						gap: 20px;
					}

					.deal-card {
						background: linear-gradient(
							180deg,
							rgba(14, 12, 11, 0.36),
							rgba(10, 9, 9, 0.45)
						);
						border: 1px solid rgba(202, 167, 123, 0.06);
						border-radius: 14px;
						overflow: hidden;
						display: flex;
						flex-direction: column;
						min-height: 320px;
						box-shadow: 0 14px 36px rgba(0, 0, 0, 0.6);
						backdrop-filter: blur(6px);
						transition:
							transform 0.16s ease,
							box-shadow 0.16s ease;
					}
					.deal-card:hover {
						transform: translateY(-6px);
						box-shadow: 0 28px 64px rgba(0, 0, 0, 0.75);
					}

					.deal-media {
						position: relative;
						height: 180px;
					}
					.media-gradient {
						position: absolute;
						inset: 0;
						background: linear-gradient(
							180deg,
							rgba(0, 0, 0, 0.0),
							rgba(0, 0, 0, 0.5)
						);
					}

					.deal-body {
						padding: 14px;
						display: flex;
						flex-direction: column;
						gap: 12px;
						justify-content: space-between;
						color: var(--color-coffee-light);
					}
					.deal-info {
						display: flex;
						justify-content: space-between;
						align-items: center;
						gap: 12px;
					}
					.deal-name {
						margin: 0;
						font-weight: 700;
						color: #efe9e1;
						font-size: 1rem;
					}
					.deal-price {
						background: rgba(202, 167, 123, 0.12);
						color: var(--color-coffee-medium);
						padding: 6px 10px;
						border-radius: 8px;
						font-weight: 700;
					}

					.deal-actions {
						display: flex;
						gap: 10px;
						justify-content: flex-end;
						align-items: center;
						gap : 110px;
					}
					.deal-cta {
						background: transparent;
						border: 1px solid rgba(202, 167, 123, 0.16);
						color: var(--color-coffee-medium);
						padding: 8px 10px;
						border-radius: 8px;
						text-decoration: none;
						font-weight: 600;
					}
					.deal-add {
						background: var(--color-coffee-medium);
						color: #111;
						padding: 8px 12px;
						border-radius: 8px;
						border: none;
						cursor: pointer;
						font-weight: 700;
					}

					@media (max-width: 640px) {
						.deal-media {
							height: 140px;
						}
						.deals-header h3 {
							font-size: 2rem;
						}
					}
				`}</style>
			</section>
		</motion.section>
	)
}