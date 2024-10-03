import { Hono } from 'hono';
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt';
const app = new Hono();
app.post('/api/v1/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    try {
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password
            }
        });
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({ jwt });
    }
    catch (error) {
        console.error("Error during signup:", error);
        return c.status(403);
    }
});
app.post('/api/v1/signin', (c) => {
    return c.text("hello world");
});
app.post('/api/v1/blog', (c) => {
    return c.text("Hello world");
});
app.put("api/v1/blog", (c) => {
    return c.text("Helo world");
});
app.get("api/v1/blog/:id", (c) => {
    return c.text("Hellow World");
});
export default app;
