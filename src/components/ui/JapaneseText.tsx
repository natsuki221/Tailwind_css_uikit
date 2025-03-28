'use client';
import React from 'react';
import Text from './Text';

interface JapaneseTextProps extends React.ComponentProps<typeof Text> {
  font?: string;
}

const JapaneseText: React.FC<JapaneseTextProps> = ({ font = 'Klee One', style, ...props }) => {
  return (
    <Text
      {...props}
      style={{
        fontFamily: font,
        ...style,
      }}
    />
  );
};

export default JapaneseText;
