import React, { PureComponent } from 'react'
import Griddle, { plugins } from 'griddle-react';
import './data-table.css'

// const DataTable = (props) => {
//   let data = [
//     { one: 'one', two: 'two', three: 'three' },
//     { one: 'uno', two: 'dos', three: 'tres' },
//     { one: 'ichi', two: 'ni', three: 'san' }
//   ];

//   return <div className="data-table">
//     <h2>Lista de usuarios</h2>
//     <Griddle
//       data={props.data}
//       plugins={[plugins.LocalPlugin]}
//     />
//   </div>
// }

// export default DataTable

class DataTable extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      currentPage: 1,
      pageSize: 25,
      recordCount: 0
    }
  }
  componentWillUpdate() {
    const { data } = this.props;
    console.log("update2", data.length)
    this.setState({
      data,
      currentPage: 1
    });
  }
  render () {
    const { data, currentPage, pageSize, recordCount } = this.state
    console.log("state",this.state)
    return (
      <div className="data-table">
        <h2>Lista de usuarios</h2>
          <Griddle
            data={data}
            plugins={[plugins.LocalPlugin]}
            pageProperties={{ data, currentPage, pageSize, recordCount }}
          />
     </div>
    )
  }
}

export default DataTable
