'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    companySize: '',
    companyName: '',
    firstName: '',
    lastName: '',
    workEmail: '',
    phoneNumber: '',
    interest: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add your form submission logic here
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact our sales team
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Have a small team? Get started with SirkupAI Team.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company size <span className="text-red-500">*</span>
            </label>
            <select
              id="companySize"
              name="companySize"
              required
              value={formData.companySize}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-700 rounded-md shadow-sm bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-gray-900 dark:focus:border-white"
            >
              <option value="">Please Select</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="501-1000">501-1000 employees</option>
              <option value="1000+">1000+ employees</option>
            </select>
          </div>

          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company name <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              id="companyName"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                First name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Last name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Work email <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                id="workEmail"
                name="workEmail"
                required
                value={formData.workEmail}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone number <span className="text-red-500">*</span>
              </label>
              <Input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
          </div>

          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Which of our products or services are you interested in? <span className="text-red-500">*</span>
            </label>
            <select
              id="interest"
              name="interest"
              required
              value={formData.interest}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-700 rounded-md shadow-sm bg-white dark:bg-zinc-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-gray-900 dark:focus:border-white"
            >
              <option value="">Select one from the dropdown options below</option>
              <option value="adalbot">ADALBot - Conversational AI</option>
              <option value="callis">CallisAI - Content Intelligence</option>
              <option value="rankingai">RankingAI - Smart Rankings</option>
              <option value="vision">Vision AI - Computer Vision</option>
              <option value="custom">Custom AI Solutions</option>
              <option value="consulting">AI Consulting</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Can you share more about your business needs and challenges?
            </label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full"
              placeholder="Tell us about your specific requirements..."
            />
          </div>

          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-medium rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-white transition-colors"
            >
              Submit
            </Button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            For other inquiries, visit our{' '}
            <a href="/help" className="text-blue-600 dark:text-blue-400 hover:underline">
              help center
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}