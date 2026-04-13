import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import DeliveryRequest from '@/models/DeliveryRequest';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();

    const { name, email, phone, companyName, liters, address } = body;

    if (!name || !email || !phone || !companyName || !liters || !address) {
      return NextResponse.json(
        { message: 'Please fill all required fields.' },
        { status: 400 }
      );
    }

    const newRequest = await DeliveryRequest.create({
      name,
      email,
      phone,
      companyName,
      liters,
      address,
    });

    return NextResponse.json(
      { message: 'Request submitted successfully!', data: newRequest },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Delivery Request API Error:', error);
    return NextResponse.json(
      { message: 'Failed to submit request. Please try again later.' },
      { status: 500 }
    );
  }
}
