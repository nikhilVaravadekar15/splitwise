import React from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function loading() {
    return (
        <div className="h-[90vh] w-screen flex items-center justify-center">
            <LoadingSpinner />
        </div>
    )
}
