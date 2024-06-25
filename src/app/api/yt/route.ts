import { NextRequest, NextResponse } from "next/server";
import {Audio} from 'yt-converter'

export async function GET(req:NextRequest){
    const audio = await Audio({
        url:'https://www.youtube.com/watch?v=EG5VjYkYnys',
        ffmpegPath: !process.env.VERCEL_HOST ? undefined : 'ffmpeg'
    })
    return NextResponse.json(audio)
}