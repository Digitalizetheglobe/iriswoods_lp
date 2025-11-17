'use client';

import { useState } from 'react';

export function EnquiryModalForm({ onSuccess }: { onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [consent, setConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length <= 10) {
        setFormData(prev => ({ ...prev, [name]: cleaned }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      setErrorMessage('Please fill in all the fields.');
      return;
    }

    if (!consent) {
      setErrorMessage('Please provide your consent to proceed.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setErrorMessage('Phone number must be exactly 10 digits.');
      return;
    }

    try {
      const response = await fetch('https://api.risingspaces.in/api/forms/forms/691adb25c476888712e4c341/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          data: { name, email, phone, message }
        }),
      });

      const responseData = await response.json().catch(() => null);

      if (!response.ok) {
        const errorMsg = responseData?.message || responseData?.error || `Server error: ${response.status}`;
        console.error('API Error Response:', response.status, responseData);
        throw new Error(errorMsg);
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setConsent(false);

      setTimeout(() => {
        setIsSubmitted(false);
        onSuccess();
      }, 3000);
    } catch (error) {
      console.error('API Error:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send. Please try again later.');
    }
  };

  return isSubmitted ? (
    <div className="text-center py-4">
      <div className="text-green-500 mb-2">
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
      <p className="text-gray-600">We'll get back to you soon.</p>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMessage && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded placeholder:text-gray-400 text-[#097199]"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded placeholder:text-gray-400 text-[#097199]"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        maxLength={10}
        className="w-full p-2 border rounded placeholder:text-gray-400 text-[#097199]"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        required
        className="w-full p-2 border rounded placeholder:text-gray-400 text-[#097199]"
      />
      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          id="consent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 cursor-pointer"
        />
        <label htmlFor="consent" className="text-sm text-gray-700 cursor-pointer">
            Yes, I consent to the Privacy Policy and Terms and Conditions.
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-[#097199] text-white px-4 py-2 rounded hover:bg-[#075a7a]"
      >
        Submit Enquiry
      </button>
    </form>
  );
}

