import Link from "next/link";

type EntityCardProps = {
  eyebrow: string;
  href: string;
  title: string;
  description?: string;
  meta?: string;
};

export function EntityCard({ eyebrow, href, title, description, meta }: EntityCardProps) {
  return (
    <Link className="entity-card" href={href}>
      <span>{eyebrow}</span>
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      {meta ? <small>{meta}</small> : null}
    </Link>
  );
}
