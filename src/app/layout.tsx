import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";
import { constructMetadata } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = constructMetadata()

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={recursive.className}>
				<Navbar />
				<main className="flex flex-col grainy-light min-h-[calc(100vh-3.5rem-1px)]">
					<div className="flex flex-1 flex-col h-full">
						<Providers>
							{children}
						</Providers>
					</div>
					<Analytics />
					<SpeedInsights />
					<Footer /> 
				</main>
				<Toaster />
			</body>
		</html>
	);
}
