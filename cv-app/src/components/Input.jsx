export default function Input({ title, value, onChange, type = "text" }) {
  return (
    <>
      <label htmlFor="title">{title}</label>
      <input type={type} value={value} onChange={onChange} />
    </>
  );
}
