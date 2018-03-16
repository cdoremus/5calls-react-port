import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Issue} from '../../common/model';
import { Call } from './index';
import { ApplicationState } from '../../redux/root';
import { CallState, OutcomeData, submitOutcome } from '../../redux/callState';

interface Props {
  issueId: string
}

interface StateProps {
  issues: Issue[];
  callState: CallState;
  issueId: string;
}

interface DispatchProps {
  onSubmitOutcome: (data: OutcomeData) => void;
}

const mapStateToProps = (state: ApplicationState, ownProps: Props): StateProps => {
  return {
    issues: state.remoteDataState.issues,
    callState: state.callState,
    issueId: ownProps.issueId,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ApplicationState>): DispatchProps => {
  return bindActionCreators(
    {onSubmitOutcome: submitOutcome},
    dispatch);
};

export default connect<StateProps, DispatchProps, Props>(mapStateToProps, mapDispatchToProps)(Call);
