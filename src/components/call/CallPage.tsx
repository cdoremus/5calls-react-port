import * as React from 'react';
import { CallContainer } from './index';
import { Layout } from '../shared';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{}> { }

const CallPage: React.StatelessComponent<Props> = ({ match }: Props) => {
  return (
    <Layout>
      <CallContainer issueId={(match.params as any).id} />
    </Layout>
  );
};

export default CallPage;
