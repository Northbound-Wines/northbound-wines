type MetadataItem = {
  label: string;
  value?: string | string[];
};

type MetadataGridProps = {
  items: MetadataItem[];
};

export function MetadataGrid({ items }: MetadataGridProps) {
  const visibleItems = items.filter((item) => {
    if (Array.isArray(item.value)) {
      return item.value.length > 0;
    }

    return Boolean(item.value);
  });

  if (!visibleItems.length) {
    return null;
  }

  return (
    <dl className="metadata-grid">
      {visibleItems.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{Array.isArray(item.value) ? item.value.join(", ") : item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
