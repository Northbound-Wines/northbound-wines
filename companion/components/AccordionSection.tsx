type AccordionSectionProps = {
  title: string;
  children?: string;
  defaultOpen?: boolean;
};

export function AccordionSection({ title, children, defaultOpen = false }: AccordionSectionProps) {
  if (!children) {
    return null;
  }

  return (
    <details className="accordion-section" open={defaultOpen}>
      <summary>{title}</summary>
      <p>{children}</p>
    </details>
  );
}
