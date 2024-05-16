import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  	return twMerge(clsx(inputs))
}

export const formatPrice = (price: number, currency: string) => {
	const formatter = new Intl.NumberFormat("en-us", {
		style:"currency",
		currency:currency,
	})

	return formatter.format(price)
}

export const constructMetadata = ({
	title = "CaseCobra - Custom high-quality phone cases",
	description = "create custom high-quality phone cases in seconds",
	image = "/thumbnail.png",
	icons = "/favicon.ico"
}:{
	title?: string
	description?: string
	image?: string
	icons?: string
} = {}): Metadata => {
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			images: [{url:image}]
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
			creator: "@prabeshkunwar12"
		},
		icons,
		metadataBase: new URL('https://case-cobra-henna.vercel.app/')
	}
}