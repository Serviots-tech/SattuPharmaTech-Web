import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// export async function POST(req) {
//     try {
//         const contentType = req.headers.get('content-type') || '';
//         const formData = contentType.includes('multipart/form-data')
//         ? await req.formData()
//         : await req.json();
//         const isProjectInquiry = contentType.includes('multipart/form-data')
//         ? formData.has('projectDetails') && formData.has('idea')
//         : 'projectDetails' in formData && 'idea' in formData;


//         const emailData = isProjectInquiry
//             ? {
//                   firstName: formData.get?.('firstName') || formData.firstName,
//                   phoneNumber:
//                       formData.get?.('phoneNumber') || formData.phoneNumber,
//                   email: formData.get?.('email') || formData.email,
//                   country:
//                       formData.get?.('country') ||
//                       formData.country ||
//                       'Not provided',
//                   budget:
//                       formData.get?.('budget') ||
//                       formData.budget ||
//                       'Not provided',
//                   projectDetails:
//                       formData.get?.('projectDetails') ||
//                       formData.projectDetails,
//                   idea: formData.get?.('idea') || formData.idea,
//                   file: formData.get?.('file') || null,
//                   ndaChecked: formData.get?.('ndaChecked') || 'No',
//               }
//             : {
//                   name: formData.get?.('name') || formData.name,
//                   email: formData.get?.('email') || formData.email,
//                   phone:
//                       formData.get?.('phone') ||
//                       formData.phone ||
//                       'Not provided',
//                   message: formData.get?.('message') || formData.message,
//                   pageUrl: formData.get?.('pageUrl') || formData.pageUrl || '/',
//               };
//         // if (
//         //     !emailData.email ||
//         //     (isProjectInquiry &&
//         //         (!emailData.firstName ||
//         //             !emailData.projectDetails ||
//         //             !emailData.idea)) ||
//         //     (!isProjectInquiry && (!emailData.name || !emailData.message))
//         // ) {
//         //     return NextResponse.json(
//         //         { message: 'Missing required fields' },
//         //         { status: 400 }
//         //     );
//         // }

//         const attachment = emailData.file
//             ? [
//                   {
//                       filename: emailData.file.name,
//                       content: Buffer.from(await emailData.file.arrayBuffer()),
//                       contentType: emailData.file.type,
//                   },
//               ]
//             : [];

//         const adminMailOptions = {
//             from: `Serviots Website Leads <${`info@satupharmtech.com`}>`,
//             to: "alokp@serviots.com",
//             subject: isProjectInquiry
//                 ? 'New Project Inquiry Submission'
//                 : 'New Contact Form Submission',
//             html: isProjectInquiry
//                 ? `<p><strong>First Name:</strong> ${emailData.firstName}</p>
//            <p><strong>Phone Number:</strong> ${emailData.phoneNumber}</p>
//            <p><strong>Email:</strong> ${emailData.email}</p>
//            <p><strong>Country:</strong> ${emailData.country}</p>
//            <p><strong>Budget:</strong> ${emailData.budget}</p>
//            <p><strong>Project Details:</strong> ${emailData.projectDetails}</p>
//            <p><strong>Idea:</strong> ${emailData.idea}</p>
//            <p><strong>Copy of NDA:</strong> ${emailData.ndaChecked}</p>`
//                 : `<p><strong>Name:</strong> ${emailData.name}</p>
//            <p><strong>Email:</strong> ${emailData.email}</p>
//            <p><strong>Phone:</strong> ${emailData.phone}</p>
//            <p><strong>Message:</strong> ${emailData.message}</p>
//            <p><strong>Submitted From:</strong>${emailData.pageUrl}</p>
//            `,
//             attachments: attachment,
//         };

//         const userMailOptions = {
//             from: `Sales Team`,
//             to: "alokp@serviots.com",
//             subject: 'Thank You for Contacting Us',
//             html: `
//                 <!DOCTYPE html>
//                 <html lang="en">

//                 <head>
//                     <meta charset="UTF-8">
//                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                     <title>Document</title>
//                     <link rel="preconnect" href="https://fonts.googleapis.com">
//                     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//                     <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap"
//                         rel="stylesheet">
//                     <style>
//                         body,
//                         html {
//                             margin: 0;
//                             padding: 0;
//                             width: 100%;
//                             font-family: 'Archivo', sans-serif;
//                         }

//                         body {
//                             width: 544px;
//                             margin: auto;
//                         }

//                         * {
//                             box-sizing: border-box;
//                         }

//                         .email-template {
//                             width: 100%;
//                             text-align: center;
//                         }

//                         .header img {
//                             padding-top: 24px;
//                             padding-bottom: 24px;
//                         }

//                         .introduction {
//                             font-weight: 500;
//                             font-size: 24px;
//                             text-align: center;
//                             color: #384860;
//                             line-height: 130%;
//                             padding: 20px;
//                         }

//                         .introduction-sub {
//                             font-weight: 300;
//                             font-size: 16px;
//                             line-height: 100%;
//                             color: #6E6E6E;
//                         }

//                         .next-step {
//                             text-align: left;
//                             margin-top: 20px;
//                             margin-bottom: 25px;
//                             padding: 0 10px;
//                         }

//                         .next-step p {
//                             font-weight: 600;
//                             font-size: 18px;
//                             line-height: 100%;
//                             color: #384860;
//                         }

//                         .next-step-inner {
//                             background-color: #EFEFEF;
//                             border-radius: 20px;
//                             padding: 35px;
//                         }

//                         .next-step-inner-res {
//                             display: block;
//                             margin-bottom: 20px;
//                         }

//                         .next-step-inner-res img {
//                             position: relative;
//                         }

//                         .next-step-inner-res-sub {
//                             width: 78%;
//                             margin-left: 5%;
//                             display: inline-block;
//                         }

//                         .next-step-inner-res-sub p {
//                             font-weight: 600;
//                             font-size: 16px;
//                             color: #384860;
//                         }

//                         .phone {
//                             width: 100%;
//                             margin-bottom: 10px;
//                             text-align: start;
//                         }

//                         .phone-inner {
//                             width: 79%;
//                             display: inline-block;
//                             margin-left: 2%;
//                         }

//                         .phone-inner p {
//                             font-weight: 600;
//                             font-size: 16px;
//                             line-height: 100%;
//                             color: #384860;
//                             text-align: left;
//                         }

//                         .phone-inner-sub ul {
//                             list-style-type: none;
//                             padding-left: 0;
//                             margin: 0;
//                             font-weight: 300;
//                             font-size: 16px;
//                             line-height: 150%;
//                             color: #6E6E6E;
//                         }

//                         .phone-inner-sub ul li {
//                             width: fit-content;
//                             display: inline-block;
//                             margin-right: 10%;
//                         }

//                         #phone-inner-sub1 ul li a {
//                             color: #6E6E6E;
//                             text-decoration: none;
//                         }

//                         .phone-inner-sub li:nth-child(4) {
//                             color: #2969FF;
//                         }

//                         .footer {
//                             margin-top: 20px;
//                         }

//                         .footer-icons img {
//                             max-width: 100%;
//                             margin: 20px 0;
//                         }

//                         .footer-text p {
//                             color: #6E6E6E;
//                             font-style: italic;
//                             font-weight: 500;
//                             font-size: 14px;
//                             text-align: center;
//                             margin-top: 0;
//                             margin-bottom: 0;
//                         }

//                         #line {
//                             border: 1px solid #DEDEDE;
//                             margin: 10px 0;
//                         }

//                         .container-explore {
//                             width: 90%;
//                             max-width: 544px;
//                             margin: 0 auto;
//                         }

//                         .container-explore-inner1 p {
//                             font-size: 16px;
//                             color: #384860;
//                             line-height: 120%;
//                             text-align: center;
//                         }

//                         .container-explore-inner2 {
//                             display: inline-block;
//                             text-align: center;
//                             width: 100%;
//                         }

//                         .container-explore-inner2 p {
//                             display: inline-block;
//                             margin: 0 10px;
//                             color: #2969FF;
//                         }

//                         a {
//                             color: #2969FF;
//                         }

//                         .next-step-inner-res-sub-p2 {
//                             color: #6E6E6E !important;
//                             font-weight: 300 !important;
//                             font-size: 16px !important;
//                         }

//                         .phone-container {
//                             display: inline-flex;
//                             align-items: center;
//                         }

//                         .phone-container img {
//                             display: inline-block;
//                             vertical-align: middle;
//                         }

//                         .phone-container p {
//                             display: inline-block;
//                             margin: 0;
//                             /* vertical-align: middle; */
//                             padding-left: 15px;
//                             padding-top: 10px;
//                             /* Adjust spacing between image and text */
//                         }
//                     </style>

//                 </head>

//                 <body>
//                     <div class="email-template">
//                         <header class="header">
//                             <img id="logo" src="https://www.serviots.com/images/emailTemplateImages/serviots-logo.png" alt="">
//                         </header>
//                         <div>
//                             <img src="https://www.serviots.com/images/emailTemplateImages/Design.png" alt="">
//                         </div>
//                         <div class="introduction">
//                             <p>Hey, Thank you for submitting your software development requirements to Serviots</p>
//                         </div>
//                         <div class="introduction-sub">
//                             We’re thrilled to connect with you, listen to your requirements, and learn more about your project.
//                         </div>
//                         <div class="next-step">
//                             <p>Next Step</p>
//                             <div class="next-step-inner">
//                                 <div class="next-step-inner-res">
//                                     <img src="https://www.serviots.com/images/emailTemplateImages/oneImg.png" alt=""
//                                         style="top: -33px;">
//                                     <div class="next-step-inner-res-sub">
//                                         <p>Response & Discovery Call</p>
//                                         <p class="next-step-inner-res-sub-p2">We are on it, reviewing your details. You will get a
//                                             response from Serviots’ team in the next
//                                             1 hour to 24 hours.</p>
//                                     </div>
//                                 </div>
//                                 <hr id="line">
//                                 <div class="next-step-inner-res">
//                                     <img src="https://www.serviots.com/images/emailTemplateImages/twoImg.png" alt=""
//                                         style="top: -35px;">
//                                     <div class="next-step-inner-res-sub">
//                                         <p>Share Detailed</p>
//                                         <p class="next-step-inner-res-sub-p2">After the discovery call, We’ll outline a detailed
//                                             proposal, explaining how we bring your
//                                             project to life, timeline, cost estimation, and deliverables.</p>
//                                     </div>
//                                 </div>
//                                 <hr id="line">
//                                 <div class="next-step-inner-res">
//                                     <img src="https://www.serviots.com/images/emailTemplateImages/threeImg.png" alt=""
//                                         style="top: -17px;">
//                                     <div class="next-step-inner-res-sub">
//                                         <p>Team Onboarding</p>
//                                         <p class="next-step-inner-res-sub-p2">Once proposal approval is received, we will start your
//                                             project immediately after formal NDA.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <!--Phone -->
//                         <div class="phone">
//                             <div class="phone-container">
//                                 <img src="https://www.serviots.com/images/emailTemplateImages/phoneImg.png" alt="">
//                                 <p>Phones</p>
//                             </div>
//                         </div>

//                         <div class="phone-inner-sub" id="phone-inner-sub1" style="text-align: start; margin-left: 8%;">
//                             <ul>
//                                 <li><a href="tel:+15304470724">(USA) <u>+1 53044 70724</u></a></li>
//                                 <li><a href="tel:+971585201525">(UAE) <u>+971 58 520 1525</u></a></li>
//                                 <li><a href="tel:+918780234537">(India) <u>+91 8780234537</u></a></li>
//                             </ul>
//                         </div>

//                         <!--Email -->
//                         <div class="phone">
//                             <div class="phone-container" style="margin-top: 16px;">
//                                 <img src="https://www.serviots.com/images/emailTemplateImages/msgImg.png" alt="">
//                                 <p>Email</p>
//                             </div>

//                         </div>
//                         <div class="phone-inner-sub" style="text-align: start; margin-left: 8%;">
//                             <ul>
//                                 <li><a href="mailto:info@serviots.com">info@serviots.com</a></li>
//                             </ul>
//                         </div>


//                         <div class="container-explore">
//                             <div class="container-explore-inner1">
//                                 <p>In the meantime, feel free to explore our Project Portfolio and Case Studies to see how we’ve helped
//                                     businesses like yours achieve their goals.</p>
//                             </div>
//                             <div class="container-explore-inner2">
//                                 <p><a href="https://www.serviots.com/blog">Blog</a></p>
//                                 <p>|</p>
//                                 <p><a href="https://www.serviots.com/case-studies">Case Studies</a></p>
//                             </div>
//                         </div>

//                         <div class="footer">
//                             <div class="footer-icons">
//                                 <img src="https://www.serviots.com/images/emailTemplateImages/socialLogos.png" alt="">
//                             </div>
//                             <div class="footer-text">
//                                 <p>Your data is safe with us</p>
//                                 <p>We protect your privacy and data with DMCA & NDA</p>
//                             </div>
//                         </div>
//                     </div>
//                 </body>

//                 </html>
//             `,
//         };
//         const transporter = nodemailer.createTransport({
//             host: 'smtp.secureserver.net',
//             port: 587,
//             secure: false, 
//             auth: {
//                 user: "info@satupharmtech.com",
//                 pass: "Trusha1234@",
//             },
//         });
//         await transporter.sendMail(adminMailOptions);
//         await transporter.sendMail(userMailOptions);

//         return NextResponse.json({
//             success: true,
//             message: 'Email sent successfully!',
//         });
//     } catch (error) {
//         console.error('Error:', error);
//         return NextResponse.json(
//             { success: false, message: 'Failed to send email.' },
//             { status: 500 }
//         );
//     }
// }


export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { fullName, email, phoneNumber, companyName,   } = req.body;

    if (!fullName || !email || !message) {
        return res.status(400).json({ message: 'Full Name, Email, and Message are required' });
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.secureserver.net',
        port: 587,
        secure: false,
        auth: {
            user: "info@satupharmtech.com",
            pass: "Trusha1234@",
        },
    });

    const adminMailOptions = {
        from: email,
        to: process.env.RECEIVER_EMAIL, 
        subject: `New Contact Form Submission from ${fullName}`,
        text: `
        Name: ${fullName}
        Email: ${email}
        Phone Number: ${phoneNumber || 'N/A'}
        Company Name: ${companyName || 'N/A'}
        Message: ${message}
        `,
    };

    const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank You for Contacting Us!',
        text: `
        Hi ${fullName},

        Thank you for reaching out! We have received your message and will get back to you as soon as possible.

        Best Regards,
        Your Company Team
        `,
    };

    try {
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);
        return res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Error sending email', error: error.message });
    }
}
