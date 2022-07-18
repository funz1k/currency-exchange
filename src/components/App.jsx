import { Component } from 'react';
import { Section } from './App.styled';
import Statistics from './Statistics';
import Notification from './Notification';
import Container from './Container';
import FeedbackOptions from './FeedbackOptions';

export class App extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = evt => {
    const { name } = evt.currentTarget;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  totalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  percentagePositiveFeedback = () => {
    return parseInt((this.state.good / this.totalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section>
        <Container title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onClick={this.onBtnClick}
          />
        </Container>

        <Container title="Statistics">
          {this.totalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback()}
              positivePercentage={this.percentagePositiveFeedback()}
            />
          ) : (
            <Notification title="No feedback given" />
          )}
        </Container>
      </Section>
    );
  }
}
