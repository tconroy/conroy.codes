import React from "react";
import styles from "./style.scss";

let timer;
let frame;
let pointer;
let confetti = [];
let particles = 150;
let spread = 40;
let sizeMin = 3;
let sizeMax = 12 - sizeMin;
let eccentricity = 10;
let deviation = 100;
let dxThetaMin = -0.1;
let dxThetaMax = -dxThetaMin - dxThetaMin;
let dyMin = 0.13;
let dyMax = 0.18;
let dThetaMin = 0.4;
let dThetaMax = 0.7 - dThetaMin;
let radius = 1 / eccentricity;
let radius2 = radius + radius;

const color = (r, g, b) => `rgb(${r},${g},${b})`;

const interpolation = (a, b, t) =>
  (1 - Math.cos(Math.PI * t)) / 2 * (b - a) + a;

const colorThemes = [
  () =>
    color(
      (200 * Math.random()) | 0,
      (200 * Math.random()) | 0,
      (200 * Math.random()) | 0
    ),
  () => {
    const black = (200 * Math.random()) | 0;
    return color(200, black, black);
  },
  () => {
    const black = (200 * Math.random()) | 0;
    return color(black, 200, black);
  },
  () => {
    const black = (200 * Math.random()) | 0;
    return color(black, black, 200);
  },
  () => color(200, 100, (200 * Math.random()) | 0),
  () => color((200 * Math.random()) | 0, 200, 200),
  () => {
    const black = (256 * Math.random()) | 0;
    return color(black, black, black);
  },
  () => colorThemes[Math.random() < 0.5 ? 1 : 2](),
  () => colorThemes[Math.random() < 0.5 ? 3 : 5](),
  () => colorThemes[Math.random() < 0.5 ? 2 : 4]()
];

const createPoisson = () => {
  // domain is the set of points which are still available to pick from
  // D = union{ [d_i, d_i+1] | i is even }
  let domain = [radius, 1 - radius];
  let measure = 1 - radius2;
  let spline = [0, 1];
  while (measure) {
    let dart = measure * Math.random();
    let i;
    let l;
    let interval;
    let a;
    let b;
    let c;
    let d;

    // Find where dart lies
    for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
      (a = domain[i]), (b = domain[i + 1]), (interval = b - a);
      if (dart < measure + interval) {
        spline.push((dart += a - measure));
        break;
      }
      measure += interval;
    }
    (c = dart - radius), (d = dart + radius);

    // Update the domain
    for (i = domain.length - 1; i > 0; i -= 2) {
      (l = i - 1), (a = domain[l]), (b = domain[i]);
      // c---d          c---d  Do nothing
      //   c-----d  c-----d    Move interior
      //   c--------------d    Delete interval
      //         c--d          Split interval
      //       a------b
      if (a >= c && a < d)
        if (b > d)
          domain[l] = d; // Move interior (Left case)
        else domain.splice(l, 2);
      else if (a < c && b > c)
        if (b <= d)
          // Delete interval
          domain[i] = c; // Move interior (Right case)
        else domain.splice(i, 0, c, d); // Split interval
    }

    // Re-measure the domain
    for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
      measure += domain[i + 1] - domain[i];
  }

  return spline.sort();
};

function Confetto(theme) {
  this.frame = 0;
  this.outer = document.createElement("div");
  this.inner = document.createElement("div");
  this.outer.appendChild(this.inner);

  var outerStyle = this.outer.style,
    innerStyle = this.inner.style;
  outerStyle.position = "absolute";
  outerStyle.width = sizeMin + sizeMax * Math.random() + "px";
  outerStyle.height = sizeMin + sizeMax * Math.random() + "px";
  innerStyle.width = "100%";
  innerStyle.height = "100%";
  innerStyle.backgroundColor = theme();

  outerStyle.perspective = "50px";
  outerStyle.transform = `rotate(${360 * Math.random()}deg)`;
  this.axis =
    "rotate3D(" +
    Math.cos(360 * Math.random()) +
    "," +
    Math.cos(360 * Math.random()) +
    ",0,";
  this.theta = 360 * Math.random();
  this.dTheta = dThetaMin + dThetaMax * Math.random();
  innerStyle.transform = `${this.axis + this.theta}deg)`;

  this.x = window.innerWidth * Math.random();
  this.y = -deviation;
  this.dx = Math.sin(dxThetaMin + dxThetaMax * Math.random());
  this.dy = dyMin + dyMax * Math.random();
  outerStyle.left = `${this.x}px`;
  outerStyle.top = `${this.y}px`;

  // Create the periodic spline
  this.splineX = createPoisson();
  this.splineY = [];
  for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
    this.splineY[i] = deviation * Math.random();
  this.splineY[0] = this.splineY[l] = deviation * Math.random();

  this.update = function(height, delta) {
    this.frame += delta;
    this.x += this.dx * delta;
    this.y += this.dy * delta;
    this.theta += this.dTheta * delta;

    // Compute spline and convert to polar
    var phi = (this.frame % 7777) / 7777,
      i = 0,
      j = 1;
    while (phi >= this.splineX[j]) i = j++;
    var rho = interpolation(
      this.splineY[i],
      this.splineY[j],
      (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
    );
    phi *= Math.PI * 2;

    outerStyle.left = `${this.x + rho + Math.cos(phi)}px`;
    outerStyle.top = `${this.y + rho + Math.sin(phi)}px`;
    innerStyle.transform = `${this.axis + this.theta}deg)`;
    return this.y > height + deviation;
  };
}

export default class Confetti extends React.Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    const confetti = [];
    const confetto = new Confetto(colorThemes[0]);
    confetti.push(confetto);
    this.state = {
      confetti
    };
  }

  show() {
    let { confetti } = this.state;
    const { container } = this;
    let prev;

    requestAnimationFrame(function loop(timestamp) {
      let height = window.innerHeight;
      let delta = prev ? timestamp - prev : 0;
      prev = timestamp;
      for (var i = confetti.length; i >= 0; i--) {
        console.log("?", confetti[i]);
        if (confetti[i].update(height, delta)) {
          container.removeChild(confetti[i].outer);
          this.setState({ confetti: confetti.splice(i, 1) });
          confetti = this.state.confetti;
        }
      }
      if (timer || confetti.length) {
        return (frame = requestAnimationFrame(loop));
      }

      document.body.removeChild(container);
      frame = undefined;
    });
  }

  render() {
    const { children } = this.props;
    return (
      <span onClick={this.show}>
        <div ref={el => (this.container = el)} className={styles.container} />
        {children}
      </span>
    );
  }
}
