import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const contentType = 'image/png'
export const size = {
  width: 32,
  height: 32,
}

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          padding: '2px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile.jpg"
            alt="Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}