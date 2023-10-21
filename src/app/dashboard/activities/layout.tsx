import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Splitwise | Activities",
};

export default function DashboardLayout({
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
