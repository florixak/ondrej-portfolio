import { Link } from "@/i18n/routing";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
