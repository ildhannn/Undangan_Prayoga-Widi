import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Wish from "@/lib/models/Wish";

export async function POST(req: Request) {
  try {
    const { name, attendance, guests, message } = await req.json();
    await connectToDatabase();
    await Wish.create({ name, attendance, guests, message });

    return NextResponse.json(
      {
        message: "Kehadiran dan harapan Anda berhasil disimpan. Terima kasih atas partisipasi Anda!",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new NextResponse("Failed to submit", { status: 500 });
  }
}

// Optional: Handler untuk method yang tidak diizinkan
export async function GET() {
  return new NextResponse("Method Not Allowed", { status: 405 });
}
