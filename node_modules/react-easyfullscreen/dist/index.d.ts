import * as React from 'react';

export interface ReactFullScreenComponentProps {
  children: () => React.ReactNode;
  onChange?: React.FC;
  onError?: React.FC;
}

export default class ReactFullScreenComponent extends React.Component<
  ReactFullScreenComponentProps
> {}
