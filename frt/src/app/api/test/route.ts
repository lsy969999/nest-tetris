import { NextResponse } from "next/server";

export async function GET(request: Request){
  const url = process.env.NEXT_PUBLIC_API_BASE_URL as string;
  const result =  await fetch(url+ '/test');
  const json =  await result.json()
  return NextResponse.json(json)
}