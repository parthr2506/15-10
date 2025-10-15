import React from 'react'
import styles from './style.module.css'

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <nav>About Navbar</nav>
            <main className={styles.main}>
                {children}
            </main>

        </>
    )
}
