import { Resend } from 'resend';
import { EmailTemplate } from "@/app/_components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email } = await req.json();

        if (!name || !email) {
            return Response.json({ error: "Missing name or email" }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: [email],
            subject: 'Hello world',
            react: EmailTemplate({ fullName: name }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ success: true, data });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}
