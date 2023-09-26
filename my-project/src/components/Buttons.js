export function Buttons({ onReset }) {
  return (
    <div>
      <button>Login</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
