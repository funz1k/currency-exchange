import { useState } from 'react';
import { Section } from './App.styled';
import Statistics from './Statistics';
import Notification from './Notification';
import Container from './Container';
import FeedbackOptions from './FeedbackOptions';

const App = () => {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);

  const onBtnClick = evt => {
    const { name } = evt.currentTarget;

    switch (name) {
      case 'good':
        setGoodFeedback(state => state + 1);
        break;
      case 'neutral':
        setNeutralFeedback(state => state + 1);
        break;
      case 'bad':
        setBadFeedback(state => state + 1);
        break;
      default:
        break;
    }
  };

  const totalFeedback = () => {
    return goodFeedback + neutralFeedback + badFeedback;
  };

  const percentagePositiveFeedback = () => {
    return totalFeedback() ? parseInt((goodFeedback / totalFeedback()) * 100) : 0;
  };

  return (
    <Section>
      <Container title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onClick={onBtnClick}
        />
      </Container>

      <Container title="Statistics">
        {true ? (
          <Statistics
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            total={totalFeedback()}
            positivePercentage={percentagePositiveFeedback()}
          />
        ) : (
          <Notification title="No feedback given" />
        )}
      </Container>
    </Section>
  )
}

export default App;