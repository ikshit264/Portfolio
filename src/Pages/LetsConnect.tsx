import { useState } from 'react';

const LetsconnectForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isSuccessful = Math.random() > 0.5;

    if (isSuccessful) {
      setSuccessMessage('Your connection request is successfully sent!');
      setErrorMessage(null);
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setErrorMessage('Failed to send your connection request.');
      setSuccessMessage(null);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-full bg-gradient-to-b from-blue-200 to-blue-400 p-4">
      <h2
        className="text-3xl font-bold mb-6 text-center text-black"
        style={{ fontFamily: 'Courier New, monospace' }}
      >
        Let's Connect
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-b from-gray-100 to-gray-300 p-6 border-4 border-black rounded-lg w-full max-w-lg"
      >
        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="name"
            style={{ fontFamily: 'Verdana, sans-serif' }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white border-2 border-blue-500 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-blue-600"
            placeholder="Your Name"
            required
            style={{ fontFamily: 'Courier New, monospace' }}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="email"
            style={{ fontFamily: 'Verdana, sans-serif' }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white border-2 border-blue-500 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-blue-600"
            placeholder="Your Email"
            required
            style={{ fontFamily: 'Courier New, monospace' }}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="message"
            style={{ fontFamily: 'Verdana, sans-serif' }}
          >
            Your Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-white border-2 border-blue-500 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-blue-600"
            placeholder="Your Message"
            required
            style={{ fontFamily: 'Courier New, monospace' }}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="font-sans bg-gray-200 text-base tracking-widest uppercase text-black cursor-pointer border-3 border-black px-2 py-1 sm:px-3 sm:py-1.5 shadow-[1px_1px_0px_0px,2px_2px_0px_0px,3px_3px_0px_0px,4px_4px_0px_0px,5px_5px_0px_0px] relative select-none active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            Send Message
          </button>
        </div>

        {errorMessage && (
          <div
            className="text-red-600 text-sm mt-4 p-2 bg-red-100 border border-red-600 rounded"
            style={{ fontFamily: 'Courier New, monospace' }}
          >
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div
            className="text-green-600 text-sm mt-4 p-2 bg-green-100 border border-green-600 rounded"
            style={{ fontFamily: 'Courier New, monospace' }}
          >
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default LetsconnectForm;
