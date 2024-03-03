export default function GenerateRectangle(props: {
  width: number;
  height: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
  generateRectangle: (className: string) => void;
}) {
  const { width, height, setWidth, setHeight, generateRectangle } = props;

  return (
    <div className="flex gap-2">
      <div>
        <label>Width</label>
        <input
          type="number"
          className=" ml-2 p-2 w-16 border-2 rounded-lg border-gray-300"
          value={width}
          onChange={(e) => setWidth(+e.target.value)}
        />
      </div>

      <div>
        <label>Height</label>
        <input
          type="number"
          className=" ml-2 p-2 w-16 border-2 rounded-lg border-gray-300"
          value={height}
          onChange={(e) => setHeight(+e.target.value)}
        />
      </div>

      <button
        className="p-2 bg-gray-500 text-white rounded-md"
        onClick={() => generateRectangle('w-24 h-16')}
      >
        Generate Rectangle
      </button>
    </div>
  );
}
