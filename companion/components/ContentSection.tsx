type ContentSectionProps = {
  title: string;
  children?: string;
};

export function ContentSection({ title, children }: ContentSectionProps) {
  if (!children) {
    return null;
  }

  return (
    <section className="content-section">
      <div className="section-label">{title}</div>
      <p>{children}</p>
    </section>
  );
}
