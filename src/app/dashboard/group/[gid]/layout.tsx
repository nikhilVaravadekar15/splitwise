import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Splitwise | Group",
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
