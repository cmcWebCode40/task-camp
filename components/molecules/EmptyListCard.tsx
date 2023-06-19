import { Heading } from 'components/atoms';
import { StyledView } from 'components/StyledRN';
import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';

interface EmptyListCardProps {
  message?: string;
}

const EmptyListCard: React.FunctionComponent<EmptyListCardProps> = ({
  message,
}) => {
  const animation = useRef<LottieView>(null);
  return (
    <StyledView>
      <StyledView className=''>
        <LottieView
          autoPlay={true}
          ref={animation}
          style={{
            height: 'auto',
          }}
          source={require('../../assets/isometric-cubes-empty-state.json')}
        />
      </StyledView>
      {message && (
        <Heading variant='sm' className='text-center'>
          {message}
        </Heading>
      )}
    </StyledView>
  );
};

export default EmptyListCard;
