var React = require('react')
var updateInput = require('../actions/CantoneseActions').updateInput

class CantoneseInput extends React.Component {
    render() {
        // todo: look for the compositionend event
        return (
            <input type="text" onChange={this.onChange} />
        )
    }

    onChange(e) {
        updateInput(e.currentTarget.value)
    }
}

module.exports = CantoneseInput