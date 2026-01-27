import Link from 'next/link';

export default function ContentMessagingPage() {
  return (
    <main className="min-h-screen bg-parchment">
      <div className="bg-secondary text-white py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/comms" className="text-sm opacity-80 hover:opacity-100 mb-4 inline-block">
            ← Communications Hub
          </Link>
          <p className="text-sm uppercase tracking-wider opacity-80 mb-2">Comms Function 03</p>
          <h1 className="text-4xl font-serif font-bold">Content & Messaging</h1>
          <p className="mt-4 text-lg opacity-90">
            Key messages, content strategy, and copywriting guidelines
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="bg-white rounded-lg p-8 shadow-sm border border-mist text-center">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📝</span>
          </div>
          <h2 className="text-xl font-semibold text-ink mb-2">Coming Soon</h2>
          <p className="text-slate mb-6">
            This page will document key messages by audience, elevator pitches,
            content strategy, and copywriting guidelines.
          </p>
          <div className="text-sm text-slate bg-parchment rounded-lg p-4">
            <p className="font-medium text-ink mb-2">Planned content:</p>
            <ul className="space-y-1 text-left max-w-sm mx-auto">
              <li>• Key Messages by Audience</li>
              <li>• Elevator Pitches</li>
              <li>• Content Strategy</li>
              <li>• Content Library</li>
              <li>• Copywriting Guidelines</li>
              <li>• Translation/Localization</li>
            </ul>
          </div>
          <Link
            href="/comms"
            className="inline-block mt-6 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition"
          >
            Back to Communications Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
