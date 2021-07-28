export function TitleDivider({ text, ...props }) {
  return (
    <div className="divider-container" {...props}>
      <div className="divider" />
      <h1 className="divider-text">{text}</h1>
    </div>
  );
}
