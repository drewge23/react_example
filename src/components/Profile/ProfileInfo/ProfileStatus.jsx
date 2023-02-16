import React from "react";
import {setProfileStatus} from "../profileSlice";

export default class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        statusText: this.props.status,
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = (e) => {
        this.setState({editMode: false});
        this.props.dispatch(setProfileStatus(e.target.value))
    }
    updateStatus = (e) => {
        this.setState({statusText: e.target.value})
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span
                            onClick={this.activateEditMode}
                        >{this.props.status}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input value={this.statusText}
                               onChange={this.updateStatus}
                               onBlur={this.deactivateEditMode}
                        />
                    </div>}
            </div>
        )
    }
}
