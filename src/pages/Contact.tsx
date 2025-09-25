import React, { useState } from 'react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={submit} className="max-w-xl bg-white dark:bg-gray-800 rounded-xl shadow p-6 space-y-4">
        <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ring-brand dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Send</Button>
        {sent && <p className="text-sm text-brand">Thanks! We received your message.</p>}
      </form>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
          <h3 className="font-semibold">Email</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">support@tinamart.com</p>
        </div>
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
          <h3 className="font-semibold">Phone</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">+1 (555) 555-1234</p>
        </div>
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow">
          <h3 className="font-semibold">Hours</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Mon–Fri, 9:00–18:00</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
