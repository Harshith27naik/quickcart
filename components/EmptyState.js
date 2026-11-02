import Link from "next/link";

export default function EmptyState({ message, linkText, href }) {
  return (
    <div className="empty">
      <p>{message}</p>
      <Link href={href} className="btn btn-primary">{linkText}</Link>
    </div>
  );
}