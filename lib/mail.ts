import nodemailer from 'nodemailer';

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;
    const {SMTP_MAIL, SMTP_PASSWORD} = process.env;

    const transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: SMTP_MAIL,
            pass: SMTP_PASSWORD,
        },
    });
    try {
        const testResult = await transport.verify();
        console.log(testResult)
    } catch (error) {
        console.error(error)
    }

    try {
        const sendResult = await transport.sendMail({
            from: SMTP_MAIL,
            to: email,
            subject: "Confirm your email",
            html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
        })
    } catch (error) {
        console.error(error)
    } 
}

