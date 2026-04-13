import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Partner from '@/models/Partner';

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await dbConnect();
    const { id } = await params;
    await Partner.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Partner deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting partner' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await dbConnect();
    const { id } = await params;
    const body = await request.json();
    const updatedPartner = await Partner.findByIdAndUpdate(id, body, { new: true });
    return NextResponse.json({ message: 'Partner updated successfully', data: updatedPartner }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error updating partner' }, { status: 500 });
  }
}
