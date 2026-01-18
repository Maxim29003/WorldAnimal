import Column from '@layouts/Column/Column';
import { Colors } from '@styles/colors';
import { Spacer } from '@ui/Spacer/Spacer';
import UIText from '@ui/UIText/UIText';
import React, { ReactNode } from 'react';
import BootSplash from 'react-native-bootsplash';

type ErrorBoundaryProps = { children: ReactNode };
type ErrorBoundaryState = { hasError: boolean };

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    BootSplash.hide({ fade: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Column
          flex={1}
          justify="center"
          align="center"
          style={{ backgroundColor: Colors.White }}
        >
          <UIText style={{ textAlign: 'center' }} variant="headerTitle">
            Что-то пошло не так 😢
          </UIText>
          <Spacer vertical={16} />
          <UIText style={{ textAlign: 'center' }} variant="animalName">
            Пожалуйста, перезапустите приложение
          </UIText>
        </Column>
      );
    }

    return this.props.children;
  }
}
