'use client';

import GenerateCircle from '@/components/GenerateCircle';
import GenerateRectangle from '@/components/GenerateRectangle';
import GenerateSquare from '@/components/GenerateSquare';
import { Shape } from '@/utils/Shape';
import { ShapeFactory } from '@/utils/ShapeFactory';
import { ShapeType } from '@/utils/ShapeTypeEnum';
import Image from 'next/image';
import { useState } from 'react';

enum FactoryState {
  Idle = '/factory-idle-icon.png',
  Working1 = '/factory-working-icon.png',
  Working2 = '/factory-working-2-icon.png',
  Working3 = '/factory-working-3-icon.png',
}

const shapes = {};

export default function Home() {
  const [factoryState, setFactoryState] = useState(FactoryState.Idle);

  const [showShape, setShowShape] = useState(false);
  const [area, setArea] = useState(0);
  const [perimeter, setPerimeter] = useState(0);

  // used to set the shape of the resulting div
  const [shapeClasses, setShapeClasses] = useState('');

  // used for square
  const [sideLength, setSideLength] = useState(0);

  // used for rectangle
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  // used for circle
  const [radius, setRadius] = useState(0);

  function generateSquare(classNames: string) {
    const square = ShapeFactory.createShape(ShapeType.Square, sideLength);
    generate(classNames, square);
  }

  function generateRectangle(classNames: string) {
    const rectangle = ShapeFactory.createShape(
      ShapeType.Rectangle,
      width,
      height,
    );
    generate(classNames, rectangle);
  }

  function generateCircle(classNames: string) {
    const circle = ShapeFactory.createShape(ShapeType.Circle, radius);
    generate(classNames, circle);
  }

  function generate(classNames: string, shape: Shape) {
    setShowShape(false);
    setFactoryState(FactoryState.Working1);
    setTimeout(() => {
      setFactoryState(FactoryState.Working2);
      setTimeout(() => {
        setFactoryState(FactoryState.Working3);
        setTimeout(() => {
          setFactoryState(FactoryState.Idle);
          setShapeClasses(classNames);
          setArea(shape.area());
          setPerimeter(shape.perimeter());
          setShowShape(true);
        }, 500);
      }, 500);
    }, 500);
  }

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center p-24 bg-gray-200 text-black">
      <h1 className="text-xl font-bold">Factory Pattern</h1>
      <Image
        className="relative"
        src={factoryState}
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />

      <div className="space-y-2">
        <GenerateSquare
          sideLength={sideLength}
          setSideLength={setSideLength}
          generateSquare={generateSquare}
        />

        <GenerateRectangle
          width={width}
          height={height}
          setWidth={setWidth}
          setHeight={setHeight}
          generateRectangle={generateRectangle}
        />

        <GenerateCircle
          radius={radius}
          setRadius={setRadius}
          generateCircle={generateCircle}
        />
      </div>
      <div className="w-48 h-48 flex justify-center flex-col items-center">
        {showShape && (
          <div className={`bg-gray-500 border-0 ${shapeClasses}`}></div>
        )}
        {factoryState !== FactoryState.Idle && (
          <>
            <Image
              className="absolute animate-[spin_3s_linear_infinite]"
              src="/gear-icon.png"
              alt="Next.js Logo"
              width={72}
              height={72}
              priority
            />
          </>
        )}
        {factoryState === FactoryState.Idle && showShape && (
          <div className="text-left flex flex-col mt-2">
            <span>Area: {area > 0 && area}</span>
            <span>Perimeter: {perimeter > 0 && perimeter}</span>
          </div>
        )}
      </div>
    </main>
  );
}
