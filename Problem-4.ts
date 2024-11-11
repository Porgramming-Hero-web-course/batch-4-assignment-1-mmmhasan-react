type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

const calculateShapeArea = (shape: Shape): number => {
  if (shape.shape === "circle") {
    // Type guard for Circle
    return Math.PI * shape.radius ** 2;
  } else if (shape.shape === "rectangle") {
    // Type guard for Rectangle
    return shape.width * shape.height;
  } else {
    throw new Error("Unknown shape type");
  }
};
