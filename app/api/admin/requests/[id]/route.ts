import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import DeliveryRequest from '@/models/DeliveryRequest';

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await dbConnect();
    const { id } = await params;
    await DeliveryRequest.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Request deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting request' }, { status: 500 });
  }
}
