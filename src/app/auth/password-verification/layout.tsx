
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Splitwise | Password verification",
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
