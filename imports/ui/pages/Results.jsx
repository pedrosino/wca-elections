import React from 'react';
import Griddle from 'griddle-react';

export default class Results extends React.Component {
  render() {
    let rowMetaData = {
      bodyCssClassName(rowData) {
        if (rowData.percent <= 50) {
          return 'inelligible';
        }
      }
    }
    return (
      <Griddle
        results={this.props.results}
        resultsPerPage={50}
        initialSort={'yes'}
        initialSortAscending={false}
        rowMetadata={rowMetaData}
        useGriddleStyles={false}
        tableClassName={'table table-striped table-condensed table-hover'}
        settingsToggleClassName={'btn btn-default'}
      />
    );
  }
};