import { Component } from "react";
import { withSnackbar } from 'notistack';
import {connect} from 'react-redux';
import { LinearProgress, CircularProgress } from "@material-ui/core";

class MesheryProgressBar extends Component {
    key = '';
    
    shouldComponentUpdate(nextProps) {
        const { showProgress } = this.props;
        // if ((this.key !== '' && !showProgress) || (this.key === '' && showProgress)){
        //     return true; 
        // }
        return !(showProgress === nextProps.showProgress);
        // return false;
    }

    componentDidUpdate() {
        const { showProgress } = this.props;
        if(showProgress){
            this.key = this.props.enqueueSnackbar(<div style={{width: 250}}><LinearProgress color="secondary" /></div>,{
                variant: 'default',
            });
        } else {
            this.props.closeSnackbar(this.key);
        }
    }

    render() {
        return null;
    }
};

const mapStateToProps = state => {
    return { showProgress: state.get('showProgress') };
  }
  
export default connect(
    mapStateToProps
)(withSnackbar(MesheryProgressBar));