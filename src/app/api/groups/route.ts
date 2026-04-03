import { NextRequest, NextResponse } from "next/server";
import { addGroup } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description, url, category } = body;

    if (!name || !url) {
      return NextResponse.json(
        { success: false, error: "Name and URL are required" },
        { status: 400 }
      );
    }

    await addGroup(name, description || "", url, category || "其他");

    return NextResponse.json({ success: true, message: "Group added successfully" });
  } catch (error) {
    console.error("Error adding group:", error);
    return NextResponse.json(
      { success: false, error: "Failed to add group" },
      { status: 500 }
    );
  }
}