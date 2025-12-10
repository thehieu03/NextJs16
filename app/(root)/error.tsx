'use client';
import {useEffect} from 'react'

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button className='bg-blue-500 text-white p-2 rounded-md'
                onClick={
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}
