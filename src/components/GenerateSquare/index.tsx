export default function GenerateSquare(props: {
  sideLength: number;
  setSideLength: React.Dispatch<React.SetStateAction<number>>;
  generateSquare: (className: string) => void;
}) {
  const { sideLength, setSideLength, generateSquare } = props;

  return (
    <div className="flex gap-2">
      <div>
        <label>Width</label>
        <input
          type="number"
          className=" ml-2 p-2 w-16 border-2 rounded-lg border-gray-300"
          value={sideLength}
          onChange={(e) => setSideLength(+e.target.value)}
        />
      </div>

      <button
        className="p-2 bg-gray-500 text-white rounded-md"
        onClick={() => generateSquare('w-16 h-16')}
      >
        Generate Square
      </button>
    </div>
  );
}
