import db from "~~/server/dbconfig";

export default defineEventHandler(async(event) => {
    return await db.newsletterSubscription.findMany()
});