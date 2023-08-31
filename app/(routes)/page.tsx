export default function HomePage() {
  return (
    <div className="flex justify-center items-center">
      <div></div>
      <div className="absolute border-2 border-red-500 h-20 w-20 spin-xclockwise" />
      <div className="absolute border-2 border-emerald-500 h-20 w-20 spin-clockwise" />
      <p className="absolute">JB</p>
    </div>
  );
}
