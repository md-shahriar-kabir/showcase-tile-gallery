import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://showcase-tile-gallery.vercel.app"
})