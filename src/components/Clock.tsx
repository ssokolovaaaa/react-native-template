import React from 'react';
import {Text} from 'react-native';

const Clock: React.FC = () => {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Text>{date.toString()}</Text>;
};

export default Clock;
