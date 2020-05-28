import React, { Component } from 'react'
import { connect } from 'react-redux'
import Counter from '../Counter/counter'

export class newHome extends Component {
    render() {
        return (
            <div>
                <Counter/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(newHome)
