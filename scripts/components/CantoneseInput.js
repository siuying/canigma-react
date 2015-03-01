var React = require('react')
var updateInput = require('../actions/CantoneseActions').updateInput

class CantoneseInput extends React.Component {
    render() {
        return (
            <input type="text" onChange={this.onChange} />
        )
    }

    onChange(e) {
        updateInput(e.target.value)
    }
}

module.exports = CantoneseInput