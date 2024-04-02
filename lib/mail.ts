import nodemailer from 'nodemailer';

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;
    const {SMTP_EMAIL, SMPT_PASSWORD} = process.env;

    const transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: SMTP_EMAIL,
            pass: SMPT_PASSWORD,
        },
    });
    try {
        const testResult = await transport.verify();
        console.log(testResult)
    } catch (error) {
        console.log(error + "eto no anda")
    }

    try {
        const sendResult = await transport.sendMail({
            from: SMTP_EMAIL,
            to: email,
            subject: "Confirm your email",
            html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
        })
        console.log(sendResult);
    } catch (error) {
        console.log(error + 'eto tampoco')
    } 
}

