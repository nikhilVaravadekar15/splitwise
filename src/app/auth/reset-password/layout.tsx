
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Splitwise | Reset password",
};

export default function SignInLayout({
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
