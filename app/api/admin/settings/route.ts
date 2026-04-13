import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Settings from '@/models/Settings';

export async function GET() {
  try {
    await dbConnect();
    let settings = await Settings.findOne();
    if (!settings) {
      settings = await Settings.create({});
    }
    return NextResponse.json(settings, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching settings' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    let settings = await Settings.findOne();
    if (settings) {
      settings = await Settings.findOneAndUpdate({}, body, { new: true });
    } else {
      settings = await Settings.create(body);
    }
    
    return NextResponse.json({ message: 'Settings updated successfully', data: settings }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error updating settings' }, { status: 500 });
  }
}
