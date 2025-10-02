export default function Contact() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold text-violet-700 mb-4">Contact Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <textarea placeholder="Message" className="w-full border p-2 rounded"></textarea>
        <button className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700">
          Send
        </button>
      </form>
    </div>
  );
}
