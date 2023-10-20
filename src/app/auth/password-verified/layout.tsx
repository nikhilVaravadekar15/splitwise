
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Splitwise | Password verified",
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
