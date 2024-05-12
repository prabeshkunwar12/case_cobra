//because tw doesn't support dynamic assignment by default, we comment it and it works.
// bg-zinc-950 border-zinc-950
// bg-blue-950 border-blue-950

import { PRODUCT_PRICES } from "@/config/product"

// bg-rose-950 border-rose-950
export const COLORS = [
    {
        label: "Black",
        value:"black",
        tw:"zinc-950",
    },
    {
        label: "Blue",
        value:"blue",
        tw:"blue-950",
    },
    {
        label: "Rose",
        value:"rose",
        tw:"rose-950",
    },
] as const

export const MODELS = {
    name: "models",
    options: [
        {
            label: "iPhone x",
            value: "iphonex"
        },
        {
            label: "iPhone 11",
            value: "iphone11"
        },
        {
            label: "iPhone 12",
            value: "iphone12"
        },
        {
            label: "iPhone 13",
            value: "iphone13"
        },
        {
            label: "iPhone 14",
            value: "iphone14"
        },
        {
            label: "iPhone 15",
            value: "iphone15"
        },
    ]
} as const

export const MATERIALS = {
    name : "materials",
    options : [
        {
            label: "Silicone",
            value: "silicone",
            description: undefined,
            price: PRODUCT_PRICES.material.silicone,
        },
        {
            label: "Soft Polycarbonate",
            value: "polycarbonate",
            description: "Scratch resistant coating",
            price: PRODUCT_PRICES.material.polycarbonate,
        }
    ]
} as const

export const FINISHES = {
    name : "finishes",
    options : [
        {
            label: "Smooth",
            value: "smooth",
            description: undefined,
            price: PRODUCT_PRICES.finish.smooth,
        },
        {
            label: "Textured Finish",
            value: "textured",
            description: "Soft Grippy texture",
            price: PRODUCT_PRICES.finish.textured,
        }
    ]
} as const
