import {NextResponse} from "next/server";

export async function GET(request: Request) {
    try {
        return NextResponse.json({
          appVersion:"1.0.0",
          bazaar:"https://api.bazaar.com/v1",
          myket:"https://api.myket.com/v1",
        })
    } catch (err) {
        return NextResponse.error();
    }
}