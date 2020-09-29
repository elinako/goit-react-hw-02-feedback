import React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = (e) => {
    const { name } = e.target;
    this.setState({ [name]: this.state[name] + 1 });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, elem) => acc + elem, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good /
        Object.values(this.state).reduce((acc, elem) => acc + elem, 0)) *
        100
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    let positiveFeedback = this.countPositiveFeedbackPercentage();
    let statisticsSumm = good + neutral + bad;
    if (isNaN(positiveFeedback)) {
      positiveFeedback = 0;
    }

    return (
      <>
        <Section title={`Please leave feedback`} />
        <FeedbackOptions onLeaveFeedback={this.handleChange} />
        <Section title={`Statistics`} />
        {statisticsSumm >= 1 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

Feedback.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positiveFeedback: 0,
};
