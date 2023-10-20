
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Splitwise | Account verified",
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
