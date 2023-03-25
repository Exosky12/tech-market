
export const metadata = {
  title: 'Tech market',
  description: 'Your favourite Tech Market',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
