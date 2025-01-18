export function Input({
  onChange,
  placeholder,
}: {
  placeholder: string;
  onChange: () => void;
}) {
  return (
    <div>
      <input
        type={"text"}
        className="px-4 py-2 border rounded"
        onChange={onChange}
        placeholder={placeholder}
      ></input>
    </div>
  );
}
