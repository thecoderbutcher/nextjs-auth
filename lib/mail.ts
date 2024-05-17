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
    /* try {
        const testResult = await transport.verify();
        console.log(testResult);
    } catch (error) {
        console.error(error)
    } */

    try {
        await transport.sendMail({
            from: SMTP_MAIL,
            to: email,
            subject: "Confirm your email",
            html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
        })
    } catch (error) {
        console.error(error)
    } 
}

export const sendPasswordReset = async (email: string, token: string) => {
    const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;
    const {SMTP_MAIL, SMTP_PASSWORD} = process.env;
    
    const transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: SMTP_MAIL,
            pass: SMTP_PASSWORD,
        },
    });
    /* try {
        const testResult = await transport.verify();
        console.log(testResult);
    } catch (error) {
        console.error(error)
    } */

    try {
        await transport.sendMail({
            from: SMTP_MAIL,
            to: email,
            subject: "Reset your password",
            html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
        })
    } catch (error) {
        console.error(error)
    } 
}