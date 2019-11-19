import React from 'react';
import { connect } from 'react-redux';
import state from './store'

class Header extends React.Component {
    render(){
        const { focused, list } = this.props
        return(
            <div>index
                {list.map((item, index) => {
                    return (
                        <span key={index}>{item}</span>
                    )
                })}
            </div>
        )
    }
}

const mapState = (state) = ({
    focused: state.header.focused,
    list: state.header.list
})

export default connect(mapState, null)(Header)