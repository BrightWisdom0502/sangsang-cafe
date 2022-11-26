import beverage from './data/beverage';
import coffee from './data/coffee';
import desserts from './data/desserts';
import tea from './data/tea';

import Card from 'react-bootstrap/Card';

const EditData = () => {
  return (
    <div>
        <div className="row">
        {
            beverage.map(function(n, i) {
                return (
                    <Card beverage={beverage[i]} i={i} key={i} />
                )
            })
        }
        </div>

        <div className="row">
        {
            coffee.map(function(n, i) {
                return (
                    <Card coffee={coffee[i]} i={i} key={i} />
                )
            })
        }
        </div>

        <div className="row">
        {
            desserts.map(function(n, i) {
                return (
                    <Card desserts={desserts[i]} i={i} key={i} />
                )
            })
        }
        </div>

        <div className="row">
        {
            tea.map(function(n, i) {
                return (
                    <Card tea={tea[i]} i={i} key={i} />
                )
            })
        }
        </div>

    </div>
  )
}

export default EditData;