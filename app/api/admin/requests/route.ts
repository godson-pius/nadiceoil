import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import DeliveryRequest from '@/models/DeliveryRequest';

export async function GET() {
  try {
    await dbConnect();
    const requests = await DeliveryRequest.find().sort({ createdAt: -1 });
    return NextResponse.json(requests, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching requests' }, { status: 500 });
  }
}
