import React from 'react';
import Griddle from 'griddle-react';
import { canViewResults } from '/imports/permissions';

export default class Results extends React.Component {
  render() {
    if (!canViewResults(this.props.user)) {
      return (
        <div>You cannot view results</div>
      );
    }

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
