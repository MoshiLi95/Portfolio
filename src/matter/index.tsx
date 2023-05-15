import Matter, { Runner } from "matter-js";
import Sizes from "./Utils/Sizes";
import { imageIterator, ImageInfoI } from "./Utils/Images";

declare const window: Window &
  typeof globalThis & {
    SkillPlayground: any;
  };

export default class SkillPlayground {
  container;
  sizes;
  engine;
  render;
  runner;
  mouse;
  mouseConstraint;
  walls;
  skillStack;
  rock;
  elastic;
  constructor(container?: HTMLDivElement) {
    if (!window.SkillPlayground && container === undefined)
      throw new Error("No container");
    if (window.SkillPlayground) return window.SkillPlayground;
    window.SkillPlayground = this;

    this.container = container;

    this.sizes = new Sizes();

    this.sizes.on("resize", () => {
      this.resize();
    });

    this.engine = Matter.Engine.create();
    this.render = Matter.Render.create({
      element: this.container,
      engine: this.engine,
      options: {
        background: "transparent",
        wireframes: false,
      },
    });

    this.walls = this.createGround();
    this.skillStack = this.createSkillSet();
    this.rock = Matter.Bodies.polygon(30, 30, 8, 20, {
      density: 0.004,
      restitution: 0.8,
    });
    this.elastic = Matter.Constraint.create({
      pointA: { x: 0, y: 0 },
      bodyB: this.rock,
      length: 0.01,
      damping: 0.01,
      stiffness: 0.05,
    });

    Matter.Render.run(this.render);

    this.runner = Runner.create();

    Matter.Runner.run(this.runner, this.engine);

    this.mouse = Matter.Mouse.create(this.render.canvas);
    this.mouseConstraint = Matter.MouseConstraint.create(this.engine, {
      mouse: this.mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Matter.Composite.add(this.engine.world, this.mouseConstraint);

    // keep the mouse in sync with rendering
    this.render.mouse = this.mouse;

    const dummy = function (this: SkillPlayground) {
      if (
        this.mouseConstraint?.mouse.button === -1 &&
        this.rock &&
        (this.rock?.position.x != this.elastic?.pointA.x ||
          this.rock.position.y != this.elastic?.pointA.y)
      ) {
        //@ts-expect-error missing typescript info
        if (Matter.Body.getSpeed(this.rock) > 35) {
          //@ts-expect-error missing typescript info
          Matter.Body.setSpeed(this.rock, 25);

          if (this.engine && this.elastic) {
            const preRock = this.rock;
            const rock = Matter.Bodies.polygon(
              this.elastic?.pointA.x,
              this.elastic?.pointA.y,
              8,
              20,
              { density: 0.004, restitution: 1 }
            );
            setTimeout(() => {
              //@ts-expect-error expe
              Matter.Composite.remove(this.engine?.world, preRock);
            }, 5000);
            this.rock = rock;
            this.elastic.bodyB = rock;
            setTimeout(() => {
              //@ts-expect-error expe
              Matter.Composite.add(this.engine?.world, this.rock);
            }, 1000);
          }
        } else {
          //@ts-expect-error missing typescript info
          Matter.Body.setSpeed(this.rock, 0);
        }
      }
    }.bind(this);
    Matter.Events.on(this.engine, "afterUpdate", dummy);
  }

  resize() {
    // Resize Canvas
    if (this.render && this.sizes) {
      this.render.bounds.max.x = this.sizes.width;
      this.render.bounds.max.y = this.sizes.height;
      this.render.options.width = this.sizes.width;
      this.render.options.height = this.sizes.height;
      this.render.canvas.width = this.sizes.width;
      this.render.canvas.height = this.sizes.height;
    }
    // Remove and init components
    if (
      this.walls &&
      this.skillStack &&
      this.rock &&
      this.elastic &&
      this.sizes &&
      this.render &&
      this.engine
    ) {
      this.walls.forEach((item) =>
        this.engine?.world
          ? Matter.World.remove(this.engine?.world, item)
          : () => {
              return;
            }
      );
      this.skillStack.forEach((item) =>
        this.engine?.world
          ? Matter.World.remove(this.engine?.world, item)
          : () => {
              return;
            }
      );

      Matter.World.remove(this.engine?.world, this.rock);
      Matter.World.remove(this.engine?.world, this.elastic);

      this.walls = this.createGround();

      this.skillStack = this.createSkillSet();

      this.rock = Matter.Bodies.polygon(
        (this.sizes ? this.sizes.width : window.innerWidth) / 2,
        ((this.sizes ? this.sizes.height : window.innerHeight) / 4) * 3,
        8,
        20,
        { density: 0.004, restitution: 1 }
      );
      this.elastic = Matter.Constraint.create({
        pointA: {
          x: (this.sizes ? this.sizes.width : window.innerWidth) / 2,
          y: ((this.sizes ? this.sizes.height : window.innerHeight) / 4) * 3,
        },
        bodyB: this.rock,
        length: 0.01,
        damping: 0.01,
        stiffness: 0.05,
      });

      Matter.Composite.add(this.engine.world, [
        ...this.walls,
        ...this.skillStack,
        this.rock,
        this.elastic,
      ]);
    }
  }

  createGround() {
    const result = [];

    const wallWidth = 35;
    // posX, posY, w, h
    // U  L R
    result.push(
      ...[
        Matter.Bodies.rectangle(
          (this.sizes ? this.sizes.width : window.innerWidth) / 2,
          this.sizes ? this.sizes.height : window.innerHeight,
          this.sizes ? this.sizes.height : window.innerHeight,
          wallWidth,
          {
            isStatic: true,
            restitution: 1,
            render: {
              fillStyle: "#00ff41",
              strokeStyle: "#00ff41",
              lineWidth: 3,
            },
          }
        ),
        Matter.Bodies.rectangle(
          -wallWidth,
          (this.sizes ? this.sizes.height : window.innerHeight) / 2,
          wallWidth,
          this.sizes ? this.sizes.height : window.innerHeight,
          {
            isStatic: true,
            restitution: 1,
            render: {
              fillStyle: "#00ff41",
              strokeStyle: "#00ff41",
              lineWidth: 3,
            },
          }
        ),
        Matter.Bodies.rectangle(
          (this.sizes ? this.sizes.width : window.innerWidth) + wallWidth,
          0,
          wallWidth,
          2 * (this.sizes ? this.sizes.height : window.innerHeight),
          {
            isStatic: true,
            restitution: 1,
            render: {
              fillStyle: "#00ff41",
              strokeStyle: "#00ff41",
              lineWidth: 3,
            },
          }
        ),
      ]
    );

    const platformWidth = 20;

    // posX, posY, w, h
    // U D L R
    result.push(
      Matter.Bodies.rectangle(
        (this.sizes ? this.sizes.width : window.innerWidth) / 2,
        (this.sizes ? this.sizes.height : window.innerHeight) / 4,
        200,
        platformWidth,
        {
          isStatic: true,
          render: {
            fillStyle: "#00ff41",
            strokeStyle: "#00ff41",
            lineWidth: 3,
          },
        }
      ),
      Matter.Bodies.rectangle(
        (this.sizes ? this.sizes.width : window.innerWidth) / 2,
        ((this.sizes ? this.sizes.height : window.innerHeight) / 4) * 2,
        200,
        platformWidth,
        {
          isStatic: true,
          render: {
            fillStyle: "#00ff41",
            strokeStyle: "#00ff41",
            lineWidth: 3,
          },
        }
      )
    );
    return result;
  }

  createSkillSet() {
    let rowCount = 3;
    let columnCount = 3;
    const rowGap = 15;
    const columnGap = 15;

    let xPos = this.sizes
      ? this.sizes.width / 2 - (columnCount * (columnGap + 50)) / 2
      : 0;
    let yPos = this.sizes
      ? this.sizes.height / 4 - rowCount * (rowGap - 1 + 50)
      : 0;

    const iterator = imageIterator();
    const result = [];
    result.push(
      Matter.Composites.stack(
        xPos,
        yPos,
        rowCount,
        columnCount,
        rowGap,
        columnGap,
        (x: any, y: any) => {
          const imageProps = iterator.next().value as ImageInfoI;
          return Matter.Bodies.rectangle(x, y, 50, 50, {
            restitution: 1,
            render: {
              sprite: {
                texture: imageProps.image,
                xScale: imageProps.scale,
                yScale: imageProps.scale,
              },
            },
          });
        }
      )
    );

    xPos = this.sizes
      ? this.sizes.width / 2 - (columnCount * (columnGap + 50)) / 2
      : 0;
    yPos = this.sizes
      ? (this.sizes.height / 4) * 2 - rowCount * (rowGap - 1 + 50)
      : 0;

    rowCount = 3;
    columnCount = 2;

    result.push(
      Matter.Composites.stack(
        xPos,
        yPos,
        rowCount,
        columnCount,
        rowGap,
        columnGap,
        (x: any, y: any) => {
          const imageProps = iterator.next().value as ImageInfoI;
          return Matter.Bodies.rectangle(x, y, 50, 50, {
            restitution: 1,
            render: {
              sprite: {
                texture: imageProps.image,
                xScale: imageProps.scale,
                yScale: imageProps.scale,
              },
            },
          });
        }
      )
    );

    return result;
  }
}
