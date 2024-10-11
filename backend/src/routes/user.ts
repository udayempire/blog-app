import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/edge";
import { Hono } from "hono";
import { sign } from "hono/jwt"
import { signupInput, signinInput } from "@udayempire/blog-common";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string
    }
}>;


userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const { success } = signupInput.safeParse(body)

    if (!success) {
        // c.status(411),
        return c.json({
            message: "Inputs not correct"
        })
    }
    try {
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
                name:body.name || "Anonymous"
            }
        });
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET)
        return c.json({ jwt })
    } catch (error) {
        console.error("Error during signup:", error)
        return c.status(403)
    }
})

userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const success = signinInput.safeParse(body)
    if (!success) {
        return c.json({ message: "wrong inputs" })
    }
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: body.password
            }
        });
        if (!user) {
            c.status(403);
            return c.json({ error: "user not found" });
        }
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET)
        return c.json({ jwt });
    } catch (error) {
        console.error("Error during signin:", error)
        return c.status(403)
    }
})