import { Studio } from "@/components/Studio";

export const dynamic = "force-static";

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <main className="studio-empty">
        <div className="section-label">Sanity Studio</div>
        <h1>Add your Sanity project ID to enable Studio.</h1>
        <p>
          Copy <code>.env.example</code> to <code>.env.local</code>, set{" "}
          <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code>, and restart the dev server.
        </p>
      </main>
    );
  }

  return <Studio />;
}
