'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className="relative text-lg">
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-200"
          layoutId="underline"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  )
}

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">DMUN XII</Link>
        <ul className="flex space-x-6">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/committees">Committees</NavLink></li>
          <li><NavLink href="/logistics">Logistics</NavLink></li>
          <li><NavLink href="/register">Register</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

