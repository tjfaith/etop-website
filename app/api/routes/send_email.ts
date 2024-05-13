import { NextResponse, NextRequest } from 'next/server'
import nodemailer from 'nodemailer'
import { sendMail } from '@/app/api/controller/emailController'


export default function emailHandler(req:NextRequest, res:NextResponse) {
  // const message = {
  //   to: req?.body?.email,
  //   subject: req?.body?.subject,
  //   text: req.body?.message,
  //   html: req.body?.template,
  // };
  // if (req.method === 'POST') {
  // sendMail(message)
  // }
}