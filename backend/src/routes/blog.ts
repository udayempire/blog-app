import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/edge";
import { Hono } from "hono"
import { verify } from "hono/jwt"
import { createBlog,updateBlog } from "@udayempire/blog-common"

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    },
    Variables:{
        userId: string
    }

}>();
//Middleware
blogRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("Authorization") || "" // this ("")means that if user doesnt give any authorization so its becomes undefined so to avoid that we put "" to define it as string. 
    const token = authHeader.split(" ")[1]
    const payload = await verify(token, c.env.JWT_SECRET)
    if (!payload) {
        c.status(401);
        return c.json({ message:"You are not logged in"})

    }
    //@ts-ignore
    c.set('userId',payload.id)
    await next()
})

blogRouter.post("/", async (c) => {
    const body = await c.req.json();
    const success = createBlog.safeParse(body);
    if(!success){
        return c.json({message:"wrong inputs"})
    }
    const userId = c.get("userId")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.blog.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId
        }
    })
    return c.json({
        id: blog.id
    })
})

blogRouter.put("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();
    const success = updateBlog.safeParse(body)
    if(!success){

        return c.json({message:"wrong inputs"})
    }

    const blog = await prisma.blog.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content
        }
    })
    return c.json({
        id: blog.id
    })
})
blogRouter.get("/get/:id", async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const blog = await prisma.blog.findFirst({
            where: {
                id: body.id
            }
        })
        return c.json({
            blog
        })
    }catch(e){
        c.status(411);
        return c.json({
            message:"Error while fetching blog post"
        });
    }
})

blogRouter.get("/bulk", async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const blogs = await prisma.blog.findMany({
            select:{
                title:true,
                content:true,
                id:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        })

    return c.json({
        blogs
    })}catch(e){
        c.status(411);
        return c.json({error:"Error while feching posts,Please Hold for a while"})
    }
})
