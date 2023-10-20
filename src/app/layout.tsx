import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: "Splitwise",
  description: "Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.",
  icons: {
    icon: [
      "/assets/images/logo/favicon-16x16.png"
    ],
    apple: [
      "/assets/images/logo/apple-touch-icon-precomposed.png",
    ],
    other: [
      {
        url: "/assets/images/logo/favicon-32x32.png",
        sizes: "32x32",
      }
    ]
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}




// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="UTF-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Splitwise</title>
//         <link rel="shortcut icon" href="/assets/images/logo/favicon-16x16.png" sizes="16x16" type="image/x-icon"></link>
//         <link rel="shortcut icon" href="/assets/images/logo/favicon-32x32.png" sizes="32x32" type="image/x-icon"></link>
//         <link rel="apple-touch-icon-precomposed" href="/assets/images/logo/apple-touch-icon-precomposed.png" />
//       </head>
//       <body>
//         {children}
//       </body>
//     </html>
//   )
// }
