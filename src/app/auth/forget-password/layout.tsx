
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Splitwise | Forget password",
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
