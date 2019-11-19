import React from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions';

class Header extends React.Component {
    render(){
        const { handelBtnClick, focused, list } = this.props
        return(
            <div>
                <input value={focused} />
                <button onClick={handelBtnClick}>切换</button>
                {list.map((item, index) => {
                    return (
                        <span key={index}>{item}</span>
                    )
                })}
            </div>
        )
    }
}

const mapToState = (state) => ({
    focused: state.header.focused,
    list: state.header.list
})
const mapToDispatch = (dispatch) => ({
    handelBtnClick(){
        dispatch(actions.changeName())
    }
})

export default connect(mapToState, mapToDispatch)(Header)