import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Partner from '@/models/Partner';

export async function GET() {
  try {
    await dbConnect();
    const partners = await Partner.find().sort({ createdAt: -1 });
    return NextResponse.json(partners, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching partners' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const newPartner = await Partner.create(body);
    return NextResponse.json({ message: 'Partner added successfully', data: newPartner }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error adding partner' }, { status: 500 });
  }
}
