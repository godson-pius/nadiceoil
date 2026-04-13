import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'Please fill all required fields.' },
        { status: 400 }
      );
    }

    const newContact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    return NextResponse.json(
      { message: 'Message sent successfully!', data: newContact },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
