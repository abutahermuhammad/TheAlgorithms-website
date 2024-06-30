import { NextResponse } from "next/server";
const data = require('./../../../../../public/data/new/categories.json')

export async function GET() {
  return NextResponse.json(data)
}
