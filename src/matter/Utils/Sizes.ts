import { EventEmitter } from "events";
import SkillPlayground from "../index";

export default class Sizes extends EventEmitter {
  playground;
  width;
  height;
  pixelRatio;
  constructor() {
    super();

    // Setup
    this.playground = new SkillPlayground();

    this.width = this.playground.container?.clientWidth
      ? this.playground.container?.clientWidth
      : Math.min(window.innerWidth, 400);
    this.height = this.playground.container?.clientWidth
      ? this.playground.container?.clientHeight
      : window.innerHeight;

    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    window.addEventListener("resize", () => {
      this.width = this.playground.container?.clientWidth
        ? this.playground.container?.clientWidth
        : window.innerWidth;
      this.height = this.playground.container?.clientWidth
        ? this.playground.container?.clientHeight
        : window.innerHeight;

      this.pixelRatio = Math.min(window.devicePixelRatio, 2);

      this.emit("resize");
    });
  }
}
