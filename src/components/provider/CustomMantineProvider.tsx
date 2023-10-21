"use client"

import React from 'react'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';


export default function CustomMantineProvider({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <MantineProvider>
            {children}
        </MantineProvider>
    )
}
