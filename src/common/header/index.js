import React from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions';

class Header extends React.Component {
    render(){
        const { handelChangeItem, handelBtnClick, inputValue, list } = this.props
        return(
            <div>
                <input 
                    value={inputValue}
                    onChange={handelChangeItem} 
                />
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
    list: state.header.list,
    inputValue: state.header.inputValue
})
const mapToDispatch = (dispatch) => ({
    handelBtnClick(){
        dispatch(actions.changeName())
    },
    handelChangeItem(e){
        const value = e.target.value
        dispatch(actions.changeItem(value))
    }
})

export default connect(mapToState, mapToDispatch)(Header)