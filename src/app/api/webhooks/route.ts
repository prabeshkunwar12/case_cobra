import { stripe } from "@/lib/stripe"
import { headers } from "next/headers"
import Stripe from "stripe"

export async function POST(req: Request){
    try {
        const body = await req.text()
        const signature = headers().get("stripe-signature")

        if(!signature) {
            return new Response('Invalid signature', { status: 400 })
        }

        const event = stripe.webhooks.constructEvent(
            body, 
            signature, 
            process.env.STRIPE_WEBHOOK_SECRET!
        )

        if(event.type === 'checkout.session.completed') {
            if(!event.data.object.customer_details?.email) {
                throw new Error('Missing user email')
            }
        }

        const session = event.data.object as Stripe.Checkout.Session

        const {}
    } catch (err) {

    }
}