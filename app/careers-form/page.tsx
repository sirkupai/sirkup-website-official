'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function CareersForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    post: '',
    resume: null as File | null,
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)
    setError(null)

    try {
      const body = new FormData()
      body.append('firstName', formData.firstName)
      body.append('lastName', formData.lastName)
      body.append('email', formData.email)
      body.append('contactNo', formData.contactNo)
      body.append('post', formData.post)
      if (formData.resume) {
        body.append('resume', formData.resume)
      }

      const res = await fetch(
        'https://primary-production-2d7fc.up.railway.app/webhook/resume-intake',
        {
          method: 'POST',
          body,
        }
      )

      if (res.ok) {
        setSuccess('Application submitted successfully.')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          contactNo: '',
          post: '',
          resume: null,
        })
      } else {
        const errText = await res.text()
        throw new Error(errText || 'Failed to submit application')
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
          Careers Application Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            type="tel"
            name="contactNo"
            placeholder="Contact Number"
            required
            value={formData.contactNo}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="post"
            placeholder="Post Applied For"
            required
            value={formData.post}
            onChange={handleChange}
          />

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Upload Resume
            </label>
            <div className="flex items-center space-x-4">
              <label
                htmlFor="resume"
                className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-black rounded-md cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-100 transition"
              >
                Choose File
              </label>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {formData.resume ? formData.resume.name : 'No file chosen'}
              </span>
            </div>
            <input
              id="resume"
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              onChange={handleChange}
              className="hidden"
            />
          </div>

          {/* Feedback Messages */}
          {success && <p className="text-black, dark:text-white">{success}</p>}
          {error && <p className="text-red-600">{error}</p>}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 dark:bg-white text-white dark:text-black"
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
      </div>
    </div>
  )
}
