import React, { PropTypes } from "react";

import "./index.global.scss";
import "./highlight.global.css";

import Container from "./components/Container";
import DefaultHeadMeta from "./components/DefaultHeadMeta";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

// GOOGLE Analytics, part 1/2
const GOOGLE_ANALYTICS_UA = "UA-54975811-2";
if (typeof window !== "undefined") {
  /* eslint-disable import/newline-after-import */
  /* eslint-disable import/max-dependencies */

  // eslint-disable-next-line
  window.ga =
    window.ga ||
    function() {
      (ga.q = ga.q || []).push(arguments);
    };
  ga.l = +new Date();
  /* global ga: true */
  // ga comes from google-analytics script injected below
  ga("create", GOOGLE_ANALYTICS_UA, "auto");

  // autotrack
  // https://github.com/googleanalytics/autotrack

  // most important plugin for phenomic
  require("autotrack/lib/plugins/url-change-tracker");
  ga("require", "urlChangeTracker");

  // some plugins you might like
  require("autotrack/lib/plugins/clean-url-tracker");
  ga("require", "cleanUrlTracker");
  require("autotrack/lib/plugins/outbound-form-tracker");
  ga("require", "outboundFormTracker");
  require("autotrack/lib/plugins/outbound-link-tracker");
  ga("require", "outboundLinkTracker");

  // check out more here https://github.com/googleanalytics/autotrack#plugins

  // now that everything is ready, log initial page
  ga("send", "pageview");
  /* eslint-disable no-console */
  console.log("pageview");
}

const AppContainer = props => (
  <Container>
    <DefaultHeadMeta
      scripts={[
        // GOOGLE Analytics, part 2/2
        { async: true, src: "https://www.google-analytics.com/analytics.js" }
      ]}
    />
    {!props.location.pathname === "/" ? <Header /> : null}
    <Content>{props.children}</Content>
    {!props.location.pathname === "/" ? <Footer /> : null}
  </Container>
);

AppContainer.propTypes = {
  children: PropTypes.node
};

export default AppContainer;
