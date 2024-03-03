export default function GenerateCircle(props: {
  radius: number;
  setRadius: React.Dispatch<React.SetStateAction<number>>;
  generateCircle: (className: string) => void;
}) {
  const { radius, setRadius, generateCircle } = props;

  return (
    <div className="flex gap-2">
      <div>
        <label>Radius</label>
        <input
          type="number"
          className=" ml-2 p-2 w-16 border-2 rounded-lg border-gray-300"
          value={radius}
          onChange={(e) => setRadius(+e.target.value)}
        />
      </div>

      <button
        className="p-2 bg-gray-500 text-white rounded-md"
        onClick={() => generateCircle('w-16 h-16 rounded-full')}
      >
        Generate Circle
      </button>
    </div>
  );
}
