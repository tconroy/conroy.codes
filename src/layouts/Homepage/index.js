import React from "react";
import styles from "./index.scss";
import Confetti from "react-dom-confetti";
import "animate.css/animate.css";
import meta from "../../metadata";

class HomepageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        `I'll`,
        "help",
        "transform",
        "your",
        "product",
        "vision",
        "into",
        "beautiful",
        "experiences",
        "your",
        "users",
        "will"
      ],
      index: 0
    };
  }
  componentDidMount() {
    document.querySelector(
      'img[data-heart-img="true"]'
    ).style.animationPlayState = "running";

    this.interval = window.setInterval(() => {
      if (this.state.index > this.state.words.length - 1) {
        clearInterval(this.interval);
        this.setState({ ...this.state, index: -1 });
        this.heartEl.click();
        return;
      }
      this.setState({
        ...this.state,
        index: this.state.index + 1
      });
    }, 275);
  }
  componentWillUnmount() {
    if (this.interval) {
      window.clearInterval(this.interval);
    }
  }
  render() {
    const { words, index } = this.state;
    return (
      <span
        className={`${styles["words-wrapper"]} ${
          index === -1 ? "" : styles.active
        }`}
      >
        {words.map((word, i) => {
          return (
            <span
              className={`${styles.word} ${index === i ? styles.active : ""}`}
            >
              {word}
            </span>
          );
        })}
        <span
          className={styles.heart}
          ref={el => (this.heartEl = el)}
          onClick={() => {
            if (!this.state.showConfetti) {
              this.setState({ showConfetti: true }, () => {
                window.setTimeout(() => {
                  this.setState({ showConfetti: false });
                }, 1000);
              });
            }
          }}
        >
          <Confetti
            active={this.state.showConfetti}
            config={{
              angle: 90,
              spread: 120,
              startVelocity: 30,
              elementCount: 200,
              decay: 0.95
            }}
          />
          <img
            data-heart-img="true"
            src="data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIg0KICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyINCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyINCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSINCiAgIHdpZHRoPSIzOTMuOTc2NTMiDQogICBoZWlnaHQ9IjM2My40MjIyNyINCiAgIGlkPSJzdmcyIg0KICAgdmVyc2lvbj0iMS4xIg0KICAgaW5rc2NhcGU6dmVyc2lvbj0iMC40NyByMjI1ODMiDQogICBzb2RpcG9kaTpkb2NuYW1lPSJOZXcgZG9jdW1lbnQgMSI+DQogIDxkZWZzDQogICAgIGlkPSJkZWZzNCI+DQogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlDQogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCINCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogNTI2LjE4MTA5IDogMSINCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiDQogICAgICAgaW5rc2NhcGU6dnBfej0iNzQ0LjA5NDQ4IDogNTI2LjE4MTA5IDogMSINCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMzcyLjA0NzI0IDogMzUwLjc4NzM5IDogMSINCiAgICAgICBpZD0icGVyc3BlY3RpdmUxMCIgLz4NCiAgPC9kZWZzPg0KICA8c29kaXBvZGk6bmFtZWR2aWV3DQogICAgIGlkPSJiYXNlIg0KICAgICBwYWdlY29sb3I9IiNmZmZmZmYiDQogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2Ig0KICAgICBib3JkZXJvcGFjaXR5PSIxLjAiDQogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiDQogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiDQogICAgIGlua3NjYXBlOnpvb209IjAuNDc0MTcxMzUiDQogICAgIGlua3NjYXBlOmN4PSIyNzYuODU2ODgiDQogICAgIGlua3NjYXBlOmN5PSIyNzAuNjYyNjQiDQogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCINCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIg0KICAgICBzaG93Z3JpZD0iZmFsc2UiDQogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI4MCINCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNzQ0Ig0KICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTQiDQogICAgIGlua3NjYXBlOndpbmRvdy15PSItNCINCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgLz4NCiAgPG1ldGFkYXRhDQogICAgIGlkPSJtZXRhZGF0YTciPg0KICAgIDxyZGY6UkRGPg0KICAgICAgPGNjOldvcmsNCiAgICAgICAgIHJkZjphYm91dD0iIj4NCiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+DQogICAgICAgIDxkYzp0eXBlDQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+DQogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPg0KICAgICAgPC9jYzpXb3JrPg0KICAgIDwvcmRmOlJERj4NCiAgPC9tZXRhZGF0YT4NCiAgPGcNCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiDQogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiDQogICAgIGlkPSJsYXllcjEiDQogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NS4xOTAzNjYsLTQzMy40MjE0NSkiPg0KICAgIDxyZWN0DQogICAgICAgc3R5bGU9ImZpbGw6I2UzMGExNztmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSINCiAgICAgICBpZD0icmVjdDI4MTYiDQogICAgICAgd2lkdGg9IjIyOC41NzE0MyINCiAgICAgICBoZWlnaHQ9IjIyOC41NzE0MyINCiAgICAgICB4PSI1NDAuOTUzMzEiDQogICAgICAgeT0iMTI4LjgxMTA1Ig0KICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MTA2NzgsMC43MDcxMDY3OCwtMC43MDcxMDY3OCwwLjcwNzEwNjc4LDAsMCkiIC8+DQogICAgPHBhdGgNCiAgICAgICBzb2RpcG9kaTp0eXBlPSJhcmMiDQogICAgICAgc3R5bGU9ImZpbGw6I2UzMGExNztmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSINCiAgICAgICBpZD0icGF0aDI4MjAiDQogICAgICAgc29kaXBvZGk6Y3g9IjI5NC4yODU3MSINCiAgICAgICBzb2RpcG9kaTpjeT0iNDAwLjkzMzYyIg0KICAgICAgIHNvZGlwb2RpOnJ4PSIxMTcuMTQyODYiDQogICAgICAgc29kaXBvZGk6cnk9IjExNy4xNDI4NiINCiAgICAgICBkPSJtIDQxMS40Mjg1Nyw0MDAuOTMzNjIgYyAwLDY0LjY5NjIyIC01Mi40NDY2NSwxMTcuMTQyODYgLTExNy4xNDI4NiwxMTcuMTQyODYgLTY0LjY5NjIyLDAgLTExNy4xNDI4NiwtNTIuNDQ2NjQgLTExNy4xNDI4NiwtMTE3LjE0Mjg2IDAsLTY0LjY5NjIxIDUyLjQ0NjY0LC0xMTcuMTQyODYgMTE3LjE0Mjg2LC0xMTcuMTQyODYgNjQuNjk2MjEsMCAxMTcuMTQyODYsNTIuNDQ2NjUgMTE3LjE0Mjg2LDExNy4xNDI4NiB6Ig0KICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04MS45NTI0NzksMTUxLjEzMDg0KSIgLz4NCiAgICA8cGF0aA0KICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc3LjczODMzMSwxNDkuNjMwNjkpIg0KICAgICAgIGQ9Im0gNDExLjQyODU3LDQwMC45MzM2MiBjIDAsNjQuNjk2MjIgLTUyLjQ0NjY1LDExNy4xNDI4NiAtMTE3LjE0Mjg2LDExNy4xNDI4NiAtNjQuNjk2MjIsMCAtMTE3LjE0Mjg2LC01Mi40NDY2NCAtMTE3LjE0Mjg2LC0xMTcuMTQyODYgMCwtNjQuNjk2MjEgNTIuNDQ2NjQsLTExNy4xNDI4NiAxMTcuMTQyODYsLTExNy4xNDI4NiA2NC42OTYyMSwwIDExNy4xNDI4Niw1Mi40NDY2NSAxMTcuMTQyODYsMTE3LjE0Mjg2IHoiDQogICAgICAgc29kaXBvZGk6cnk9IjExNy4xNDI4NiINCiAgICAgICBzb2RpcG9kaTpyeD0iMTE3LjE0Mjg2Ig0KICAgICAgIHNvZGlwb2RpOmN5PSI0MDAuOTMzNjIiDQogICAgICAgc29kaXBvZGk6Y3g9IjI5NC4yODU3MSINCiAgICAgICBpZD0icGF0aDI4MjIiDQogICAgICAgc3R5bGU9ImZpbGw6I2UzMGExNztmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSINCiAgICAgICBzb2RpcG9kaTp0eXBlPSJhcmMiIC8+DQogIDwvZz4NCjwvc3ZnPg=="
          />
        </span>
      </span>
    );
  }
}

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showConfetti: false
    };
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <a className={styles.cta} href="mailto:tom@thomasconroy.net">
          {"Get in Touch"}
        </a>
        <div className={styles.content}>
          <h1>
            {`Hey! I'm Tom, a Frontend Engineer based out of New York City.`}
          </h1>
          <h2>
            <HomepageContent />
          </h2>
          <ul className={styles.socialList}>
            <li tabIndex="0" className={styles.resume}>
              <a
                tabIndex="-1"
                title="Resume"
                target="_blank"
                href="../assets/docs/resume-tomconroy-frontend-engineer-2018.pdf"
              >
                <i className="icon-resume" />
                <div className={styles.title}>Resume</div>
              </a>
            </li>
            <li tabIndex="0" className={styles.twitter}>
              <a
                tabIndex="-1"
                title="Twitter"
                href={`//www.twitter.com/${meta.pkg.twitter}`}
              >
                <i className="icon-twitter" />
                <div className={styles.title}>Twitter</div>
              </a>
            </li>
            <li tabIndex="0" className={styles.linkedin}>
              <a
                tabIndex="-1"
                title="LinkedIn"
                href={`//www.linkedin.com/in/${meta.pkg.linkedin}`}
              >
                <i className="icon-linkedin" />
                <div className={styles.title}>LinkedIn</div>
              </a>
            </li>
            <li tabIndex="0" className={styles.github}>
              <a
                tabIndex="-1"
                title="GitHub"
                href={`//www.github.com/${meta.pkg.github}`}
              >
                <i className="icon-github" />
                <div className={styles.title}>GitHub</div>
              </a>
            </li>
            <li tabIndex="0" className={styles.email}>
              <a
                tabIndex="-1"
                title="Email"
                href={`mailto:tom@thomasconroy.net`}
              >
                <i className="icon-paper-plane" />
                <div className={styles.title}>Email</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Homepage;
