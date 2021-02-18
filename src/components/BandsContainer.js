import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {

    renderBands = () => {
        return(
            <ul>
                {this.props.bands.map((band, indx) => <Band key={indx} band={band} deleteBand={this.props.deleteBand}/>)}
            </ul>
        ) 
    }

    render() {
        return (
        <div>
            <BandInput addBand={this.props.addBand}/>
            {this.renderBands()}
        </div>
        )
    }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: bandId => dispatch({ type: "DELETE_BAND", id: bandId})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)