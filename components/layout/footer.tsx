"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight,
  Mail,
  Twitter,
  Github,
  MapPin,
  Phone,
  Linkedin
} from 'lucide-react'

const Footer = () => {
  const navigation = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    solutions: [
      { name: 'Content Intelligence', href: '/solutions' },
      { name: 'Conversational Intelligence', href: '/solutions' },
      { name: 'AI Search', href: '/solutions' },
      { name: 'Academy', href: '/solutions' },
      { name: 'Custom Automations', href: '/solutions' },
    ],
    resources: [
      { name: 'Guides & Playbooks', href: '/resources' },
      { name: 'Case Studies', href: '/resources' },
      { name: 'Video Tutorials', href: '/resources' },
      { name: 'Templates & Tools', href: '/resources' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  }

  const offices = [
    {
      city: 'Islamabad',
      address: 'Islamabad, Pakistan',
      email: 'contact@sirkup.ai'
    },
    {
      city: 'Dubai',
      address: 'Dubai, UAE',
      email: 'contact@sirkup.ai'
    }
  ]

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="font-semibold text-xl">SirkupAI</span>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              We build applied AI systems that hold up in production. Operator-led, R&D-first, 
              and focused on measurable outcomes across Pakistan and the UAE.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 h-10 w-10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 h-10 w-10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 h-10 w-10">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 h-10 w-10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Solutions</h3>
            <ul className="space-y-2">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Resources</h3>
            <ul className="space-y-2">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4 sm:mb-6 text-sm sm:text-base">Our Offices</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {offices.map((office) => (
              <div key={office.city} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-600" />
                  <span className="font-medium text-gray-900">{office.city}</span>
                </div>
                <p className="text-gray-600 text-sm ml-6">{office.address}</p>
                <p className="text-gray-600 text-sm ml-6">{office.email}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-200">
          <div className="max-w-md">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Stay Updated</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get the latest insights on AI systems and operator best practices.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-sm"
              />
              <Button type="submit" className="bg-gray-900 text-white hover:bg-gray-800 px-4 sm:px-6 py-3 text-sm font-medium">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-600 text-xs sm:text-sm order-2 sm:order-1">
              © 2025 SirkupAI. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-600 order-1 sm:order-2">
              <span className="text-center sm:text-left">Built with production-ready AI systems</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer