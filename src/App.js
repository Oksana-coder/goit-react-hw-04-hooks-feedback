import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";
import Container from './components/Container';
import './App.scss';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const handleFeedback = (type) => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return Math.round(good/totalFeedback * 100);
  }

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={handleFeedback} />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() >= 1 ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={good === 0 ? '0%' : countPositiveFeedbackPercentage()+'%'} />
            :
            <Notification message="No feedback given" />}
        </Section>
      </Container>
    )
  }
